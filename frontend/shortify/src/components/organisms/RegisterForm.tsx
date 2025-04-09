import FormField from "@components/molecules/FormField";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import FormFooter from "@components/molecules/FormFooter";
import { Link } from "react-router-dom";
import { useActionState } from "react";
import { validateEmail, validatePassword } from "@lib/validators";

const registerAction = async (prevState: any, formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  prevState.errors = undefined;
  const errors: Record<string, string> = {};

  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";

  const emailError = validateEmail(email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(password);
  if (passwordError) errors.password = passwordError;

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(errors).length > 0) {
    return { 
        errors,
        values: { firstName, lastName, email, password, confirmPassword } 
    };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // TODO: handle actual registration logic

  return { success: true };
};

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerAction, { success: false });

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