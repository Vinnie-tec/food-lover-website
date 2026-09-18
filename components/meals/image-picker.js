"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import style from "./image-picker.module.css";

export default function ImagePicker({ lable, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickImage() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <div className={style.picker}>
      <label htmlFor="image">{lable}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
          {!pickedImage && <p>No image picked yet.</p>}
        </div>
        <input
          className={style.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={style.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
