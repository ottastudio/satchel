export const validate = (element, formData = []) => {
    let error = [true, ''];

    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Should be a valid email' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.confirm) {
        const valid = element.value.trim() === formData[element.validation.confirm].value;
        const message = `${!valid ? `Not match` : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'Required' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    return error;
}

export const update = (element, formData, formName) => {
    const newFormData = {
        ...formData
    }

    const newElement = {
        ...newFormData[element.id]
    }

    newElement.value = element.event.target.value;

    if (element.blur) {
        let validData = validate(newElement, formData);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    newFormData[element.id] = newElement;

    return newFormData;
}

export const generateData = (formData, formName) => {
    let dataToSubmit = {};

    for (let key in formData) {
        if (key !== 'confirmPassword') {
            dataToSubmit[key] = formData[key].value;
        }
    }

    return dataToSubmit;
}

export const isFormValid = (formData, formName) => {
    let formIsValid = true;
    for (let key in formData) {
        formIsValid = formData[key].valid && formIsValid;
    }

    return formIsValid;
}

export const populateOptionFields= (formdata, arrayData =[],field) => {
    const newArray = [];
    const newFormdata = {...formdata};

    arrayData.forEach(item=>{
        newArray.push({key:item._id,value:item.name});
    });

    newFormdata[field].config.options = newArray;
    return newFormdata;
}