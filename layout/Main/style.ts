import styled from "@emotion/styled";
import { Layout } from "antd";

const { Content } = Layout;


export const LayoutWrapper = styled(Layout)``;

export const StyledContent = styled(Content)`
  margin: 24px;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 280px;
`;