import { FormInputType, OutputType } from "@@/constants/model";

export type FormInputTypeKeys =
  (typeof FormInputType)[keyof typeof FormInputType];

export type OutputTypeKeys = (typeof OutputType)[keyof typeof OutputType];

export type ModelItem = {
  name: string;
  type: FormInputTypeKeys;
  config: any;
  rules: any;
};

export const validationRule = {
  [OutputType.string]: {
    require: "require",
    length: "length", // string.length(limit: number | Ref, message?: string | function): Schema
    min: "min", // string.min(limit: number | Ref, message?: string | function): Schema
    max: "max", // string.max(limit: number | Ref, message?: string | function): Schema
    matches: "matches", // string.matches(regex: Regex, options: { message: string, excludeEmptyString: bool }): Schema
    email: "email", // string.email(message?: string | function): Schema
    url: "url", // string.url(message?: string | function): Schema
    uuid: "uuid", // string.uuid(message?: string | function): Schema
    datetime: "datetime", // string.datetime(options?: {message?: string | function, allowOffset?: boolean, precision?: number})
    ensure: "ensure", // string.ensure(): Schema
    trim: "trim", // string.trim(message?: string | function): Schema
    lowercase: "lowercase", // string.lowercase(message?: string | function): Schema
    uppercase: "uppercase", // string.uppercase(message?: string | function): Schema
  },
} as const;
