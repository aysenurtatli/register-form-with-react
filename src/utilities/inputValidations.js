export const nameValidation = {
    name: 'name',
    label: 'first name',
    type: 'text',
    id: 'name',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: 'max 30 characters',
        },
    },
}

export const lastNameValidation = {
    name: 'last name',
    label: 'last name',
    type: 'text',
    id: 'lastName',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: 'max 30 characters',
        },
    },
}

export const usernameValidation = {
    name: 'username',
    label: 'username',
    type: 'text',
    id: 'username',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
}

export const passwordValidation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        minLength: {
            value: 10,
            message: '10 character min'
        }
    }
}

export const emailValidation = {
    name: 'email',
    label: 'email',
    type: 'email',
    id: 'email',
    validation: {
        required: {
            value: true,
            message: 'required'
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'required',
        },
    },
}

export const countryValidation = {
    name: 'country',
    label: 'country',
    id: 'country',
    multiline: true,
    validation: {
        required: {
            value: true,
            message: 'required'
        }
    }
}