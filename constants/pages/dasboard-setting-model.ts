import { optionsModelFieldType } from '@@/constants/model'

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
