import { createContext, useState, useCallback,useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
 const[ticket, setTicket] =useState({
    type:"Free",
    quantity:1
  })

   const handleSelectTicket = (type)=>{
    setTicket({...ticket,type})
  };
 
  console.log(ticket);

  //form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    avatar: "",
    textArea: "",
    ticket:"",
  });

  // Ticket

  const ticketList =[
    { type: "Free", price: "Free", access: "REGULAR ACCESS" },
    { type: "VIP", price: "$150", access: "VIP ACCESS" },
    { type: "VVIP", price: "$300", access: "VVIP ACCESS" }
    ];

  useEffect(() => {
    const savedData = 
    JSON.parse(localStorage.getItem("ticketDetails"));
    if (savedData) setTicket(savedData);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("ticketDetails", 
      JSON.stringify(ticket));
  }, [ticket]);


  const[uploading,setUploading] = useState(false);

    


  // Handle image drag & drop
  const handlePictureUpload = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) uploadImage(file);
  }, []);

  // Upload image to Cloudinary
  const uploadImage = useCallback(async (file) => {
    if (!file) return;

    //ensuring i am accepting an image
    if(!file.type.startsWith("image/")){
      alert("please upload a valid image file")
      return;
    }

    setUploading(true);

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
    } 
    catch (error) {
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
