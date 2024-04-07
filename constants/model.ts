import type { ModelItem } from '@@/interfaces/model'
import { FormInputType } from '@@/interfaces/common'

import { EnumToArray, EnumToObject } from '@@/utils/typescript'

export const optionsModelFieldType = EnumToArray(FormInputType)

export const optionsModelFieldTypeObject = EnumToObject(FormInputType)

export const initialModelItem: ModelItem = Object.freeze({
    key: '',
    type: optionsModelFieldType[0],
    config: {},
    rules: []
})