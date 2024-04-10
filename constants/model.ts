import type { ModelItem } from "@@/interfaces/model";

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

export const listMapModelFieldTypeToOutput = {
  [FormInputType.INPUTTEXT]: OutputType.string,
  [FormInputType.INPUTDESCRIPTION]: OutputType.string,
  [FormInputType.INPUTNUMBER]: OutputType.string,
  [FormInputType.RADIO]: OutputType.string,
  [FormInputType.CHECKBOX]: OutputType.string,
  [FormInputType.SELECT]: OutputType.string,
  [FormInputType.SWITCH]: OutputType.string,
  [FormInputType.SLIDER]: OutputType.string,
  [FormInputType.TIMEPICKER]: OutputType.string,
  [FormInputType.DATEPICKER]: OutputType.string,
  [FormInputType.UPLOADFILE]: OutputType.string,
  [FormInputType.RATE]: OutputType.string,
  [FormInputType.COLORPICKER]: OutputType.string,
} as const;

export const listMapModelFieldTypeDefaultValue = {
  [FormInputType.INPUTTEXT]: "",
  [FormInputType.INPUTDESCRIPTION]: "",
  [FormInputType.INPUTNUMBER]: "",
  [FormInputType.RADIO]: "",
  [FormInputType.CHECKBOX]: "",
  [FormInputType.SELECT]: "",
  [FormInputType.SWITCH]: "",
  [FormInputType.SLIDER]: "",
  [FormInputType.TIMEPICKER]: "",
  [FormInputType.DATEPICKER]: "",
  [FormInputType.UPLOADFILE]: "",
  [FormInputType.RATE]: "",
  [FormInputType.COLORPICKER]: "",
} as const;

export const initialModelItem: ModelItem = Object.freeze({
  name: "",
  type: FormInputType.INPUTTEXT,
  config: {},
  rules: [],
});

export const optionsModelFieldType = Object.keys(FormInputType);
