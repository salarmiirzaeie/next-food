"use client";
import React from "react";
import { useFormStatus } from "react-dom";
interface Props {
  title: string;
}

const PrimaryButton: React.FC<Props> = ({ title, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn btn-primary"
      disabled={pending}
      type="submit"
      {...props}
    >
      {pending ? "Loading..." : title}
    </button>
  );
};

export default PrimaryButton;
