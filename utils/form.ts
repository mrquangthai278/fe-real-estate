import * as yup from "yup";
import { getOutputTypeByType } from "@@/utils/model";
import type { OutputTypeKeys } from "@@/interfaces/common";

export const getValidationSchemaFromSetting = (formSetting: any) => {
  const formFields = formSetting?.fields ?? [];

  const resultSchemaValidation: any = {};

  formFields.forEach((fieldItem: any) => {
    if (!fieldItem.isArray) {
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
    }
  });

  return yup.object(resultSchemaValidation);
};
