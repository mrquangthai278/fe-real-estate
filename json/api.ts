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
                label: 'Tiêu đề',
                type: "INPUTTEXT",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "price",
                label: 'Khoảng giá',
                type: "INPUTTEXT",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
              {
                name: "types",
                label: 'Loại',
                fields: [
                  {
                    name: "price",
                    label: 'Giá',
                    type: "INPUTTEXT",
                    config: {},
                    rules: [
                      {
                        key: "required",
                      },
                    ],
                  },
                  {
                    name: "color",
                    label: 'Màu sắc',
                    type: "INPUTTEXT",
                    config: {},
                    rules: [
                      {
                        key: "required",
                      },
                    ],
                  },
                  {
                    name: "specification",
                    label: 'Cấu hình',
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
                    label: 'Hình ảnh',
                    type: "INPUTTEXT",
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
