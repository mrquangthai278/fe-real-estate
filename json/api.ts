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
                type: "INPUTTEXT",
                config: {},
                rules: [
                  // {
                  //   key: "required",
                  // },
                ],
              },
              {
                name: "price",
                type: "INPUTNUMBER",
                config: {},
                rules: [],
              },
              {
                name: "description",
                type: "INPUTDESCRIPTION",
                config: {},
                rules: [],
              },
              {
                name: "images",
                type: "UPLOADFILE",
                config: {},
                rules: [],
              },
              {
                name: "types",
                fields: [
                  {
                    name: "title",
                    type: "INPUTTEXT",
                    config: {},
                    rules: [
                      // {
                      //   key: "required",
                      // },
                    ],
                  },
                  {
                    name: "orders",
                    fields: [
                      {
                        name: "price",
                        type: "INPUTTEXT",
                        config: {},
                        rules: [
                          // {
                          //   key: "required",
                          // },
                        ],
                      },
                    ],
                    config: {},
                    rules: [],
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
