import React from "react";
import * as S from "./AboutMe.styles";
import logoGitHub from "../svg/github.svg";
import logoLinkedIn from "../svg/linkedin.svg";
import logoUdemy from "../svg/udemy.svg";
import logoYoutube from "../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Gihub",
      link: "https://github.com/eduardo846",
      logo: logoGitHub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/h%C3%A9ctor-eduardo-ram%C3%ADrez-29b740a0/",
      logo: logoLinkedIn,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Hello, i'm</p>
            <p>Héctor Ramírez</p>
            <p>Full Stack</p>
          </S.Title>
          <S.DescriptionText>
            Jr developer with experience in React and Node.js. I'm looking to
            join a team of Development focused on the creation of high quality
            web applications. Have skills in JavaScript, HTML, CSS and Git.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/Perfil.png" alt="imagen perfil" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
