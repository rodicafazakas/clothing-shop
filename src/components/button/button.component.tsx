import { FC, ButtonHTMLAttributes } from "react";

import Spinner from "../spinner/spinner.component";

import "./button.styles.scss";

export enum ButtonTypes {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType: ButtonTypes;
  text: string;
  isLoading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  className,
  buttonType,
  text,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`  
        btn 
        btn--${buttonType} 
        ${className}
      `}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};
