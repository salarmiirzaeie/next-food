"use client";
import React from "react";
import classes from "./image-picker.module.css";
interface Props {
  label: string;
  name: string;
}
const ImagePicker: React.FC<Props> = ({ label, name }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [image, setImage] = React.useState<string>("");
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={classes.container}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.imageContainer}>
          {image && (
            <img src={image} alt="Uploaded" className={classes.image} />
          )}
        </div>
        <input
          type="file"
          className={classes.hidden}
          id="image"
          name={name}
          accept="image/*"
          required
          ref={inputRef}
          onChange={handleImageChange}
        />
        <button
          className="border-current	border-2 border-sky-500"
          onClick={handleClick}
          type="button"
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
