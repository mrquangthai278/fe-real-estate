export const getAppSetting: any = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      uuid: "uwqe-21321-3213213-21321",
      setting: {
        theme: {
          default: {
            "--color-primary": "#ffd859",
          },
          dark: {
            "--color-primary": "blue",
          },
        },
        model: {
          form: {
            fields: [
              {
                name: "title",
                label: "Tiêu đề",
                type: "INPUTTEXT",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "creator_date",
                label: "Ngày bắt đầu",
                type: "DATEPICKER",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "publish_date",
                label: "Ngày kết thúc",
                type: "DATEPICKER",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "price",
                label: "Khoảng giá",
                type: "INPUTTEXT",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "description",
                label: "Mô tả",
                type: "INPUTDESCRIPTION",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "types",
                label: "Loại",
                fields: [
                  {
                    name: "price",
                    label: "Giá",
                    type: "INPUTNUMBER",
                    config: {},
                    rules: [
                      {
                        key: "required",
                      },
                    ],
                  },
                  {
                    name: "color",
                    label: "Màu sắc",
                    type: "COLORPICKER",
                    config: {},
                    rules: [],
                  },
                  {
                    name: "specification",
                    label: "Cấu hình",
                    fields: [
                      {
                        name: "cpu",
                        type: "INPUTTEXT",
                        config: {},
                        rules: [
                          {
                            key: "required",
                          },
                        ],
                      },
                      {
                        name: "gpu",
                        type: "INPUTTEXT",
                        config: {},
                        rules: [
                          {
                            key: "required",
                          },
                        ],
                      },
                    ],
                    config: {},
                    rules: [],
                    isArray: true,
                  },
                  {
                    name: "gallery",
                    label: "Hình ảnh",
                    type: "UPLOADER",
                    config: {},
                    rules: [
                      {
                        key: "required",
                      },
                    ],
                    isArray: true,
                  },
                ],
                config: {},
                rules: [],
              },
            ],
            setting: {},
          },
          card: {},
        },
      },
    });
  }, 10);
});
