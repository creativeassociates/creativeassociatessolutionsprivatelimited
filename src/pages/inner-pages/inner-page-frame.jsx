import {Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function InnerPageFrame({title, para, imageName}) {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    const paraLines = para.split('<br/>').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < para.split('\n').length  && <br/>} {/* Add a <br /> after each line except the last */}
        </React.Fragment>
    ));

    return (
        <>
            <div className="relative" style={{backgroundImage: "url('./img/event.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>
                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes}/>
                </div>
                <motion.div
                    ref={ref}
                    className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-20 pb-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="flex-1 text-center px-4 md:px-8">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            {paraLines}
                        </Typography>
                    </div>
                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{backgroundImage: `url('./img/${imageName}')`}}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
