import { Layout } from "antd";
import { ReactNode } from "react";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import { LayoutWrapper, StyledContent } from "./style";
import { DatePicker } from "components";
import { useForm } from "react-hook-form";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { control } = useForm();
  return (
    <LayoutWrapper>
      <Sidebar />
      <Layout style={{ backgroundColor: "#f0f2f5" }}>
        <Navbar />
        <StyledContent>{children}</StyledContent>
      </Layout>
      <DatePicker control={control} name="date" label="choose smth" />
    </LayoutWrapper>
  );
};

export default MainLayout;
