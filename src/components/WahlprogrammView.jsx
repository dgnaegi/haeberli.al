import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import wahlprogrammItems from '../data/wahlprogramm.json'
import candidateData from '../data/candidate.json'
import {
  LeftSection,
  RightSection,
  BackButton,
  PageTitle as BasePageTitle,
  SectionHeading,
  IntroText,
  ContentText,
  NavigationLink,
  NavigationContainer
} from './shared/commonStyles'

const TitleButton = styled.button`
  background: ${props => props.isActive ? 'black' : 'white'};
  color: ${props => props.isActive ? '#ff1975' : 'black'};
  border: 3px solid black;
  padding: 1.5rem 2rem;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: clamp(1px, 0.2vw, 2px);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${props => props.isActive ? '0 4px 16px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.08)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
  }
`

const IllustrationContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
  position: relative;
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease 0.1s,
              margin-top 0.3s ease;
  opacity: ${props => props.isExpanded ? '1' : '0'};
  margin-top: ${props => props.isExpanded ? '0.5rem' : '0'};
  
  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const IllustrationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Illustration = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
`

// PageTitle with mobile display: none override for WahlprogrammView
const WahlprogrammPageTitle = styled(BasePageTitle)`
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileSelect = styled.select`
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: clamp(1px, 0.2vw, 2px);
  border: 3px solid black;
  background: white;
  color: black;
  cursor: pointer;
  margin-bottom: 1.5rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='black' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.5rem center;
  padding-right: 4rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 25, 117, 0.3);
  }

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2.5vw, 1.3rem);
    margin-bottom: 0.8rem;
  }

  & option {
    font-size: clamp(0.9rem, 2.5vw, 1.3rem);
    padding: 0.5rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileIllustration = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: ${props => props.isVisible ? 'block' : 'none'};
`

function WahlprogrammView() {
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState(wahlprogrammItems[0].id)
  const activeItem = wahlprogrammItems.find(item => item.id === activeId)
  const fullName = `${candidateData.vorname} ${candidateData.nachname}`
  const kandidatText = candidateData.gender === 'm' ? 'Kandidat' : 'Kandidatin'

  return (
    <>
      <LeftSection>
        {wahlprogrammItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <div key={item.id}>
              <TitleButton
                isActive={isActive}
                onClick={() => setActiveId(item.id)}
              >
                {item.title}
              </TitleButton>
              <IllustrationContainer isExpanded={isActive}>
                <IllustrationWrapper>
                  <Illustration
                    src={item.image}
                    alt={`Illustration zum Thema ${item.title} im Wahlprogramm für den Gemeinderat ${candidateData.wahlkreis}`}
                    isVisible={isActive}
                  />
                </IllustrationWrapper>
              </IllustrationContainer>
            </div>
          )
        })}
      </LeftSection>
      <RightSection>
        <nav aria-label="Navigation">
          <BackButton onClick={() => navigate('/')}>← Zurück zur Startseite</BackButton>
        </nav>
        <main>
          <article>
            <WahlprogrammPageTitle>Wahlprogramm der Alternative Liste</WahlprogrammPageTitle>
            <IntroText>
              Selektiere einzelne Themen aus unserem Wahlprogramm für die Gemeinderatswahl 2026.
            </IntroText>
        <MobileSelect 
          value={activeId} 
          onChange={(e) => setActiveId(e.target.value)}
        >
          {wahlprogrammItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </MobileSelect>
        <MobileIllustration>
          {wahlprogrammItems.map((item) => (
            <MobileImage
              key={item.id}
              src={item.image}
              alt={`Illustration zum Thema ${item.title} im Wahlprogramm für den Gemeinderat ${candidateData.wahlkreis}`}
              isVisible={activeId === item.id}
            />
          ))}
        </MobileIllustration>
        {activeItem && (
          <>
            <SectionHeading>{activeItem.title}</SectionHeading>
            <ContentText>
              <div dangerouslySetInnerHTML={{ __html: activeItem.text }} />
            </ContentText>
          </>
        )}
            <NavigationContainer aria-label="Interne Links">
              <p>
                <NavigationLink href="/uber-mich">
                  → Über mich
                </NavigationLink>
                <NavigationLink href="/">
                  → Zur Startseite
                </NavigationLink>
              </p>
            </NavigationContainer>
          </article>
        </main>
      </RightSection>
    </>
  )
}

export default WahlprogrammView

