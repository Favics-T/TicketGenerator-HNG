import { createContext, useState, useCallback } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    avatar: "",
    textArea: "",
  });

  // Handle image drag & drop
  const handlePictureUpload = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) uploadImage(file);
  }, []);

  // Upload image to Cloudinary
  const uploadImage = useCallback(async (file) => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "First_Cloudinary_using_cloudinary"); // ✅ Fixed
    data.append("cloud_name", "dvp0efq26");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dvp0efq26/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Cloudinary upload failed");
      }

      const uploadImageURL = await response.json();
      console.log("Cloudinary Upload Response:", uploadImageURL);

      if (uploadImageURL.secure_url) {
        setFormData((prev) => ({ ...prev, avatar: uploadImageURL.secure_url }));
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("File upload error:", error);
      alert("Failed to upload image. Try again!");
    }
  }, []);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handlePictureUpload,
        uploadImage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
