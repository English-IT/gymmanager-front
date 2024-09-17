import { Control } from "react-hook-form";

export interface TimePickerComponentProps {
  name: string;
  control: Control<any>;
  rules?: any;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
}
