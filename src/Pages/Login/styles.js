import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #ff6c24;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const WhiteIContainerImage = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 100%;
  height: 512px;
  max-width: 860px;
  flex-direction: row-reverse;
  position: relative;
`;

export const SkyImage = styled.img`
  border-radius: 0px 4px 4px 0px;
`;

export const LaptopImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 50px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 60px;
  object-fit: cover;
  margin: 70px 120px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 57px;
  bottom: 90px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 186.5%;
  text-align: center;
  color: rgba(0, 0, 0, 0.44);
  margin-bottom: 20px;
  margin-right: 115px;
`;

export const InputEmail = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 313px;
  height: 44px;
  padding-left: 12px;
  margin-bottom: 13px;
  outline: none;
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 161.5%;
  color: rgba(0, 0, 0, 0.35);
`;

export const InputPassword = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 313px;
  height: 44px;
  padding-left: 12px;
  margin-bottom: 13px;
  outline: none;
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 161.5%;
  color: rgba(0, 0, 0, 0.35);
`;

export const HiddenPassword = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 280px;
  margin-top: 135px;
`;

export const Button = styled(Link)`
  background: #2eafb2;
  border-radius: 5px;
  width: 151px;
  height: 40px;
  border: none;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 186.5%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
