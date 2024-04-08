// Imporant. When having some changes, need to modify in constants\model.ts too.
export const FormInputType = {
  INPUTTEXT: "INPUTTEXT",
  INPUTDESCRIPTION: "INPUTDESCRIPTION",
  INPUTNUMBER: "INPUTNUMBER",
  RADIO: "RADIO",
  CHECKBOX: "CHECKBOX",
  SELECT: "SELECT",
  SWITCH: "SWITCH",
  SLIDER: "SLIDER",
  TIMEPICKER: "TIMEPICKER",
  DATEPICKER: "DATEPICKER",
  UPLOADFILE: "UPLOADFILE",
  RATE: "RATE",
  COLORPICKER: "COLORPICKER",
} as const;

export const OutputType = {
  string: "string",
} as const;

export type FormInputTypeKeys =
  (typeof FormInputType)[keyof typeof FormInputType];

export type OutputTypeKeys = (typeof OutputType)[keyof typeof OutputType];
