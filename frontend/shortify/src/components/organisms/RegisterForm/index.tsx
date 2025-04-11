import FormField from "@components/molecules/FormField";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import FormFooter from "@components/molecules/FormFooter";
import { Link, useNavigate } from "react-router-dom";
import { useActionState, useEffect } from "react";
import registerAction from "./registerAction";


const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerAction, { success: false });

  const navigate = useNavigate();

  useEffect(() => {
      if (state.success) {
          navigate("/login", {replace: true}); 
      }
  }, [state.success, navigate]);

  return (
    <form action={formAction} className="space-y-6">
      <Text as="h2" size="2xl" variant="gradient" className="text-center font-bold">
        Create Your Account
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
        <FormField label="First Name" name="firstName" placeholder="John" defaultValue={state.values?.firstName} error={state.errors?.firstName} />
        <FormField label="Last Name" name="lastName" placeholder="Doe" defaultValue={state.values?.firstName} error={state.errors?.lastName} />
      </div>

      <FormField label="Email" name="email" type="email" placeholder="Enter your email" defaultValue={state.values?.email} error={state.errors?.email} />
      <FormField label="Password" name="password" type="password" placeholder="Create a password" defaultValue={state.values?.password} error={state.errors?.password} />
      <FormField label="Confirm Password" name="confirmPassword" type="password" placeholder="Re-enter password" defaultValue={state.values?.confirmPassword} error={state.errors?.confirmPassword} />

      <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </Button>

      <FormFooter>
        Already have an account?{' '}
        <Link to="/login" className="text-accent underline hover:text-primary transition">
          Login
        </Link>
      </FormFooter>
    </form>
  );
};

export default RegisterForm;