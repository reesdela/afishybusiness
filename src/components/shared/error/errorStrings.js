export const accountErrors = {
    "register": {
        "email": {
            "invalidEmail": "You must enter a valid email.",
            "emailTaken": "An account with that email has already been created."
        },
        "password": {
            "tooShort": "Your password must be at least 8 characters.",
            "noSpecialChar": "Your password must contain a special character. ex: !?@",
            "noUpperCase": "Your password must contain 1 upper case letter"
        },
        "confirmPassword": {
            "noMatch": "Your passwords do not match."
        }
    },
    "login": {
        "invalidCredetials": "Email or Password is invalid."
    },
    "general": "Something has gone wrong on our end. For more information please contact Customer Service."
}