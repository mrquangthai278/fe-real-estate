export const EnumToArray = (enumme: any) => {
    const StringIsNumber = (value: any) => isNaN(Number(value)) === false;

    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]);
}

export const EnumToObject = (enumme: any) => {
    const StringIsNumber = (value: any) => isNaN(Number(value)) === false;

    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]).reduce((a, v) => ({ ...a, [v]: v }), {});
}