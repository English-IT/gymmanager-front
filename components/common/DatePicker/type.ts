import { DatePickerProps } from "antd";
import { Control } from "react-hook-form";

export interface DatePickerComponentProps extends DatePickerProps {
  label: string;
  name: string;
  control: Control<any>;
  rules?: any;
  error?: any;
  placeholder?: string;
}
