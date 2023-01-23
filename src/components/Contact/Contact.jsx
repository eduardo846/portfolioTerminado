import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkTerms: false,
  });
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false);

  const form = useRef();
  //console.log(import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID)

  const onSubmit = (e) => {
    //eviar recargo de pagina
    e.preventDefault();
    // validar formulario
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === "" ||
      contactDates.checkTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccessSendForm(true);
          },
          (error) => {
            console.log("ERROR");
          }
        );
    }

    //enviar formulario
  };

  return (
    <S.ContainerContact>
      <S.Title>Contact with me</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <p>The form was sent succesfully</p>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Your name"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Your email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Write your message"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactDates({
                    ...contactDates,
                    checkTerms: e.target.checked,
                  })
                }
              />
              <span>Accept the terms and conditions</span>
            </S.ContainerConditions>
            <S.Button type="submit">Send</S.Button>
          </S.Form>
        )}
      </S.ContainerForm>
      {emptyInputs && (
        <p>You should fill all the inputs and accept the terms</p>
      )}
    </S.ContainerContact>
  );
};

export default Contact;
