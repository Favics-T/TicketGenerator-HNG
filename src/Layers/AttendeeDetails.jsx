import React, { useContext, useEffect, useState } from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import FormContext from '../Context/FormContext';


const AttendeeDetails = () => {
  const{ formData,setFormData,handlePictureUpload,uploadImage  } = useContext(FormContext);
  const[errors,setErrors] = useState({})
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value })
  }
  
  // save data to local storage

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("attendeeDetails")) || {};
    setFormData((prev) => ({ ...prev, ...savedData }));
  }, []);

  // Save data to local storage when formData changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("attendeeDetails", JSON.stringify(formData));
    }
  }, [formData]);

  // function to validate form
  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.about || !formData.about.trim()) 
      newErrors.about = "Project description is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) 
      newErrors.email = "Invalid email format.";
    
    if (!formData.avatar) {
      newErrors.avatar = "Profile picture is required.";
    } else if (!/^https?:\/\/.+/.test(formData.avatar)) {
      newErrors.avatar = "Invalid image URL.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submit
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(validateForm()){
      alert("Form submitted Successfully!")
      navigate("/ticketready")
    }
  }

  


  return (
    
    <div className='bg-[#02191D] text-[#ffff] h-auto flex justify-center '>
     
<div className='bg-[#041e23] border 
md:m-[48px] m-[64px 20px] py-[24px] md:py-[48px] px-[24px] md:p-[24px] 
 p-[32px 24px] justify-center items-center   my-[112px] border-[#0e464f]
gap-[32px]  md:w-[700px] w-[375px]  self-stretch   flex flex-col  rounded-[24px]  '>

{/* Header Starts Here */}
<div>
 
<div className='flex flex-col md:gap-[300px] md:flex-row  text-white'>
    <h1 className='text-[#fff] font-[JejuMyeongjo] self-stretch text-[24px] md:text-[32px]font-normal '>Attendee Details</h1>
    <p className='font-[Roboto] mt-4 text-[16px] font-normal  '>
      Step 2/3</p>
</div>

{/* Progress bar */}

<div className='self-stretch w-full flex rounded-[5px] bg-[#0E464F] h-[4px] pr-[278px] items-center '>
<div className=':w-[326px]  self-stretch bg-[#24a0b5] '></div>
<div className='bg-[#0E464F] '></div>


</div>
</div>


{/* Header ends here */}

{/* multi step form starts here */}

<div className='border md:w-full w-[375px] border-[#0E464F] rounded-[32px] flex 
p-[24px] flex-col justify-center items-star gap-[32px] self-stretch '>


{/* Component instance starts here */}

 {/*form starts here  */}
 <form action="" onSubmit={handleSubmit} className='text-white flex flex-col px-2  gap-[8px] '>



<div className='bg-[#052228] border border-1-[#07373F] border-[#07373F] rounded-[24px] flex flex-col md:w-[556px] p-[24px] items-start gap-[32px]  '>

<label className='text-white font-[Roboto] text-[16px] font-normalfont-400 '>Upload Photo Here</label>

{/* Photo frame starts here */}
<div className='flex justify-center border-[#0e464f] border px-[24px]  gap-[10px] self-stretch items-center bg-[rgba(0,0,0,0.20)]'

>
  <div className='flex flex-col justify-center bg-[#0E464F] border border-[#0e464f] rounded-[32px] gap-[16px]  items-center w-[240px] h-[240px] p-[24px]  '>
{formData.avatar ?(<div>{
  <img src={formData.avatar} alt="" />
  
      
      }</div>)
      :
      (<div>
        

<div className='flex flex-col justify-center bg-[#0E464F] border border-[#0e464f] rounded-[32px] gap-[16px]  items-center w-[240px] h-[240px] p-[24px]'
   onDragOver={(e) => e.preventDefault()}
   onDrop={handlePictureUpload}
   onClick={() => document.getElementById("fileUpload").click()}
  >
    <h1 className='w-[32px] h-[32px] flex shrink  aspect-square '> <IoCloudDownloadOutline /> </h1>
  <h1 className='text-center text-[#fafafa] font-[Roboto]
  text-[16px] font-400  '>
    Drag & drop or click to upload</h1>
   
    <input
     type="file" className='hidden' 
     onChange={(e)=>uploadImage(e.target.files[0])}
     name="" id="fileUpload" />
     
     </div>

      </div>)}
    </div>
 
  
</div>

{/* Photo Frame ends here */}



</div>
{/* component instance ends here */}

{/* progress bar starts here */}
<div className='h-[4px] self-stretch bg-[#07373F] my-8  '></div>
{/* progress bar ends here */}


 
            
            <label htmlFor="enteryourname"className='font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>Enter Your Name</label>
            <input  id='enteryourname' name='name' value={formData.name} onChange={handleChange}  className='flex border w-full border-[#07373f] rounded-[12px] h-[48px] p-[12px] items-center gap-[8px] self-stretch ' type="text" />

               {errors.name && <p className='text-red-500'>{errors.name}</p>} 

            <label htmlFor="email" className=' font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>Enter Your Email</label>
            <input id='email' name='email' value={formData.email} onChange={handleChange}
            className='flex border w-full border-[#07373f] rounded-[12px] h-[48px] p-[12px] items-center gap-[8px] self-stretch ' type="text" />

{errors.email && <p className="text-red-500">{errors.email}</p>}

              <label htmlFor="aboutproject"className='font-[Roboto] text-[16px] font-normal text-[#fafafa]  '>About The Project</label>
              <textarea className='flex w-full border border-[#07373f] gap-[8px] self-stretch p-[12px] items-start rounded-[12px] h-[127px]  '
              name="about" id="aboutproject" value={formData.about} onChange={handleChange}></textarea>
              {errors.about && <p className='text-red-500'>{errors.about}</p>}

              
          </form>
          {/* form ends here */}

          {/* button starts here */}

        <div className='flex gap-[8px] border px-10 border-[#24A0B5] 
                     rounded-[20px] flex-[1_0_0] items-center justify-center   '>
                      
                       <button className='flex flex-[1_0_0] font-400 font-[16px] font-[JejuMyeongjo] text-[#24A0B5]
                       rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '> 
                          <Link to='/'> Back </Link></button>
                         
                       
                        
                    <button 
                    className='flex md:flex-[1_0_0] text-[16px] font-normal
                     text-[#fff] font-[JejuMyeongjo] bg-[#24a0b5] rounded-[8px] py-[12px] px-[24px] items-center justify-center gap-[8px] border border-[#24A0B5] '
                     onClick={handleSubmit}> Get My Ticket  </button>  
                     
                     </div>


                    
          {/* button ends here */}

</div>
{/* multi step form ends here */}
</div>
        
    </div>
  )
}

export default AttendeeDetails