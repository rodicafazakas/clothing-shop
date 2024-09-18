import "./form-input.styles.scss";

const COMPONENT = "form-input";

const FormInput = ({
  className,
  id,
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
          id={id} 
          name={name}
          value={value}
          onChange={onChange} 
          required 
        />

        { label && (
          <label 
            className={`
              ${COMPONENT}__label
              ${value.length > 0 ? "move" : null} 
            `}
            htmlFor={id}
          >
            {label}
          </label>
        )}
    </div>
  )
};

export default FormInput;