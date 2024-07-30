import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import ImagePicker from "@/app/components/meals/image-picker";
import { handleSubmitMeal } from "@/lib/actions";
import React from "react";

const page = () => {
  return (
    <main className="form-container">
      <form action={handleSubmitMeal}>
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
      </form>
    </main>
  );
};

export default page;
