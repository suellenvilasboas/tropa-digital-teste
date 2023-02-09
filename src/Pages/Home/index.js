import React from "react";
import Logo from "../../Assets/logo.png";
import ButtonLevel from "../../Assets/columns.png";
import ArrowUp from "../../Assets/arrow-up.png";
import NoteView from "../../Assets/note.png";
import Landscape from "../../Assets/landscape.png";
import CalendarNote from "../../Assets/calendar.png";

import {
  Container,
  Sidebar,
  LogoImg,
  H1,
  MainButton,
  Button,
  Main,
  LandscapeImg,
  H2,
  P1,
  Block,
  BlackBlock,
} from "./styles";

const Login = () => {
  const main = "Olá Usuário";

  return (
    <Container>
      <Sidebar>
        <LogoImg alt="main-logo" src={Logo} />
        <MainButton>
          Início <img alt="level=up=bars" src={ButtonLevel} />
        </MainButton>
        <Button>
          Contatos <img alt="note" src={NoteView} />
        </Button>
        <Button>
          Relatórios <img alt="arrow-up" src={ArrowUp} />
        </Button>
        <Button>
          Contatos <img alt="note" src={NoteView} />
        </Button>
        <Button>
          Contatos <img alt="note" src={NoteView} />
        </Button>
        <Button>
          Contatos <img alt="note" src={NoteView} />
        </Button>
      </Sidebar>
      <H1>{main}</H1>
      <Main>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
        <Block>
          <LandscapeImg alt="beach-view" src={Landscape} />
          <H2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </H2>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </P1>
          <BlackBlock>
          <img alt="level=up=bars" src={CalendarNote}/>
            2min atrás
          </BlackBlock>
        </Block>
      </Main>
    </Container>
  );
};

export default Login;
