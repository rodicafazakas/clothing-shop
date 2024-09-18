import { useState } from "react";

import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput  from '../form-input/form-input.component';

import "./sign-up-form.styles.scss";

const COMPONENT = "sign-up-form";

const initialFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword) {
      alert('Wrong password');
      return;
    }

    try{
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName }); 
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  }; 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  };

  return (
    <div className={`${COMPONENT}`}>
      <h1 className={`${COMPONENT}__message`}>
        Sign in with your email and password
      </h1>

      <form 
        className={`${COMPONENT}__inputs`}
        onSubmit={handleSubmit}
      >
        <FormInput
          id="name"
          label="Display name" 
          name="displayName" 
          onChange={handleChange} 
          type="text"
          value={displayName} 
        />

        <FormInput 
          id="email"
          label="Email" 
          name="email" 
          onChange={handleChange} 
          type="email"
          value={email} 
        />

        <FormInput 
          id="password"
          label="Password" 
          name="password" 
          onChange={handleChange} 
          type="password"
          value={password} 
        />

        <FormInput 
          id="confirm-password"
          label="Confirm password" 
          name="confirmPassword" 
          onChange={handleChange} 
          type="password"
          value={confirmPassword} 
        />
        
        <button 
          className={`${COMPONENT}__submit`} 
          type="submit"
        >
          SIGN UP
        </button>

      </form>
    </div>
  )
};

export default SignUpForm;