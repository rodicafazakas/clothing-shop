import { useState } from "react";

import {
  signInUserWithEmailAndPassword, 
  createUserDocumentFromAuth, 
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

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

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) { 
      console.log(error);
    } 
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user); 
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
          >
            Google Sign In
          </Button>
        </section>
        

      </form>
    </div>
  )
};

export default SignInForm;