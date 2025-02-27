import { ChangeEvent, FormEvent, useState } from "react";
import { AuthError } from "firebase/auth";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import { Button, ButtonTypes } from "../button/button.component";

import "./sign-up-form.styles.scss";
import { signUpStart } from "../../store/user/user.action";

const COMPONENT = "sign-up-form";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Wrong password");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      console.log("error message", (error as AuthError).message);
      console.log("error code", (error as AuthError).code);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={`${COMPONENT}`}>
      <h2>I do not have an account</h2>

      <span className={`${COMPONENT}__message`}>
        Sign up with your email and password
      </span>

      <form className={`${COMPONENT}__inputs`} onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          name="displayName"
          onChange={handleChange}
          type="text"
          value={displayName}
        />

        <FormInput
          label="Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={email}
        />

        <FormInput
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={password}
        />

        <FormInput
          label="Confirm password"
          name="confirmPassword"
          onChange={handleChange}
          type="password"
          value={confirmPassword}
        />

        <Button
          className={`${COMPONENT}__submit`}
          buttonType={ButtonTypes.base}
          text="sign up"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
