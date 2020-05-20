export const getAllFieldsValue = (data) => {
    const allFieldsValue = Object.keys(data).map((item) => {
        return {[item]: data[item].value}
    })
    return allFieldsValue;
}

export const updateFieldData = (data, field, toUpdate) => {
    return {
        data: {
            ...data,
            [field]: {
                ...data[field],
                ...toUpdate
                }
            }
        }
}