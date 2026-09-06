import React from "react";

export const REQUIRED_MSG = "Du hast da was vergessen";
export const INVALID_EMAIL_MSG = "Das scheint mir keine gültige E-Mail zu sein";

export const onInvalidInput: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
  const t = e.currentTarget;
  if (t.validity.valueMissing) {
    t.setCustomValidity(REQUIRED_MSG);
  } else if ('type' in t && t.type === 'email' && t.validity.typeMismatch) {
    t.setCustomValidity(INVALID_EMAIL_MSG);
  } else {
    t.setCustomValidity("");
  }
};

export const onInputInput: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
  e.currentTarget.setCustomValidity("");
};

export const onInvalidTextarea: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
  const t = e.currentTarget;
  if (t.validity.valueMissing) t.setCustomValidity(REQUIRED_MSG); else t.setCustomValidity("");
};

export const onInputTextarea: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
  e.currentTarget.setCustomValidity("");
};
