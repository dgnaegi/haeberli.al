"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Section from "../../components/Section";
import Reveal from "../../components/Reveal";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { S } from "../../styles/spacing";
import { FONT_BODY, FONT_DISPLAY } from "../../styles/fonts";
import LinkButton from "@/src/ui/LinkButton";
import Button from "@/src/ui/Button";
import { track } from "@vercel/analytics";
import SectionTitle from "@/src/ui/SectionTitle";
import Checkbox from "@/src/ui/Checkbox";
import FormField, { Input, Textarea } from "@/src/ui/FormField";
import FormRow from "@/src/ui/FormRow";
import { onInvalidInput, onInputInput, onInvalidTextarea, onInputTextarea } from "@/src/lib/formValidation";

const Inner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: ${S.x12} ${S.x6} ${S.x16};
  display: grid;
  gap: ${S.x7};
`;

const Title = SectionTitle;

const Sub = styled.p`
  margin: 0 auto ${S.x3};
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.5vw, 18px);
  max-width: 70ch;
  text-align: center;
`;

const Block = styled.div<{ $hasHeader?: boolean }>`
  background: #ffffff;
  border-radius: 12px;
  overflow: visible;
  ${props => !props.$hasHeader && `padding: ${S.x5};`}
  ${props => !props.$hasHeader && `
    max-width: 600px;
    margin: 0 auto;
  `}
`;

const BlockHeader = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  color: #0A0A0A;
  text-align: left;
  padding: ${S.x4} ${S.x5};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > span {
    font-size: clamp(20px, 5vw, 32px);
    line-height: 1;
    font-weight: 900;
  }
`;

const BlockTitle = styled.h3`
  margin: 0;
  color: #0A0A0A;
  font-family: ${FONT_DISPLAY};
  font-size: clamp(20px, 3.8vw, 28px);
  margin: 0;
`;

const NoBorderBlock = styled.div`
  border: none;
  background: transparent;
  padding: ${S.x5};
`;

const P = styled.p`
  margin: 0 0 ${S.x3};
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.2vw, 18px);
`;

const Form = styled.form`
  display: grid;
  gap: ${S.x4};
`;

const CheckboxGroup = styled.div`
  display: grid;
  gap: ${S.x3};
  margin-bottom: ${S.x4};
  overflow: visible;
`;

const SubCheckboxGroup = styled.div`
  display: grid;
  gap: ${S.x2};
  margin-left: ${S.x5};
  margin-top: ${S.x2};
  margin-bottom: ${S.x2};
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${S.x4};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${S.x2};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #0A0A0A;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  display: block;
`;

const QrImg = styled.img`
  width: 220px;
  height: auto;
  display: block;
  margin: 0;
`;

const IconButton = styled(LinkButton)`
  border: none;
  background: transparent;
  padding: 0;
  margin-top: 0;
  box-shadow: none;
  &:hover { background: transparent; border: none; transform: none; box-shadow: none; }
`;

