export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "You have to write something";
};

export const maxLengthThunk = (maxLength) => (value) => {
    if (value && value.length < maxLength) {
        return undefined;
    }
    return `Max Length is ${maxLength} `
}
