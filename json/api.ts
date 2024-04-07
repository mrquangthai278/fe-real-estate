export const getAppSetting: any = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            uuid: 'uwqe-21321-3213213-21321',
            setting: {
                theme: {
                    default: {
                        '--color-primary': '#ffd859'
                    },
                    dark: {
                        '--color-primary': 'blue'
                    }
                },
                model: {
                    form: {
                        fields: [
                            {
                                "key": "title",
                                "type": "INPUTTEXT",
                                "config": {},
                                "rules": []
                            },
                            // {
                            //     "key": "price",
                            //     "type": "INPUTNUMBER",
                            //     "config": {},
                            //     "rules": []
                            // },
                            // {
                            //     "key": "description",
                            //     "type": "INPUTDESCRIPTION",
                            //     "config": {},
                            //     "rules": []
                            // },
                            // {
                            //     "key": "images",
                            //     "type": "UPLOADFILE",
                            //     "config": {},
                            //     "rules": []
                            // }
                        ],
                        setting: {}
                    },
                    card: {}
                }
            }
        });
    }, 300);
});

