import styled from "@emotion/styled";
import { Layout } from "antd";
import { colours } from "../../constants";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #002140;
`;

export const Logo = styled.h1`
  color: ${colours.white};
  font-size: 18px;
  margin: 0;
`;