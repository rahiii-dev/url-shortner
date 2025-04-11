import { validateEmail } from "@lib/validators";
import { authService } from "@services/authService";
import { parseError } from "@lib/utils";

const loginAction = async (prevState: any, formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    prevState.errors = undefined;
    const errors: { email?: string; password?: string } = {};

    const emailError = validateEmail(email);

    if (emailError) {
        errors.email = emailError;
    }
    if (!password) {
        errors.password = "Password is required.";
    }

    if (Object.keys(errors).length > 0) {
        return {
            user: null,
            success: false,
            errors,
            values: { email, password }
        }
    }

    try {
        const user = await authService.login({ email, password });
        return {
            success: true,
            user,
            errors: {},
            values: { email: '', password: '' },
        };
    } catch (err) {
        return {
            user: null,
            success: false,
            errors: { email: parseError(err, "Login failed."), password: "" },
            values: { email, password: "" }
        };
    }
};

export default loginAction;