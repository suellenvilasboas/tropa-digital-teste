import React from "react";
import Rectangle3 from "../../Assets/Rectangle 3.png";
import Laptop from "../../Assets/laptop-image.png";
import Mainlogo from "../../Assets/logo.png";
import HidePassaword from "../../Assets/hidden.png";

import {
  Container,
  H1,
  WhiteIContainerImage,
  SkyImage,
  LaptopImage,
  Logo,
  InputEmail,
  InputPassword,
  ContainerItens,
  HiddenPassword,
  Button,
} from "./styles";

const Login = () => {
  const welcome = "Bem Vindo ao painel";

  return (
    <Container>
      <WhiteIContainerImage alt="white-rectangle">
        <SkyImage alt="sky-rectangle" src={Rectangle3}/>
        <LaptopImage alt="laptop" src={Laptop} />
        <Logo alt="brand-logo" src={Mainlogo} />
        <ContainerItens>
          <H1>{welcome}</H1>

          <InputEmail placeholder="Digite seu email" />
          <InputPassword placeholder="Digite sua senha" />
          <HiddenPassword alt= "closed-eye" src = {HidePassaword}/>

          <Button>Acessar</Button>
        </ContainerItens>
      </WhiteIContainerImage>
    </Container>
  );
};

export default Login;
