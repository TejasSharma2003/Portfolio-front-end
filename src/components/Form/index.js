import React, { useState } from "react";
import "./index.scss";
import "./toastify.scss";

import Panarama from "../Panarama";

import { BsArrowRight } from "react-icons/bs";

import axios from "axios";
import { toast } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    toast("Sending your mail Please wait...");
    try {
      const res = await axios({
        method: "post",
        url: "https://itsmetejas.vercel.app/sendmail",
        data: formData,
      });
      toast.success(res.data.message);
    } catch (err) {
      if (err.code !== "ERR_NETWORK") {
        const message = err.response.data.message || err.response.data;
        toast.error(message);
      } else {
        toast.error("Server is Down...");
      }
    }
  };

  return (
    <form
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={onSubmitHandler}
    >
      <div className="form__container">
        <Panarama classes="panarama-form">Your Name</Panarama>
        <input
          required
          autoComplete="off"
          className="form__input form__input-name"
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={onChangeHandler}
        />
        <Panarama classes="panarama-form">Email Address</Panarama>
        <input
          autoComplete="off"
          required
          className="form__input form__input-email"
          type="email"
          placeholder="Enter your address"
          name="email"
          onChange={onChangeHandler}
        />
        <Panarama classes="panarama-form">Your Message</Panarama>
        <textarea
          required
          rows="3"
          className="form__input form__input-message"
          // placeholder="Hey, I want to create web application/website for my Company XY. How soon can you hop to have the discussion"
          placeholder="Enter your message"
          name="message"
          onChange={onChangeHandler}
        ></textarea>
      </div>

      <button className="form__btn btn" type="submit" value="Send">
        Shoot
        <span className="form__btn-arrow">
          <BsArrowRight />
        </span>
      </button>
    </form>
  );
}

export default Form;
