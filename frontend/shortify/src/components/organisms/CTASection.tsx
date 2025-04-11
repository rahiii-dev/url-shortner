import Text from "@components/atoms/Text";
import Button from "@components/atoms/Button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="space-y-4">
      <Text size="lg" className="text-white">
        Paste your long, messy links and let us make them beautiful and trackable.
      </Text>
      <div className="flex justify-center gap-4">
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
