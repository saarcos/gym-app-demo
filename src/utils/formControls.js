export const loginFormControls = [
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
            },
        }
    },
    {
        id: 'password',
        name: 'password',
        label: 'Password',
        type: 'password',
        autocomplete: 'new-password',
        placeholder: '************',
        componentType: 'input',
        validation: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
            },
        }
    },
];
export const registerFormControls = [
    {
        id: 'username',
        name: 'username',
        label: 'Username',
        type: 'text',
        autocomplete: 'username',
        placeholder: 'Enter your username',
        componentType: 'input',
        validation: {
            required: "Username is required",
        }
    },
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
        autocomplete: 'email',
        placeholder: 'Enter your email',
        componentType: 'input',
        validation: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
            },
        }
    },
    {
        id: 'password',
        name: 'password',
        label: 'Password',
        type: 'password',
        autocomplete: 'new-password',
        placeholder: '************',
        componentType: 'input',
        validation: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
            },
        }
    }
]