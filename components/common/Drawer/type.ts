import { DrawerProps } from "antd";

export interface DrawerComponentProps extends DrawerProps {
  title: string;
  open: boolean;
  setOpen(value: boolean): void;
}
