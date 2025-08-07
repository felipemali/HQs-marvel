import { ReactNode } from "react";
import { ButtonStyle } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
export const Button = ({ children, type = "button", onClick }: ButtonProps) => {
  return <ButtonStyle type={type}>{children}</ButtonStyle>;
};
