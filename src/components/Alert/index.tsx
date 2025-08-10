import { AlertWrapper } from "./styles";
type AlertType = "success" | "error" | "warning";
interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
}
export const Alert: React.FC<AlertProps> = ({ type = "success", children }) => {
  return <AlertWrapper type={type}>{children}</AlertWrapper>;
};
