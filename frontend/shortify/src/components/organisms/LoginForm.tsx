import FormField from "@components/molecules/FormField";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import FormFooter from "@components/molecules/FormFooter";
import { Link } from "react-router-dom";
import { useActionState } from "react";
import { validateEmail } from "@lib/validators";

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

    if(Object.keys(errors).length > 0){
        return {
            errors,
            values: {email, password}
        }
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: Handle actual login logic here

    return { success: true };
};

const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(loginAction, {success: false})

    return (
        <form action={formAction} className="space-y-6">
            <Text as="h2" size="2xl" variant="gradient" className="text-center font-bold">Login to Shortify</Text>

            <FormField label="Email" name="email" type="email" placeholder="Enter your email" defaultValue={state.values?.email} error={state.errors?.email} />
            <FormField label="Password" name="password" type="password" placeholder="Enter your password" defaultValue={state.values?.password} error={state.errors?.password} />

            <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>Login</Button>

            <FormFooter>
                Don’t have an account?{" "}
                <Link to="/register" className="text-accent underline hover:text-primary transition">
                    Register
                </Link>
            </FormFooter>
        </form>
    );
};

export default LoginForm;
