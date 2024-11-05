import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const COMPONENT ="sign-in-form";

const initialFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [ formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  }  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("incorrect password for email");
          break;
        default:
          console.log(error);
      } 
    }     
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className={`${COMPONENT}`}>
      <h2>I already have an account</h2>

      <span className={`${COMPONENT}__message`}>
        Sign in with your email and password
      </span>

      <form 
        className={`${COMPONENT}__inputs`}
        onSubmit={handleSubmit}
      >
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
        
        <section className={`${COMPONENT}__buttons-section`}>
          <Button 
            className={`${COMPONENT}__submit`}
            type="submit"
          >
            SIGN IN
          </Button>

          <Button 
            onClick={logGoogleUser}
            buttonType="google-sign-in"
            type="button"
          >
            Google Sign In
          </Button>
        </section>
        

      </form>
    </div>
  )
};

export default SignInForm;