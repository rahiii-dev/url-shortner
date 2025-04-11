import { validateEmail, validatePassword } from "@lib/validators";
import { authService } from "@services/authService";
import { parseError } from "@lib/utils";

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

    try {
        await authService.register({ firstName, lastName, email, password });
        return { success: true };
    } catch (err) {
        return { 
            errors: { confirmPassword: parseError(err, "Registration failed."), email: "", password: "", firstName: "", lastName: "" }, 
            values: { firstName, lastName, email, password, confirmPassword } 
          };
    }
};

export default registerAction