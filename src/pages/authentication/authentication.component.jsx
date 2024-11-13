import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import "./authentication.styles.scss";

const COMPONENT = "authentication";

const Authentication = () => {


  return (
    <div className={`${COMPONENT}`}>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;