import { Control } from "react-hook-form";

export interface InputComponentProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control;
  rules?: Record<string, any>;
  error?: any;
}
