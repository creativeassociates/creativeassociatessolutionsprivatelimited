import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function IntrusionDetectionPerimeterProtectionSystems() {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    return (
        <>
            <div className="relative" style={{backgroundImage: "url('./img/event.jpeg')"}}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>
                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes}/>
                </div>
                <motion.div
                    ref={ref}
                    className="relative min-h-screen flex w-9/12 mx-auto pt-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="container text-center px-4 md:px-8">
                        <Typography variant="h2" color="white" className="text-left">
                            Intrusion Detection & Perimeter Protection Systems
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Protecting your facility from unauthorized access and potential threats starts with robust
                            perimeter security. Our Intrusion Detection and Perimeter Protection Systems offer advanced
                            technology to detect and deter intruders before they pose a risk. With features like motion
                            sensors, infrared detection, and video surveillance integration, our systems provide
                            real-time monitoring and alerts for any suspicious activity.
                            <br/><br/>
                            These solutions are designed to secure the outermost areas of your premises, ensuring a
                            comprehensive defense strategy that protects your assets and personnel. Whether for
                            industrial sites, corporate campuses, or sensitive locations, our systems deliver the
                            highest level of security and peace of mind.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-10">
                        <motion.div
                            className="h-80 bg-cover bg-center rounded-lg"
                            initial="hidden"
                            style={{backgroundImage: "url('./img/Intrusion-Detection-&-Perimeter-Protection-Systems.jpeg')"}}
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
