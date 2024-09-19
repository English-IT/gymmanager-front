import { Layout } from "antd";
import { ReactNode } from "react";
import { Sidebar, Navbar } from "components";
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
