import { FC, ButtonHTMLAttributes } from "react";

import "./button.styles.scss";

export enum ButtonTypes {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType: ButtonTypes;
  text: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  className,
  buttonType,
  text,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`
        btn 
        btn--${buttonType} 
        ${className}
      `}
      {...rest}
    >
      {text}
    </button>
  );
};
