import { ReactNode } from "react";
import { CaptionStyle } from "./styles";

type CaptionsProps = {
  children: ReactNode;
};
export const Caption = ({ children }: CaptionsProps) => {
  return <CaptionStyle className="caption">{children}</CaptionStyle>;
};
