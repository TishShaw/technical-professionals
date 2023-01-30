import React from 'react';
import {RiMapPin2Fill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';

const ContactScreen = () => {
    return (
        <div className='h-screen w-full'>
            <div className='mt-8'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='font-bold text-4xl text-center'>Contact Us</h1>
                    <p className='mt-6 text-lg'>Let's get in touch. Send us a message:</p>
                 </div>
               
                <div className='my-12 mx-6 space-y-6'>
                    <div className='flex items-center'>
                        <RiMapPin2Fill className='mr-4 text-3xl'/>
                        <span> 8507 Oxon Hill Road Suite 301, Fort Washington, MD 20744</span>
                    </div>
                    <div className='flex items-center'>
                        <BsTelephoneFill className='mr-4 text-3xl'/>
                        <span>  Phone: 301-839-3335</span>
                    </div>
                    <div className='flex items-center'>
                        <MdEmail className='mr-4 text-3xl'/>
                        <span> Email: info@branchts.com</span>
                    </div>
                    
                </div>
                <form className='flex flex-col justify-center h-full'>

                    <label className='contactLabel'>Full Name</label>
                    <input type='text' className='contactInput'/>
                    <label className='contactLabel'>Email</label>
                    <input type='text' className='contactInput'/>
                    <label className='contactLabel'>Topic</label>
                    <input type='text' className='contactInput'/>
                    <label className='contactLabel'>Subject</label>
                    <input type='text' className='contactInput'/>
                    <label className='contactLabel'>Body</label>
                    <textarea rows="10" cols="50" type='text' className='contactInput'/>
                    <button className='m-auto flex text-center items-center justify-center border border-solid border-red-500 w-[200px] bg-red-500 p-4 text-center mt-6'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactScreen;