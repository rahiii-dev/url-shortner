import Label from "@components/atoms/Label";
import Input from "@components/atoms/Input";
import ErrorMessage from "@components/atoms/ErrorMessage";

interface Props {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
}

const FormField = ({ label, name, type = "text", placeholder, error, defaultValue }: Props) => (
  <div className="mb-4">
    <Label className="ps-4 mb-1.5">{label}</Label>
    <Input defaultValue={defaultValue} name={name} type={type} placeholder={placeholder} />
    <div className="ps-4">
        <ErrorMessage message={error} />
    </div>
  </div>
);

export default FormField;
