import FormField from "@components/molecules/FormField";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import FormFooter from "@components/molecules/FormFooter";
import { Link, useNavigate } from "react-router-dom";
import { useActionState, useEffect } from "react";
import { useAuthContext } from "@context/AuthContext";
import loginAction from "./loginAction";

const initialState = {
    success: false,
    user: null,
    errors: {},
    values: {
        email: '',
        password: '',
    },
};

const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(loginAction, initialState)

    const { login } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.success && state.user) {
            login(state.user);
            navigate("/", { replace: true });
        }
    }, [state.success, state.user]);

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
