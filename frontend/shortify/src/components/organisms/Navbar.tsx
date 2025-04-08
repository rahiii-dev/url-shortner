import Button from "@components/atoms/Button";
import Logo from "@components/molecules/logo";

const Navbar = () => {
  const isAuthenticated  = false; 

  return (
    <nav className="container w-full py-3 flex items-center justify-between">
      <Logo />

      <div className="flex gap-3 items-center">
        {isAuthenticated ? (
          <Button variant="outline">Hi, John Doe</Button>
        ) : (
          <>
            <Button variant="outline">Login</Button>
            <Button variant="primary">Register</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
