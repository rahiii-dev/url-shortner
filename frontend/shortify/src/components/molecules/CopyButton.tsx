import Button from "@components/atoms/Button";
import clsx from "clsx";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      variant={"icon"}
      className={clsx("cursor-pointer", copied && "text-green-400")}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  );
};

export default CopyButton;
