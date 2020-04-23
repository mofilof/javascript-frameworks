import React from "react";
import { useForm } from "react-hook-form"; // get the useForm function
import * as yup from "yup"; // for everything

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
    <form onSubmit={handleSubmit(onSubmit)}>
    <li>
      <input name="firstName" placeholder="First name" ref={register()} />
        {errors.firstName && <p className="contactError">{errors.firstName.message}</p>}
    </li>
    <li>
    <input name="lastName" placeholder="Last name" ref={register()} />
        {errors.lastName && <p className="contactError">{errors.lastName.message}</p>}
    </li>
    <li>
      <input name="email" placeholder="Email" ref={register()} />
        {errors.email && <p className="contactError">{errors.email.message}</p>}
    </li>
    <li>
      <input className="messageArea" name="textMsessage" placeholder="Message" ref={register()} />
        {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}

    </li>
    <li>
      <input className="submitInput" type="submit" />
    </li>
      
    </form>
  );
}

export default Contact;
