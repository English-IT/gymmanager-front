import { MenuProps } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const managerItems: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <Link href="/manager">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/users">Members</Link>,
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: <Link href="/settings">Settings</Link>,
  },
];

export const adminItems: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <Link href="/admin">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/gyms">Gyms</Link>,
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: <Link href="/settings">Settings</Link>,
  },
];
