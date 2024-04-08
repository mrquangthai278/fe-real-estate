import type { ModelItem } from "@@/interfaces/model";
import { FormInputType, OutputType } from "@@/interfaces/common";

export const optionsModelFieldType = Object.keys(FormInputType);

export const listMapModelFieldTypeToOutput = {
  INPUTTEXT: OutputType.string,
  INPUTDESCRIPTION: OutputType.string,
  INPUTNUMBER: OutputType.string,
  RADIO: OutputType.string,
  CHECKBOX: OutputType.string,
  SELECT: OutputType.string,
  SWITCH: OutputType.string,
  SLIDER: OutputType.string,
  TIMEPICKER: OutputType.string,
  DATEPICKER: OutputType.string,
  UPLOADFILE: OutputType.string,
  RATE: OutputType.string,
  COLORPICKER: OutputType.string,
};

export const initialModelItem: ModelItem = Object.freeze({
  name: "",
  type: FormInputType.INPUTTEXT,
  config: {},
  rules: [],
});
