import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useFormik } from 'formik';
import * as Yup from "yup";

function Contact() {
    // Store input values to send to API
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
    };

    const onSubmit = values => {
        // You can post request to API endpoint here
    }

    // Form validation with YUP
    const validationSchema = Yup.object({
        firstname: Yup.string().required("Please enter your first name"),
        lastname: Yup.string().required("Please enter your last name"),
        email: Yup.string().email("Invalid email address format").required("Please enter your email address")
    });

    // Initialize formik hook
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <div data-aos="zoom-in-up" id='contact' className="w-full flex flex-col p-[10px] gap-[40px] pb-[60px]">
            <div>
                {/* Contact title */}
                <span className="position-text text-4xl w-full text-center flex justify-center font-bold">Contact</span>
            </div>
            <div className="grid grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:gap-[70px]">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[20px] w-full items-center">
                    {/* Input fields */}
                    <input
                        type="text"
                        name='firstname'
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    />
                    {/* Display error message if touched and error exists */}
                    {formik.touched.firstname && formik.errors.firstname ? (
                        <p className='text-yellow-600 text-start w-[80%]'>
                            {formik.errors.firstname}
                        </p>
                    ) : null}

                    <input
                        type="text"
                        name='lastname'
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <p className='text-yellow-600 text-start w-[80%]'>
                            {formik.errors.lastname}
                        </p>
                    ) : null}

                    <input
                        type="text"
                        name='email'
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-[80%] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[40px] p-3 outline-none text-white"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className='text-yellow-600 text-start w-[80%]'>
                            {formik.errors.email}
                        </p>
                    ) : null}

                    <textarea
                        placeholder="Message"
                        className="min-w-[80%] max-w-[80%] min-h-[200px] max-h-[200px] rounded-[5px] bg-[#0A0A0A] border-[2px] border-[#252525] h-[35px] p-[3px] outline-none text-white"
                    />
                    <button
                        type="submit"
                        className="w-[20%] btn rounded-[20px] font-bold h-[40px] flex items-center justify-center text-black"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact information */}
                <div className="flex flex-col gap-[40px]">
                    <span className='flex gap-[10px] items-center'>
                        <LocalPhoneIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`tel://+0000000000`} className='text-white font-bold text-xl'>60011111111</a>
                    </span>
                    <span className='flex gap-[10px] items-center'>
                        <EmailIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`mailto://example@gmail.com`} className='text-white font-bold text-xl'>example@gmail.com</a>
                    </span>
                    <span className='flex gap-[10px] items-center'>
                        <LocationOnIcon className='btn rounded-full w-[40px] h-[40px] p-[4px]' />
                        <a href={`tel://+0000000000`} className='text-white font-bold text-xl'>60011111111</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact;
