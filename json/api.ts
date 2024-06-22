// batdongsan.com => Parent App
// hifriendz.batdongsan.com => Sub App (is child of Parent App)

export const getAppSetting: any = (domain?: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uuid: "uwqe-21321-3213213-21321",
        setting: {
          theme: {
            default: {
              "--background": [0, "0%", "100%"],
              "--foreground": [224, "71.4%", "4.1%"],

              "--muted": [220, "14.3%", "95.9%"],
              "--muted-foreground": [220, "8.9%", "46.1%"],

              "--popover": [0, "0%", "100%"],
              "--popover-foreground": [224, "71.4%", "4.1%"],

              "--card": [0, "0%", "100%"],
              "--card-foreground": [224, "71.4%", "4.1%"],

              "--border": [220, "13%", "91%"],
              "--input": [220, "13%", "91%"],

              "--primary": [220.9, "39.3%", "11%"],
              "--primary-foreground": [210, "20%", "98%"],

              "--secondary": [220, "14.3%", "95.9%"],
              "--secondary-foreground": [220.9, "39.3%", "11%"],

              "--accent": [220, "14.3%", "95.9%"],
              "--accent-foreground": [220.9, "39.3%", "11%"],

              "--destructive": [0, "84.2%", "60.2%"],
              "--destructive-foreground": [210, "20%", "98%"],

              "--ring": [224, "71.4%", "4.1%"],

              "--radius": "0.5rem",
            },
            defaultDark: {
              "--background": [224, "71.4%", "4.1%"],
              "--foreground": [210, "20%", "98%"],

              "--muted": [215, "27.9%", "16.9%"],
              "--muted-foreground": [217.9, "10.6%", "64.9%"],

              "--popover": [224, "71.4%", "4.1%"],
              "--popover-foreground": [210, "20%", "98%"],

              "--card": [224, "71.4%", "4.1%"],
              "--card-foreground": [210, "20%", "98%"],

              "--border": [215, "27.9%", "16.9%"],
              "--input": [215, "27.9%", "16.9%"],

              "--primary": [210, "20%", "98%"],
              "--primary-foreground": [220.9, "39.3%", "11%"],

              "--secondary": [215, "27.9%", "16.9%"],
              "--secondary-foreground": [210, "20%", "98%"],

              "--accent": [215, "27.9%", "16.9%"],
              "--accent-foreground": [210, "20%", "98%"],

              "--destructive": [0, "62.8%", "30.6%"],
              "--destructive-foreground": [210, "20%", "98%"],

              "--ring": [216, "12.2%", "83.9%"],
            },
            green: {
              "--background": [0, "0%", "100%"],
              "--foreground": [222.2, "84%", "4.9%"],

              "--muted": [210, "40%", "96.1%"],
              "--muted-foreground": [215.4, "16.3%", "46.9%"],

              "--popover": [0, "0%", "100%"],
              "--popover-foreground": [222.2, "84%", "4.9%"],

              "--card": [0, "0%", "100%"],
              "--card-foreground": [222.2, "84%", "4.9%"],

              "--border": [214.3, "31.8%", "91.4%"],
              "--input": [214.3, "31.8%", "91.4%"],

              "--primary": [120, "100%", "25%"],
              "--primary-foreground": [210, "40%", "98%"],

              "--secondary": [210, "40%", "96.1%"],
              "--secondary-foreground": [222.2, "47.4%", "11.2%"],

              "--accent": [210, "40%", "96.1%"],
              "--accent-foreground": [222.2, "47.4%", "11.2%"],

              "--destructive": [0, "84.2%", "60.2%"],
              "--destructive-foreground": [210, "40%", "98%"],

              "--ring": [222.2, "84%", "4.9%"],

              "--radius": "0.5rem",
            },
            greenDark: {
              "--background": [222.2, "84%", "4.9%"],
              "--foreground": [210, "40%", "98%"],

              "--muted": [217.2, "32.6%", "17.5%"],
              "--muted-foreground": [215, "20.2%", "65.1%"],

              "--popover": [222.2, "84%", "4.9%"],
              "--popover-foreground": [210, "40%", "98%"],

              "--card": [222.2, "84%", "4.9%"],
              "--card-foreground": [210, "40%", "98%"],

              "--border": [217.2, "32.6%", "17.5%"],
              "--input": [217.2, "32.6%", "17.5%"],

              "--primary": [120, "100%", "25%"],
              "--primary-foreground": [222.2, "47.4%", "11.2%"],

              "--secondary": [217.2, "32.6%", "17.5%"],
              "--secondary-foreground": [210, "40%", "98%"],

              "--accent": [217.2, "32.6%", "17.5%"],
              "--accent-foreground": [210, "40%", "98%"],

              "--destructive": [0, "62.8%", "30.6%"],
              "--destructive-foreground": [210, "40%", "98%"],

              "--ring": [212.7, "26.8%", "83.9%"],
            },
          },
          model: {
            form: {
              fields: [
                {
                  name: "gender",
                  label: "Giới tính",
                  type: "SELECT",
                  config: {
                    api_key: "gender",
                  },
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
            header: { key: "no1" },
            footer: { key: "no1" },
            index: {
              section: [{ key: "edutics1" }],
            },
          },
        },
      });
    }, 10);
  });

// keyListing is a unique key to get options
export const getListOptions: any = (keyListing?: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        key: "gender", // isKeyListing
        data: [
          {
            value: "1234-1234-1234-1234", // using lodash kebabCase
            label: "Male",
          },
          {
            value: "12321-432432-423423-423",
            label: "Female",
          },
        ],
      });
    }, 10);
  });
