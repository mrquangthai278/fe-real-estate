import * as yup from "yup";
import type { OutputTypeKeys, FormInputTypeKeys } from "@@/interfaces/model";
import { FormInputType, OutputType } from "@@/constants/model";

import { listMapModelFieldTypeToOutput } from "@@/constants/model";

// Add methhods validate multiple type of field
yup.addMethod(yup.MixedSchema, "oneOfSchemas", function (schemas: any) {
  return this.test(
    "one-of-schemas",
    "Not all items in ${path} match one of the allowed schemas",
    (item) => {
      return schemas.some((schema: any) => schema.isValidSync(item, { strict: true }))
    }
  );
});

export const getOutputTypeByType = (type: FormInputTypeKeys) => {
  return listMapModelFieldTypeToOutput[type];
};

export const getValidationSchemaFromSetting = (formFields: any) => {
  const resultSchemaValidation: any = {};

  formFields.forEach((fieldItem: any) => {
    const fieldItemRules = fieldItem?.rules ?? [];
    const fieldItemType: OutputTypeKeys = getOutputTypeByType(fieldItem.type);

    if (fieldItemRules.length && fieldItemType) {
      // Example mixed
      // yup
      //   .mixed()
      //   .oneOfSchemas([
      //     yup.string(),
      //     yup.object().noUnknown().shape(SchemaObject2),
      //   ]);

      let fieldItemYupInstance: any = yup[fieldItemType]();

      const mixedYupInstance: any = [
        yup.string(),
        yup.object()
      ]

      fieldItemRules.forEach((ruleItem: any) => {
        // Mixed
        if (fieldItemType === OutputType.mixed) {
          mixedYupInstance.forEach((yupItemMixed: any, indexYupItemMixed: number) => {
            mixedYupInstance[indexYupItemMixed] = mixedYupInstance[indexYupItemMixed][ruleItem.key]()
          })
        }
        // Normal
        else {
          if (fieldItemYupInstance?.[ruleItem.key]) {
            fieldItemYupInstance = fieldItemYupInstance[ruleItem.key]();
          }
        }
      });

      // Mixed
      if (fieldItemType === OutputType.mixed) {
        fieldItemYupInstance = fieldItemYupInstance
          .oneOfSchemas(mixedYupInstance);
      }

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
