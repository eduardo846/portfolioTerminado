import React, { useState } from "react";

import * as S from "./Contact.styles";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name:"",
    email:"",
    message:"",
  });
  console.log(contactDates)
  return (
    <S.ContainerContact>
      <S.Title>Contact with me</S.Title>
      <S.ContainerForm>
        <S.Form>
          <S.InputForm placeholder="Your name" type="text" name="name" onChange={(e)=>setContactDates({ ...contactDates, name: e.target.value})}
          value={contactDates.name}/>
          <S.InputForm placeholder="Your email" type="email" name="email" onChange={(e)=>setContactDates({ ...contactDates, email: e.target.value})}
          value={contactDates.email}/>
          <S.TextArea placeholder="Write your message" name="message" onChange={(e)=>setContactDates({ ...contactDates, message: e.target.value})}
          value={contactDates.message}/>
          <S.ContainerConditions>
            <input type="checkbox"/>
            <span>Accept the terms and conditions</span>
          </S.ContainerConditions>
          <S.Button type="submit">Send</S.Button>
        </S.Form>
      </S.ContainerForm>
    </S.ContainerContact>
  );
};

export default Contact;
