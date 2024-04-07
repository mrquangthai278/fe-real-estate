import type { FormInputType } from "./common";

export type ModelItem = {
    key: string;
    type: FormInputType;
    config: any,
    rules: any
};