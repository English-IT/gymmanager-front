import { InputProps } from "antd";
import { Control } from "react-hook-form";

export interface InputComponentProps extends InputProps {
  label: string;
  name: string;
  control: Control<any>;
  rules?: any;
  error?: any;
  placeholder?: string;
}
