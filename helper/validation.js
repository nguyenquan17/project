export const validationInvalid = (string) => {
    return string.length === 0
}

export const validationIsNumber = (string) => {
    return !isNaN(string);
}