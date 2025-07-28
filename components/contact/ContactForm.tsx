"use client";

import { usePostData } from "@/lib/hooks";
import { ShowToast } from "@/lib/toast";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import { cn } from "@/lib/utils";

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
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { postData, reset, isLoading } = usePostData<FormData>();

  useEffect(() => {
    const { name, email, message } = formData;
    const isFormValid =
      name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    setCanSubmit(isFormValid);
  }, [formData]);

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
    if (formData.message.length < 5)
      tempErrors.message = "Message should be at least 5 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // onChange Event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  // form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return; //if form isn't valid return
    const result = await postData("contact", formData); // send data function
    if (result.error)
      ShowToast.error("Error", `${result.error || "Something went wrong"}`); //if there is an error  display this toast message

    // if successful
    if (result.success) {
      ShowToast.success("Success", "Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
    }
    reset();
  };

  return (
    <div className="border-[0.5px] border-brandGreen md:max-w-lg w-full p-8 bg-white rounded-2xl">
      <section className="flex flex-col items-start w-full">
        <h4 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-2">
          Get In Touch
        </h4>
        <p className="text-xs md:text-sm 2xl:text-base font-normal text-brandGray mb-4">
          Send a message and we&apos;ll reply in less than 4 hours
        </p>

        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 w-full"
        >
          {/* user name */}
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

          {/* user email */}
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

          {/* user message */}
          <StyledDiv>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <textarea
              id="message"
              rows={5}
              placeholder="What would you like to know or what would you like us to know?"
              className={InputStyles}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </StyledDiv>

          {/* submit btn */}
          <button
            type="submit"
            className={cn(
              "text-center bg-brandGreen text-white px-10 py-4 text-xs font-bold rounded-lg",
              canSubmit ? "" : "opacity-55 cursor-not-allowed"
            )}
            disabled={isLoading || canSubmit}
          >
            {isLoading ? <Spinner size="sm" /> : "Submit"}
          </button>
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
  rounded-xl 
  border border-brandGray/20
  text-xs
  md:text-sm
  placeholder:text-xs
  md:placeholder:text-sm
  placeholder:text-brandGray
  focus:outline-none
  focus:ring-1
  focus:ring-black
  transition-all
  duration-200
`;

export default ContactForm;
