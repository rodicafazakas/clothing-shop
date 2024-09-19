/* There are 3 types of buttons: default, inverted and google-sign-in */

import './button.styles.scss';

const Button = ({className, buttonType, children, ...rest}) => {
  return (
	  <button 
      className={`
        button 
        button--${buttonType} 
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
};

export default Button;