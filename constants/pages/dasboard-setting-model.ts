import { optionsModelFieldType } from '@@/constants/model'
import { FormInputType } from "@@/constants/model";

export const defaultFormControls: any =
    [
        {
            name: 'model',
            label: 'Đối tượng',
            fields: [
                {
                    name: 'desc',
                    label: 'Mô tả ngắn',
                    type: 'INPUTDESCRIPTION',
                },
                {
                    name: "column",
                    label: "Trường",
                    config: {},
                    fields: [
                        {
                            name: 'name',
                            label: "Tên",
                            type: "INPUTTEXT",
                            config: {},
                            rules: [
                                {
                                    key: "required",
                                },
                            ],
                        },
                        {
                            name: 'type',
                            label: "Loại",
                            type: "SELECT",
                            config: {
                                options: optionsModelFieldType
                            },
                            rules: [
                                {
                                    key: "required",
                                },
                            ],
                        },
                        {
                            name: 'api_key',
                            label: "Lấy từ API",
                            type: "SELECT",
                            config: {
                                options: []
                            },
                            rules: [
                            ],
                            active: (formInstance: any) => {
                                return true
                            }
                        },
                        {
                            name: 'isArray',
                            label: "Có nhiều?",
                            type: "SWITCH",
                            config: {
                            },
                            rules: [
                            ],
                        },
                    ],
                    isArray: true
                }
            ]
        },
    ]
