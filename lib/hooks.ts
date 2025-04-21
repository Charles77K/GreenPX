"use client";

import React, { useState } from "react";

export const usePostData = <T>() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const [success, setSuccess] = useState<boolean>(false);

  const postData = async (
    endpoint: string,
    formData: T
  ): Promise<{ success: boolean; error?: unknown }> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://greenpx-api.vercel.app/api/v1/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.status === 429) {
        throw {
          message: "Too many requests. Please try again later.",
          status: 429,
        };
      }

      if (response.status !== 201) {
        const contentType = response.headers.get("content-type");
        let errorData;
        if (contentType?.includes("application/json")) {
          errorData = await response.json();
        } else {
          errorData = { message: await response.text() };
        }
        throw errorData;
      }
      setSuccess(true);
      return { success: true };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
      console.log(error);
      setSuccess(false);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };
  const reset = () => {
    setIsLoading(false);
    setSuccess(false);
    setError(null);
  };
  return {
    postData,
    isLoading,
    error,
    success,
    reset,
  };
};
