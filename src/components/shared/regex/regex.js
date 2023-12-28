import { accountErrors } from '../error/errorStrings'

export const validateEmail = (input) => {
    if(!/\w+@[a-z]+\.[a-z]+/.test(input.value)) {
        return accountErrors.register.email.invalidEmail
    }
    return ''
}

export const validatePassword = (input) => {
    if(/[\w\d]{8,}/.test(input.value)) {
        if (/\W/.test(input.value)) {
            if (/[A-Z]/.test(input.value)) {
                return ''
            }
            return accountErrors.register.password.noUpperCase
        }
        return accountErrors.register.password.noSpecialChar
    }
    return accountErrors.register.password.tooShort
}