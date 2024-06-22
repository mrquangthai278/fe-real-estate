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
              "--gradient": "linear-gradient(to top left,#72C6EF,#004E8F)",
              "--background": "212 52% 5.52%",
              "--foreground": "212 8% 98.45%",
              "--muted": "212 40% 20.7%",
              "--muted-foreground": "212 8% 56.9%",
              "--popover": "212 49% 8.969999999999999%",
              "--popover-foreground": "212 8% 98.45%",
              "--card": "212 49% 8.969999999999999%",
              "--card-foreground": "212 8% 98.45%",
              "--border": "212 40% 20.7%",
              "--input": "212 40% 20.7%",
              "--primary": "212 80% 69%",
              "--primary-foreground": "212 8% 6.8999999999999995%",
              "--secondary": "212 40% 20.7%",
              "--secondary-foreground": "212 8% 98.45%",
              "--accent": "212 40% 20.7%",
              "--accent-foreground": "212 8% 98.45%",
              "--destructive": "0 62.8% 30.6%",
              "--destructive-foreground": "212 8% 98.45%",
              "--ring": "212 80% 69%",
            },
            defaultDark: {
              "--gradient": "linear-gradient(to top left,#2b5876,#4e4376)",
              "--background": "217 30.549999999999997% 2.56%",
              "--foreground": "217 4.699999999999999% 96.6%",
              "--muted": "217 23.5% 9.6%",
              "--muted-foreground": "217 4.699999999999999% 53.2%",
              "--popover": "217 55.6% 4.16%",
              "--popover-foreground": "217 4.699999999999999% 96.6%",
              "--card": "217 55.6% 4.16%",
              "--card-foreground": "217 4.699999999999999% 96.6%",
              "--border": "217 23.5% 9.6%",
              "--input": "217 23.5% 9.6%",
              "--primary": "217 47% 32%",
              "--primary-foreground": "217 4.699999999999999% 96.6%",
              "--secondary": "217 23.5% 9.6%",
              "--secondary-foreground": "217 4.699999999999999% 96.6%",
              "--accent": "217 23.5% 9.6%",
              "--accent-foreground": "217 4.699999999999999% 96.6%",
              "--destructive": "0 62.8% 30.6%",
              "--destructive-foreground": "217 4.699999999999999% 96.6%",
              "--ring": "217 47% 32%",
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
              path: "/",
              section: [{ key: "edutics1" }],
            },
            "custom-1": {
              path: "/custom/path",
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
