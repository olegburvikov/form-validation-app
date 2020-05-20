export const VALIDATION_TYPES = {
    isNotEmty: 'isNotEmty',
    length: 'length',
}

export const inputValidation = (value, validationsRules) => {

    if (validationsRules === undefined) {
        return {
            isValidBoolean: true,
                errorMessage: null
        }
    } 
    const validationsResult = Object.keys(validationsRules).map(rule => {
        switch (rule) {            
            case VALIDATION_TYPES.isNotEmty:
                if((value || '').trim().length === 0) {
                    return {
                        isValidBoolean: false,
                        errorMessage: {
                            name: 'This field in required'
                        }
                    }
                }
                break;
            case VALIDATION_TYPES.length:
                value = parseInt(value, 10);
                if(isNaN(value) || (value < validationsRules[rule].min || value > validationsRules[rule].max)) {
                    return {
                        isValidBoolean: false,
                        errorMessage: {
                            name: `Please enter number from ${validationsRules[rule].min} to ${validationsRules[rule].max}`
                        }
                    }
                }
                break;
            default:
                return {isValidBoolean: true, errorMessage: null}
        }
        return {isValidBoolean: true, errorMessage: null}
    });


    const errors = validationsResult.filter(item => item.isValidBoolean === false);    

    return errors.length === 0 ? {isValidBoolean: true, errorMessage: null} : errors[0];

}

