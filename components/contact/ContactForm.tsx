"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  //   form validation
  const validate = (): boolean => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(null);

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.log(error);
      setSuccess("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-[0.5px] border-brandGreen max-w-sm w-full p-6 bg-white rounded-2xl">
      <section className="flex flex-col items-start w-full">
        <h4 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-2">
          Get In Touch
        </h4>
        <p className="text-xs md:text-sm 2xl:text-lg font-thin mb-4">
          Send a message and we&apos;ll reply in less than 4 hours
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 w-full"
        >
          <StyledDiv>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className={InputStyles}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className={InputStyles}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <textarea
              id="message"
              rows={5}
              placeholder="What would you like to know?"
              className={InputStyles}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </StyledDiv>
          <button
            type="submit"
            className="text-center bg-brandGreen text-white px-6 py-2.5 text-xs font-bold rounded-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {success && <p className="text-sm mt-2">{success}</p>}
        </form>
      </section>
    </div>
  );
};

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 100%;
`;

const InputStyles = `
  bg-brandGray/10 
  py-2.5 
  px-2 
  w-full 
  rounded-md 
  text-xs
  md:text-sm
  2xl:text-lg 
  placeholder:text-xs
  md:placeholder:text-sm
  focus:outline-none
  focus:ring-1
  focus:ring-black
  transition-all
  duration-200
`;

export default ContactForm;
