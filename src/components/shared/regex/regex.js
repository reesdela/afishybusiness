import { registerErrors } from '../error/errorStrings'

export const validateEmail = (input) => {
    if(!/\w+@[a-z]+\.[a-z]+/.test(input.value)) {
        return registerErrors.register.email.invalidEmail
    }
    return ''
}

export const validatePassword = (input) => {
    if(/[\w\d]{8,}/.test(input.value)) {
        if (/\W/.test(input.value)) {
            if (/[A-Z]/.test(input.value)) {
                return ''
            }
            return registerErrors.register.password.noUpperCase
        }
        return registerErrors.register.password.noSpecialChar
    }
    return registerErrors.register.password.tooShort
}