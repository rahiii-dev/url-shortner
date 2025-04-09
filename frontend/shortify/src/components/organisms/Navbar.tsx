import Button from "@components/atoms/Button";
import Logo from "@components/molecules/logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated  = false; 
  const navigate = useNavigate();

  return (
    <nav className="container w-full py-3 flex items-center justify-between">
      <Logo />

      <div className="flex gap-3 items-center">
        {isAuthenticated ? (
          <Button variant="outline">Hi, John Doe</Button>
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
