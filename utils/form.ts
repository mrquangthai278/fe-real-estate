import * as yup from "yup";
import { getOutputTypeByType } from "@@/utils/model";
import type { OutputTypeKeys } from "@@/interfaces/common";

export const getValidationSchemaFromSetting = (formFields: any) => {
  return yup.object({});

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

      resultSchemaValidation[fieldItem.name] = fieldItemYupInstance;
    }

    if (fieldItem?.fields?.length) {
      resultSchemaValidation[fieldItem.name] = getValidationSchemaFromSetting(
        fieldItem?.fields
      );
    }
  });

  return yup.object(resultSchemaValidation);
};
