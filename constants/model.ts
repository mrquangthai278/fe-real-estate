import type { ModelItem } from "@@/interfaces/model";

export const FormInputType = {
  INPUTTEXT: "INPUTTEXT",
  INPUTDESCRIPTION: "INPUTDESCRIPTION",
  INPUTNUMBER: "INPUTNUMBER",
  RADIOGROUP: "RADIOGROUP",
  CHECKBOXGROUP: "CHECKBOXGROUP",
  SELECT: "SELECT",
  SWITCH: "SWITCH",
  SLIDER: "SLIDER",
  TIMEPICKER: "TIMEPICKER",
  DATEPICKER: "DATEPICKER",
  UPLOADER: "UPLOADER",
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
  [FormInputType.RADIOGROUP]: OutputType.string,
  [FormInputType.CHECKBOXGROUP]: OutputType.string,
  [FormInputType.SELECT]: OutputType.string,
  [FormInputType.SWITCH]: OutputType.string,
  [FormInputType.SLIDER]: OutputType.string,
  [FormInputType.TIMEPICKER]: OutputType.string,
  [FormInputType.DATEPICKER]: OutputType.string,
  [FormInputType.UPLOADER]: OutputType.string,
  [FormInputType.RATE]: OutputType.string,
  [FormInputType.COLORPICKER]: OutputType.string,
} as const;

export const listMapModelFieldTypeDefaultValue = {
  [FormInputType.INPUTTEXT]: "",
  [FormInputType.INPUTDESCRIPTION]: "",
  [FormInputType.INPUTNUMBER]: "",
  [FormInputType.RADIOGROUP]: "",
  [FormInputType.CHECKBOXGROUP]: "",
  [FormInputType.SELECT]: "",
  [FormInputType.SWITCH]: "",
  [FormInputType.SLIDER]: "",
  [FormInputType.TIMEPICKER]: "",
  [FormInputType.DATEPICKER]: "",
  [FormInputType.UPLOADER]: "",
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
