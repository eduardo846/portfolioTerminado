import React from "react";
import * as S from "./Contact.styles";

const Contact = () => {
  return (
    <S.ContainerContact>
      <S.Title>Contact with me</S.Title>
      <S.ContainerForm>
        <S.Form>
          <S.InputForm placeholder="Your name" type="text" name="name" />
          <S.InputForm placeholder="Your email" type="email" name="email" />
          <S.TextArea placeholder="Write your message" name="message" />
          <S.Button type="submit">Send</S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.ContainerContact>
  );
};

export default Contact;
