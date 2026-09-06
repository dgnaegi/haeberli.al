"use client";

import React from "react";
import styled from "styled-components";
import { S } from "@/src/styles/spacing";
import { FONT_BODY } from "@/src/styles/fonts";
import { colors } from "@/src/styles/colors";

const Label = styled.label`
  display: grid;
  gap: ${S.x2};
  font-family: ${FONT_BODY};
  color: #0A0A0A;
  font-size: 14px;
`;

const Input = styled.input`
  border: 1px solid rgba(0,0,0,0.18);
  background: #ffffff;
  color: #0A0A0A;
  border-radius: ${S.x2};
  padding: ${S.x3} ${S.x3};
  font-family: ${FONT_BODY};
  transition: border-color 160ms ease, box-shadow 160ms ease;
  &:focus-visible {
    outline: none;
    border-color: ${colors.neonMagenta};
    box-shadow: 0 0 0 2px rgba(255, 25, 117, 0.25);
  }
`;

const Textarea = styled.textarea<{ $error?: boolean }>`
  border: 1px solid ${props => props.$error ? colors.neonMagenta : 'rgba(0,0,0,0.18)'};
  background: #ffffff;
  color: #0A0A0A;
  border-radius: ${S.x2};
  padding: ${S.x3} ${S.x3};
  min-height: 100px;
  font-family: ${FONT_BODY};
  transition: border-color 160ms ease, box-shadow 160ms ease;
  &:focus-visible {
    outline: none;
    border-color: ${colors.neonMagenta};
    box-shadow: 0 0 0 2px rgba(255, 25, 117, 0.25);
  }
`;

const HelperText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: ${S.x1};
  margin-bottom: 0;
`;

const ErrorText = styled(HelperText)`
  color: ${colors.neonMagenta};
`;

type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "file";
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  onInvalid?: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onInput?: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  accept?: string;
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  as?: "input" | "textarea";
  textareaProps?: {
    $error?: boolean;
    maxLength?: number;
  };
  style?: React.CSSProperties;
};

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  helperText,
  errorText,
  onInvalid,
  onInput,
  accept,
  maxLength,
  value,
  onChange,
  as = "input",
  textareaProps,
  style,
}: FormFieldProps) {
  const commonProps = {
    name,
    required,
    placeholder,
    onInvalid: onInvalid as any,
    onInput: onInput as any,
    ...(maxLength && { maxLength }),
    ...(value !== undefined && onChange && {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    }),
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onInput) {
      onInput(e);
    }
  };

  return (
    <Label>
      {label}
      {as === "textarea" ? (
        <Textarea {...commonProps} {...textareaProps} onInput={handleInput} />
      ) : (
        <Input type={type} {...commonProps} accept={accept} style={style || (type === "file" ? { padding: `${S.x2} ${S.x3} ${S.x2} ${S.x3}` } : undefined)} onInput={handleInput} />
      )}
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {helperText && !errorText && <HelperText>{helperText}</HelperText>}
    </Label>
  );
}

export { Label, Input, Textarea };
