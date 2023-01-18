import React from "react";
import * as S from "./AboutMe.styles";

const AboutMe = () => {
  return (
  <S.ContainerAboutMe>
    <S.ContainerFlex>
    <S.ContainerText>
        <S.Title>
            <p>Hello, i'm</p>
            <p>Héctor Ramírez</p>
            <p>Full Stack</p>
        </S.Title>
    </S.ContainerText>
    </S.ContainerFlex>
    </S.ContainerAboutMe>);
};

export default AboutMe;
