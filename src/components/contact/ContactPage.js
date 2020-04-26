import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("We need to know your first name.")
    .min(2, "Minimum two characters"),
  lastName: yup.string().required("We need to know your last name.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("We need your email."),
  textMessage: yup.string().required("Please write your question...")
    .min(10, "Minimum ten characters.")
    .max(100, "Max 100 characters."),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    // only runs if validation passes
    console.log("data", data);
  }

  return (
    <>
      <main>
        <form className="col-sm-4" onSubmit={handleSubmit(onSubmit)}>

          <input className="col" name="firstName" placeholder="First name" ref={register()} />
          {errors.firstName && <p className="contactError">{errors.firstName.message}</p>}

          <input className="col" name="lastName" placeholder="Last name" ref={register()} />
          {errors.lastName && <p className="contactError">{errors.lastName.message}</p>}

          <input className="col" name="email" placeholder="Email" ref={register()} />
          {errors.email && <p className="contactError">{errors.email.message}</p>}

          <input className="messageArea col" name="textMsessage" placeholder="Message" ref={register()} />
          {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}

          <input className="col" className="submitInput" type="submit" />
        </form>


      </main>
    </>
  );
}

export default Contact;
