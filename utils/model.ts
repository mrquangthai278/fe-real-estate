import * as yup from "yup";
import type { OutputTypeKeys, FormInputTypeKeys } from "@@/interfaces/model";

import { listMapModelFieldTypeToOutput } from "@@/constants/model";

export const getOutputTypeByType = (type: FormInputTypeKeys) => {
  return listMapModelFieldTypeToOutput[type];
};

export const getValidationSchemaFromSetting = (formFields: any) => {
  const resultSchemaValidation: any = {};

  formFields.forEach((fieldItem: any) => {
    const fieldItemRules = fieldItem?.rules ?? [];
    const fieldItemType: OutputTypeKeys = getOutputTypeByType(fieldItem.type);

    if (fieldItemRules.length && fieldItemType) {
      let fieldItemYupInstance: any = yup[fieldItemType]();

      fieldItemRules.forEach((ruleItem: any) => {
        if (fieldItemYupInstance?.[ruleItem.key]) {
          fieldItemYupInstance = fieldItemYupInstance[ruleItem.key]();
        }
      });

      resultSchemaValidation[fieldItem.name] = fieldItem?.isArray
        ? yup.array().of(fieldItemYupInstance)
        : fieldItemYupInstance;
    }

    if (fieldItem?.fields?.length) {
      resultSchemaValidation[fieldItem.name] = fieldItem?.isArray
        ? yup.array().of(getValidationSchemaFromSetting(fieldItem?.fields))
        : getValidationSchemaFromSetting(fieldItem?.fields);
    }
  });

  return yup.object(resultSchemaValidation);
};
