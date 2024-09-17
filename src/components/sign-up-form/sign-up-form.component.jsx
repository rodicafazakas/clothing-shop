import { useState } from "react";

import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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
      <h1>Sign in with your email and password</h1>

      <form 
        className={`${COMPONENT}__fields`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Display name</label>
        <input 
          type="text" 
          id="name" 
          name="displayName"
          value={displayName}
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={email}
          required
          onChange={handleChange} 
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password" 
          value={password}
          required 
          onChange={handleChange} 
        />
        
        <label htmlFor="confirm-password">Confirm password</label>
        <input 
          type="password" 
          id="confirm-password" 
          name="confirmPassword"
          value={confirmPassword}
          required 
          onChange={handleChange} 
        />
        
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  )
};

export default SignUpForm;