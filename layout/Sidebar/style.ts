import styled from "@emotion/styled";
import { Layout } from "antd";
import { colours } from "../../constants";

const { Sider } = Layout;

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const StyledSider = styled(Sider)`
  height: 100vh;
  transition: width 0.3s ease, left 0.3s ease;

  @media screen and (max-width: 768px) {
    position: fixed !important;
    z-index: 1000;
    left: 0;
    top: 0;
    overflow: auto;
  }
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
