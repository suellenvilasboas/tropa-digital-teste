import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f3f3f3;
`;

export const Sidebar = styled.div`
  width: 260px;
  height: 1096px;
  background-color: #ffffff;
`;

export const LogoImg = styled.img`
  width: 190px;
  height: 56.88px;
  position: relative;
  margin: 50px 35px 50px;
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  background: #f3f3f3;
  border-radius: 10px 0px 0px 10px;
  border: none;
  outline: none;
  width: 226px;
  height: 50px;
  padding: 17px;
  margin-left: 34px;
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 186.5%;
  text-align: center;
  color: #000000;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;

  width: 211px;
  height: 50px;
  margin: 11px;
  background: #2eafb2;
  border-radius: 5px;
  border: none;
  outline: none;

  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 186.5%;
  padding-left: 13px;
  color: #ffffff;
  margin-left: 37px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  width: 1920px;
  height: 1080px;
`;

export const H1 = styled.h1`
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 186.5%;
  text-align: center;
  color: rgba(0, 0, 0, 0.44);
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  position: absolute;
  width: 115px;
  height: 47px;
  left: 307px;
  top: 40px;
`;

export const Block = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 6px;
  width: 500px;
  height: 228px;
`;

export const LandscapeImg = styled.img`
  width: 463.59px;
  height: 141px;
  margin: 20px 20px 0 20px;
  border-radius: 6px;
`;

export const H2 = styled.h2`
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 186.5%;
  color: #000000;
  margin-left: 20px;
`;

export const P1 = styled.p`
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 186.5%;
  color: #000000;
  margin-left: 20px;
`;

export const BlackBlock = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  border: none;
  outline: none;
  width: 101.94px;
  height: 27px;
  margin-left: 369px;
  margin-top: 275px;
  padding: 2px;
  font-family: "Advent Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 186.5%;
  color: #ffffff;

  align-items: center;
`;
