import { Layout } from "antd";
import { ReactNode } from "react";
import Navbar from "layout/Navbar";
import Sidebar from "layout/Sidebar";
import { LayoutWrapper, StyledContent } from "./style";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Layout style={{ backgroundColor: "#f0f2f5" }}>
        <Navbar />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </LayoutWrapper>
  );
};

export default MainLayout;
