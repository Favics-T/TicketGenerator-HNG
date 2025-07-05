import { createContext, useState, useCallback, useEffect } from "react";

//  Constants
const CLOUD_NAME = "dvp0efq26";
const UPLOAD_PRESET = "First_Cloudinary_using_cloudinary";
const TICKET_STORAGE_KEY = "ticketDetails";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [ticket, setTicket] = useState({ type: "Free", quantity: 1 });

  const ticketList = [
    { type: "Free", price: "Free", access: "REGULAR ACCESS" },
    { type: "VIP", price: "$150", access: "VIP ACCESS" },
    { type: "VVIP", price: "$300", access: "VVIP ACCESS" },
  ];

  // Restore ticket from localStorage
  useEffect(() => {
    try {
      const savedData = JSON.parse(localStorage.getItem(TICKET_STORAGE_KEY));
      if (savedData) setTicket(savedData);
    } catch (error) {
      console.error("Error loading ticket from localStorage:", error);
    }
  }, []);

  // Save ticket to localStorage
  useEffect(() => {
    localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(ticket));
  }, [ticket]);

  const handleSelectTicket = (type) => {
    setTicket({ ...ticket, type });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    avatar: "",
    textArea: "",
    ticket: "",
  });

  const [uploading, setUploading] = useState(false);

  //  Handle drag & drop
  const handlePictureUpload = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) uploadImage(file);
  }, []);

  //  Upload to Cloudinary
  const uploadImage = useCallback(async (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: data }
      );

      if (!response.ok) throw new Error("Cloudinary upload failed");

      const result = await response.json();
      if (result.secure_url) {
        setFormData((prev) => ({ ...prev, avatar: result.secure_url }));
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Failed to upload image. Try again!");
    } finally {
      setUploading(false);
    }
  }, []);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handlePictureUpload,
        uploadImage,
        uploading,
        ticketList,
        ticket,
        setTicket,
        handleSelectTicket,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
