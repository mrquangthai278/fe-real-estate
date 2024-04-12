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
  date: "date",
  number: "number",
  array: "array",
  boolean: "boolean",
  object: "object",
  mixed: "mixed"
} as const;

export const listMapModelFieldTypeToOutput = {
  [FormInputType.INPUTTEXT]: OutputType.string,
  [FormInputType.INPUTDESCRIPTION]: OutputType.string,
  [FormInputType.INPUTNUMBER]: OutputType.string,
  [FormInputType.RADIOGROUP]: OutputType.string,
  [FormInputType.CHECKBOXGROUP]: OutputType.array,
  [FormInputType.SELECT]: OutputType.mixed,
  [FormInputType.SWITCH]: OutputType.boolean,
  [FormInputType.SLIDER]: OutputType.number,
  [FormInputType.TIMEPICKER]: OutputType.date,
  [FormInputType.DATEPICKER]: OutputType.date,
  [FormInputType.UPLOADER]: OutputType.array,
  [FormInputType.RATE]: OutputType.number,
  [FormInputType.COLORPICKER]: OutputType.string,
} as const;

export const listMapModelFieldTypeDefaultValue = {
  [FormInputType.INPUTTEXT]: "",
  [FormInputType.INPUTDESCRIPTION]: "",
  [FormInputType.INPUTNUMBER]: 0,
  [FormInputType.RADIOGROUP]: null,
  [FormInputType.CHECKBOXGROUP]: [],
  [FormInputType.SELECT]: null,
  [FormInputType.SWITCH]: false,
  [FormInputType.SLIDER]: 0,
  [FormInputType.TIMEPICKER]: null,
  [FormInputType.DATEPICKER]: null,
  [FormInputType.UPLOADER]: [],
  [FormInputType.RATE]: 0,
  [FormInputType.COLORPICKER]: "",
} as const;

export const initialModelItem: ModelItem = Object.freeze({
  name: "",
  type: FormInputType.INPUTTEXT,
  config: {},
  rules: [],
});

export const optionsModelFieldType = Object.keys(FormInputType);
