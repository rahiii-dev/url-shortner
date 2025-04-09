export function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return 'Email is required.';
    } else if (!emailRegex.test(email)) {
        return 'Invalid email address.';
    }
    return null;
}

export function validatePassword(password: string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!password) {
        return 'Password is required.';
    } else if (!passwordRegex.test(password)) {
        return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
    }
    return null;
}
