/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

type SelectOption = {
  label: string;
  value: string;
};

export interface SelectComponentProps {
  name: string;
  label?: string;
  customStyles?: React.CSSProperties;
  control?: Control<any>;
  error?: any;
  placeholder?: string;
  options: SelectOption[];
  allowClear?: boolean;
  onChange?: (value: any) => void;
}