const DonateButton = styled(Button)`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const DonateText = styled(P)`
  margin: ${S.x4} auto ${S.x3};
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const DonateOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${S.x5};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 250ms ease;
`;

const DonateModal = styled.div<{ $open: boolean }>`
  background: #ffffff;
  border-radius: 12px;
  padding: ${S.x6};
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${({ $open }) => ($open ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 250ms ease, opacity 250ms ease;
`;

const DonateModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${S.x5};
`;

const DonateModalTitle = styled.h3`
  margin: 0;
  color: #0A0A0A;
  font-family: ${FONT_DISPLAY};
  font-size: clamp(20px, 3.8vw, 28px);
`;

const DonateModalClose = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  color: #0A0A0A;
  font-size: 28px;
  line-height: 1;
  padding: ${S.x2};
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DonateModalBody = styled.div`
  color: #333333;
  font-family: ${FONT_BODY};
  font-size: clamp(14px, 2.2vw, 18px);
`;

export default function Support() {
  const pathname = usePathname();
  const router = useRouter();
  const [publicSupport, setPublicSupport] = React.useState(false);
  const [withQuote, setWithQuote] = React.useState(false);
  const [materialOrder, setMaterialOrder] = React.useState(false);
  const [stickerOrder, setStickerOrder] = React.useState(false);
  const [flyerOrder, setFlyerOrder] = React.useState(false);
  const [stampOrder, setStampOrder] = React.useState(false);
  const [quoteLength, setQuoteLength] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);
  const [openDonate, setOpenDonate] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formTsRef = React.useRef<number>(Date.now());
  const formStartTrackedRef = React.useRef(false);

  const needsAddress = materialOrder;
  const needsQuoteFields = withQuote;
  
  // When materialOrder is checked, default sticker, flyer, and stamp orders to true
  React.useEffect(() => {
    if (materialOrder) {
      setStickerOrder(true);
      setFlyerOrder(true);
    } else {
      setStickerOrder(false);
      setFlyerOrder(false);
      setStampOrder(false);
    }
  }, [materialOrder]);
  
  // When no material items are selected, uncheck materialOrder
  React.useEffect(() => {
    if (!stickerOrder && !flyerOrder && !stampOrder) {
      setMaterialOrder(false);
    }
  }, [stickerOrder, flyerOrder, stampOrder]);
  
  // When publicSupport is unchecked, uncheck withQuote
  React.useEffect(() => {
    if (!publicSupport) {
      setWithQuote(false);
    }
  }, [publicSupport]);

  // Track when user starts filling out the form
  const trackFormStart = React.useCallback(() => {
    if (!formStartTrackedRef.current) {
      formStartTrackedRef.current = true;
      track('form_start', { section: 'support' });
    }
  }, []);

  // Track checkbox changes
  const handleCheckboxChange = React.useCallback((setter: (value: boolean) => void, value: boolean, label: string) => {
    trackFormStart();
    track('form_checkbox', { checked: value, option: label });
    setter(value);
  }, [trackFormStart]);

  // Handle routing: /spenden opens overlay, /support scrolls to section
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToSupport = () => {
      const element = document.getElementById("unterstuetzen");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Handle pathname routing first
    if (pathname === "/spenden") {
      // Only open overlay, don't scroll
      setOpenDonate(true);
    } else if (pathname === "/support") {
      if (!scrollToSupport()) {
        setTimeout(() => scrollToSupport(), 100);
      }
    }

    // Handle hash links (backward compatibility) - only if not on /spenden or /support
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash === "#unterstuetzen" || hash === "#support") {
        if (!scrollToSupport()) {
          setTimeout(() => scrollToSupport(), 100);
        }
      }
    }

    // Check for publicQuote query parameter (backward compatibility)
    const params = new URLSearchParams(window.location.search);
    if (params.get("publicQuote") === "true") {
      setPublicSupport(true);
      setWithQuote(true);
      // Remove query parameter after setting
      const url = new URL(window.location.href);
      url.searchParams.delete("publicQuote");
      window.history.replaceState({}, "", url.toString());
    }
  }, [pathname]);

  // Listen for custom event to set public support checkbox
  React.useEffect(() => {
    const handleSetPublicQuote = (e: CustomEvent) => {
      if (e.detail === true) {
        setPublicSupport(true);
        setWithQuote(true);
      }
    };

    window.addEventListener("setPublicQuote" as any, handleSetPublicQuote);
    return () => {
      window.removeEventListener("setPublicQuote" as any, handleSetPublicQuote);
    };
  }, []);

  // Close overlay and update URL when overlay closes
  const handleCloseDonate = () => {
    setOpenDonate(false);
    track('support_toggle', { block: 'donate', state: 'close' });
    if (pathname === "/spenden") {
      router.push("/");
    }
  };

  // Open overlay without changing route
  const handleOpenDonate = () => {
    setOpenDonate(true);
    track('support_toggle', { block: 'donate', state: 'open' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    // Check if at least one checkbox is selected
    if (!publicSupport && !materialOrder) {
      setSubmitMessage('Bitte wähle mindestens eine Option aus.');
      setIsSubmitting(false);
      return;
    }
    
    const form = e.currentTarget as typeof e.currentTarget & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      street: { value: string };
      zip: { value: string };
      city: { value: string };
      function: { value: string };
      quote: { value: string };
      image: HTMLInputElement;
      website: { value: string };
      ts: { value: string };
    };

    try {
      // Validate required fields - name/email needed for publicSupport or materialOrder
      if (publicSupport || materialOrder) {
        if (!form.firstName.value || !form.lastName.value || !form.email.value) {
          setSubmitMessage('Bitte fülle alle Pflichtfelder aus.');
          setIsSubmitting(false);
          return;
        }
      }

      // Validate quote fields if withQuote is selected
      if (withQuote) {
        if (!form.quote.value) {
          setSubmitMessage('Bitte gib ein Zitat ein.');
          setIsSubmitting(false);
          return;
        }
        if (form.quote.value.length > 220) {
          setSubmitMessage('Das Zitat darf maximal 220 Zeichen lang sein.');
          setIsSubmitting(false);
          return;
        }
        if (!form.image?.files?.[0]) {
          setSubmitMessage('Bitte wähle ein Foto aus.');
          setIsSubmitting(false);
          return;
        }
      }

      // Validate address if material order is selected
      if (materialOrder) {
        if (!form.street?.value || !form.zip?.value || !form.city?.value) {
          setSubmitMessage('Bitte gib eine vollständige Adresse ein.');
          setIsSubmitting(false);
          return;
        }
      }

      // Upload image if withQuote is selected
      let imageUrl: string | null = null;
      let imageFilename: string | null = null;
      if (withQuote) {
        const imageFile = form.image?.files?.[0];
        if (!imageFile) {
          setSubmitMessage('Bitte wähle ein Foto aus.');
          setIsSubmitting(false);
          return;
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(imageFile.type.toLowerCase())) {
          setSubmitMessage('Nur JPEG, PNG, WebP oder GIF erlaubt.');
          setIsSubmitting(false);
          return;
        }

        // Validate file size (300MB)
        const maxSize = 300 * 1024 * 1024;
        if (imageFile.size > maxSize) {
          setSubmitMessage('Dateigröße muss kleiner als 300MB sein.');
          setIsSubmitting(false);
          return;
        }

        // Generate filename: lastname.png
        const lastName = form.lastName.value.toLowerCase().replace(/[^a-z0-9]/g, '-');
        imageFilename = `${lastName}.png`;

        try {
          const uploadFormData = new FormData();
          uploadFormData.append("file", imageFile);
          uploadFormData.append("filename", imageFilename);
          const uploadRes = await fetch('/tanja/api/testimonial-upload', {
            method: 'POST',
            body: uploadFormData,
          });
          if (!uploadRes.ok) {
            const errorData = await uploadRes.json().catch(() => ({ error: 'Upload fehlgeschlagen' }));
            throw new Error(errorData.error || 'Image upload failed');
          }
          const uploadData = await uploadRes.json();
          imageUrl = uploadData.url;
        } catch (err: any) {
          setSubmitMessage(err.message || 'Das Bild konnte nicht hochgeladen werden. Bitte versuche es erneut.');
          setIsSubmitting(false);
          return;
        }
      }

      // Generate ID: firstname-lastname
      const firstName = form.firstName.value.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const lastName = form.lastName.value.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const testimonialId = `${firstName}-${lastName}`;

      // Send everything to unified support endpoint
      const supportData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        publicSupport,
        withQuote,
        materialOrder,
        stickerOrder: materialOrder ? stickerOrder : false,
        flyerOrder: materialOrder ? flyerOrder : false,
        stampOrder: materialOrder ? stampOrder : false,
        ...(needsAddress && {
          street: form.street?.value || '',
          zip: form.zip?.value || '',
          city: form.city?.value || '',
        }),
        ...(publicSupport && {
          function: form.function?.value || '',
        }),
        ...(needsQuoteFields && {
          quote: form.quote.value,
          imageUrl: imageUrl,
          imageFilename: imageFilename,
          testimonialId: testimonialId,
        }),
      };

      const supportRes = await fetch('/tanja/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supportData),
      });

      if (!supportRes.ok) {
        const errorData = await supportRes.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(errorData.error || 'Anfrage fehlgeschlagen');
      }

      setSubmitMessage('Danke! Deine Anfrage wurde erfasst.');
      setSubmitted(true);
    } catch (err: any) {
      setSubmitMessage('Leider konnte die Anfrage nicht gesendet werden. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="unterstuetzen" background="#ffffff">
      <Inner>
        <Reveal>
          <Title>Unterstützen</Title>
        </Reveal>
        <Reveal delaySec={0.06}>
          <Sub>Ob Sticker bestellen, für den Wahlkampf spenden oder mich öffentlich empfehlen: Jede Unterstützung zählt!</Sub>
        </Reveal>
        <Reveal delaySec={0.12}>
          <Block $hasHeader={false}>
            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <CheckboxGroup>
                  <Checkbox
                    checked={publicSupport}
                    onChange={(value) => handleCheckboxChange(setPublicSupport, value, "Tanja öffentlich unterstützen")}
                    label="Tanja öffentlich unterstützen"
                  />
                  {publicSupport && (
                    <SubCheckboxGroup>
                      <Checkbox
                        checked={withQuote}
                        onChange={(value) => handleCheckboxChange(setWithQuote, value, "Mit Zitat unterstützen")}
                        label="Mit Zitat unterstützen"
                      />
                    </SubCheckboxGroup>
                  )}
                  <Checkbox
                    checked={materialOrder}
                    onChange={(value) => handleCheckboxChange(setMaterialOrder, value, "Material bestellen")}
                    label="Material bestellen"
                  />
                  {materialOrder && (
                    <SubCheckboxGroup>
                      <Checkbox
                        checked={stickerOrder}
                        onChange={(value) => handleCheckboxChange(setStickerOrder, value, "Sticker bestellen")}
                        label="Sticker bestellen"
                      />
                      <Checkbox
                        checked={flyerOrder}
                        onChange={(value) => handleCheckboxChange(setFlyerOrder, value, "Flyer bestellen")}
                        label="Flyer bestellen"
                      />
                    <Checkbox
                      checked={stampOrder}
                      onChange={(value) => handleCheckboxChange(setStampOrder, value, '"Zürich maag Tanja"-Briefmarken bestellen')}
                      label='"Zürich maag Tanja"-Briefmarken bestellen'
                    />
                    </SubCheckboxGroup>
                  )}
                </CheckboxGroup>

                {/* Base fields - shown if publicSupport or materialOrder is selected */}
                {(publicSupport || materialOrder) && (
                  <>
                    <FormRow>
                      <FormField
                        label="Vorname"
                        name="firstName"
                        required
                        onInvalid={onInvalidInput}
                        onInput={(e) => {
                          trackFormStart();
                          onInputInput(e);
                        }}
                      />
                      <FormField
                        label="Nachname"
                        name="lastName"
                        required
                        onInvalid={onInvalidInput}
                        onInput={(e) => {
                          trackFormStart();
                          onInputInput(e);
                        }}
                      />
                    </FormRow>
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      onInvalid={onInvalidInput}
                      onInput={(e) => {
                        trackFormStart();
                        onInputInput(e);
                      }}
                    />
                    {/* Function field only shown for publicSupport */}
                    {publicSupport && (
                      <FormField
                        label="Funktion / Titel"
                        name="function"
                        placeholder="Optional"
                        onInvalid={onInvalidInput}
                        onInput={(e) => {
                          trackFormStart();
                          onInputInput(e);
                        }}
                      />
                    )}
                  </>
                )}

                {/* Address fields - shown if material order selected */}
                {needsAddress && (
                  <>
                    <FormField
                      label="Strasse und Nr."
                      name="street"
                      required
                      onInvalid={onInvalidInput}
                      onInput={(e) => {
                        trackFormStart();
                        onInputInput(e);
                      }}
                    />
                    <FormRow>
                      <FormField
                        label="PLZ"
                        name="zip"
                        required
                        onInvalid={onInvalidInput}
                        onInput={(e) => {
                          trackFormStart();
                          onInputInput(e);
                        }}
                      />
                      <FormField
                        label="Ort"
                        name="city"
                        required
                        onInvalid={onInvalidInput}
                        onInput={(e) => {
                          trackFormStart();
                          onInputInput(e);
                        }}
                      />
                    </FormRow>
                  </>
                )}

                {/* Quote fields - shown if withQuote is selected */}
                {needsQuoteFields && (
                  <>
                    <FormField
                      label="Zitat"
                      name="quote"
                      as="textarea"
                      required
                      placeholder="Dein kurzer Satz"
                      maxLength={221}
                      textareaProps={{ $error: quoteLength > 220 }}
                      onInvalid={onInvalidTextarea}
                      onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                        trackFormStart();
                        onInputTextarea(e);
                        setQuoteLength(e.currentTarget.value.length);
                      }}
                      errorText={quoteLength > 220 ? `${quoteLength}/220 Zeichen (zu lang!)` : undefined}
                      helperText={quoteLength <= 220 ? `${quoteLength}/220 Zeichen` : undefined}
                    />
                    <FormField
                      label="Foto"
                      name="image"
                      type="file"
                      required
                      accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                      helperText="Max. 300MB. JPEG, PNG, WebP oder GIF."
                    />
                  </>
                )}

                {/* Spam protection */}
                <input name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} />
                <input type="hidden" name="ts" value={formTsRef.current} />

                {submitMessage && <P style={{ color: submitMessage.includes('nicht') ? colors.neonMagenta : '#333' }}>{submitMessage}</P>}
                {(publicSupport || materialOrder) && (
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Spinner />}
                    {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                  </SubmitButton>
                )}
              </Form>
            ) : (
              <P style={{ textAlign: 'center' }}>{submitMessage || 'Danke! Deine Anfrage wurde erfasst.'}</P>
            )}
          </Block>
        </Reveal>
        <Reveal delaySec={0.18}>
          <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: `0 ${S.x5}` }}>
            <DonateText>Oder unterstütze meinen Wahlkampf mit einer Spende:</DonateText>
          </div>
        </Reveal>
        <Reveal delaySec={0.24}>
          <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: `0 ${S.x5}` }}>
            <DonateButton onClick={handleOpenDonate}>
              Spenden
            </DonateButton>
          </div>
        </Reveal>
        <Reveal delaySec={0.24}>
          <NoBorderBlock>
            <P style={{ textAlign: 'center', marginBottom: S.x3 }}>
              Teile. Like. Wirke mit.
            </P>
            <P style={{ textAlign: 'center' }}>Auf meinen Social-Media-Kanälen teile ich regelmässig Einblicke, Aktionen und Hintergründe.</P>
            <P style={{ textAlign: 'center', marginBottom: S.x2 }}>
              Selbstverständlich kannst du mich auch gern per E-Mail kontaktieren:<br />
              info(at)tanja-maag.ch / tanja.maag(at)al-zh.ch
            </P>
            <div style={{ display: 'flex', gap: S.x4, flexWrap: 'wrap' as const, justifyContent: 'center', alignItems: 'center' }}>
              <IconButton href="https://www.instagram.com/maag.tanja/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={() => track('social_click', { network: 'instagram' })}>
                <Icon src="/tanja/instagram.svg" alt="" aria-hidden />
              </IconButton>
              <IconButton href="https://www.facebook.com/p/Tanja-Maag-100076159994131/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={() => track('social_click', { network: 'facebook' })}>
                <Icon src="/tanja/facebook.svg" alt="" aria-hidden />
              </IconButton>
              <IconButton href="https://bsky.app/profile/tnjmaag.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" onClick={() => track('social_click', { network: 'bluesky' })}>
                <Icon src="/tanja/bluesky.svg" alt="" aria-hidden />
              </IconButton>
              <IconButton href="https://x.com/maagtanja_al" target="_blank" rel="noopener noreferrer" aria-label="X" onClick={() => track('social_click', { network: 'x' })}>
                <Icon src="/tanja/x.svg" alt="" aria-hidden />
              </IconButton>
            </div>
          </NoBorderBlock>
        </Reveal>
      </Inner>

      {/* Donate overlay */}
      <DonateOverlay $open={openDonate} onClick={handleCloseDonate}>
        <DonateModal $open={openDonate} onClick={(e) => e.stopPropagation()}>
          <DonateModalHeader>
            <DonateModalTitle>Spenden</DonateModalTitle>
            <DonateModalClose onClick={handleCloseDonate} aria-label="Schließen">
              ×
            </DonateModalClose>
          </DonateModalHeader>
          <DonateModalBody>
            <P>Unterstütze meinen Wahlkampf für eine gerechte, ökologische und solidarische Stadt – jede Spende hilft!</P>
            <P style={{ textAlign: 'left', marginTop: S.x2 }}>
              <strong>Twint</strong><br />
              <QrImg src="/tanja/qr.png" alt="TWINT QR-Code für Spende" />
            </P>
            <P style={{ marginTop: S.x3 }}>
              <strong>Banküberweisung</strong><br />
              Kontonummer: 16-686688-9<br />
              IBAN: CH07 0900 0000 1668 6688 9
              <br /><br />
              Alternative Liste<br />
              Molkenstrasse 21<br />
              8004 Zürich
            </P>
          </DonateModalBody>
        </DonateModal>
      </DonateOverlay>
    </Section>
  );
}
