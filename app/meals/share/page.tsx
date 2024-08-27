"use client";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import ImagePicker from "@/app/components/meals/image-picker";
import { handleSubmitMeal } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const page = () => {
  const [state, formAcion] = useFormState<{ message: string | null }, any>(
    handleSubmitMeal,
    {
      message: null,
    }
  );
  return (
    <main className="form-container">
      <form action={formAcion}>
        <h2>Upload Your Image</h2>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="input-group">
          <label htmlFor="image">Choose an Image:</label>
          <ImagePicker label="Image" name="image" />
        </div>
        <PrimaryButton title="Submit" />
        <p className="text-error">{state.message}</p>
      </form>
    </main>
  );
};

export default page;
