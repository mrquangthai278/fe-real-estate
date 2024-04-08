import type { FormInputTypeKeys } from "./common";

export type ModelItem = {
  name: string;
  type: FormInputTypeKeys;
  config: any;
  rules: any;
};
