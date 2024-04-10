// batdongsan.com => Parent App
// hifriendz.batdongsan.com => Sub App (is child of Parent App)

export const getAppSetting: any = (domain?: any) => new Promise((resolve) => {
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
                name: "gender",
                label: "Giới tính",
                type: "SELECT",
                config: {},
                rules: [
                  {
                    key: "required",
                  },
                ],
              },
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
        },
        layout: {
        }
      },
    });
  }, 10);
});

// keyListing is a unique key to get options 
export const getListOptions: any = (keyListing?: string) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      {
        key: 'gender', // isKeyListing
        data: [
          {
            value: '1234-1234-1234-1234', // using lodash kebabCase
            label: 'Male'
          }, {
            value: '12321-432432-423423-423',
            label: 'Female'
          }
        ]
      });
  }, 10);
});
