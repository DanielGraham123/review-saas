"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = ({ text = "Loading...", btnText }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit">
      {pending ? (
        <>
          <Loader2 className="mr-1 w-4 h-4" />
          {text}
        </>
      ) : (
        btnText
      )}
    </Button>
  );
};

export default SubmitButton;
