import React, {useRef, useState} from 'react';
import { motion } from "framer-motion";

const ServicesScreen = () => {
    const ref = useRef(null);
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='h-screen w-full'>
            <div className="flex justify-center items-start  mt-10">
                <div className="">
                    
                        <div className="flex justify-center items-center relative">
                            <motion.div
                                className=" absolute box border-4 border-red-500 border-solid	 rounded-full w-[100px] h-[100px]"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                />
                                <motion.div
                                className="box border-8 border-red-500 border-solid	 rounded-full w-[250px] h-[250px]"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                />
                                <h1 className='font-bold text-5xl text-center absolute top-20 mt-6'>Services</h1>
                        </div>
                    
                        <motion.div
                        animate={{
                            rotate: 360,
                            borderRadius: [ "50% 50%", "2% 50%"],
                            x: 75
                        }}
                        initial={{
                            x: -75
                        }}
                        transition={{
                            flip: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            repeat:'infinity'
                        }}className="flex">
                            <motion.div className="border-red-400 border-8 border-solid rounded-full h-[250px] w-[250px] flex items-center justify-center box" data-expanded={expanded}>
                                <h1>Structured Cabeling</h1>
                            </motion.div>
                            <div className="border-red-400 border-8 border-solid rounded-full h-[250px] w-[250px] flex items-center justify-center">
                                <h1>Point of Sale</h1>
                            </div>
                            <div className="border-red-400 border-8 border-solid rounded-full h-[250px] w-[250px] flex items-center justify-center">
                                <h1>Security Cameras</h1>
                            </div>
                            <div className="border-red-400 border-8 border-solid rounded-full h-[250px] w-[250px] flex items-center justify-center">
                                <h1>Kiosks</h1>
                            </div>
                            <div className="border-red-400 border-8 border-solid rounded-full h-[250px] w-[250px] flex items-center justify-center">
                                <h1>Networks</h1>
                            </div>
                    
                        </motion.div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ServicesScreen;