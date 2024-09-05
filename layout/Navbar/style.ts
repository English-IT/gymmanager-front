import styled from "@emotion/styled";
import { Layout } from "antd";
import { colours } from "../../constants";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
    background-color: ${colours.skyBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;