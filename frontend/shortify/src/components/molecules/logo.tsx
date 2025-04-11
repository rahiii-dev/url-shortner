import Text from "@components/atoms/Text";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Text variant="gradient" size="4xl" className="font-bold cursor-pointer leading-tight" onClick={() => navigate("/")}>
      Shortify
    </Text>
  );
};

export default Logo;
