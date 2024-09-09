import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Layout } from "antd";

export const LoginLayoutWrapper = styled(Layout)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  height: 65vh;
  width: 55vw;
  display: flex;
  box-shadow: 0 0 15px 0.5px;
  border-radius: 10px;

  @media screen and (max-width: 1240px) {
    flex-direction: column;
  }

  @media screen and (max-width: 850px) {
    width: 75vw;
  }
`;

export const gradientAnimation = keyframes` 
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const ImageWrapper = styled.div`
  flex: 50%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 1.2rem;

  span {
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #42a5f5, #00c6ff);
    background-size: 800% 800%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: ${gradientAnimation} 4s ease infinite;
  }
`;

export const ContentFormWrapper = styled.form`
  flex: 50%;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  h1 {
    padding-bottom: 2rem;
    font-size: 2rem;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(45deg, #6767ed 45%, #4daef2 75%);
    font-family: "Aguafina Script", Arial, Helvetica, sans-serif;
  }
`;

export const ForgetPasswordLink = styled.span`
  text-decoration: none;
  font-weight: bold;
  font-size: 10px;
  margin: 15px 0;
  transition: 0.3s;
  &:hover {
    color: #7873f5;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 28px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #42a5f5, #00c6ff);
  background-size: 800% 800%;
  color: white;
  animation: ${gradientAnimation} 4s ease infinite;
  margin-top: 24px;
`;
