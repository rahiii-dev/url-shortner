import Button from "@components/atoms/Button";
import Logo from "@components/molecules/logo";
import { useAuthContext } from "@context/AuthContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthContext();

  const navigate = useNavigate();

  return (
    <nav className="container w-full py-3 flex items-center justify-between mx-auto">
      <Logo />

      <div className="flex gap-3 items-center">
        {isAuthenticated ? (
          <>
            <Button variant="outline">Hi, {user?.firstName + " " + user?.lastName}</Button>
            <Button onClick={() => logout()} variant="icon" className="cursor-pointer text-red-400"><LogOut/></Button>
          </>
        ) : (
          <>
            <Button variant="outline" className="cursor-pointer" onClick={() => navigate("/login")}>Login</Button>
            <Button variant="primary" className="cursor-pointer" onClick={() => navigate("/register")}>Register</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
