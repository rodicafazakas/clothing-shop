import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

const COMPONENT = "form-input";

type FormInputProps = {
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  className,
  label,
  name,
  onChange,
  type,
  value,
}) => {
  return (
    <div className={`${COMPONENT}`}>
      <input
        className={`${COMPONENT}__field`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />

      {label && (
        <label
          className={`
              ${COMPONENT}__label
              ${value.length > 0 ? "move" : null} 
              ${className}
            `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
