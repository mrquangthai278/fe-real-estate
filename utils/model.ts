import type { FormInputTypeKeys } from "@@/interfaces/common";
import { listMapModelFieldTypeToOutput } from "@@/constants/model";

export const getOutputTypeByType = (type: FormInputTypeKeys) => {
  return listMapModelFieldTypeToOutput[type];
};
