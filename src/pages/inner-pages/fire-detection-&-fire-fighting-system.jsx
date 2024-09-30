import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function FireDetectionFireFightingSystem() {
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
            <div className="relative bg-[url('/img/event.jpeg')]">
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
                            Fire Detection / Fire Fighting System
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Our Fire Detection and Fire Fighting System provides an essential layer of protection for
                            your facility. Equipped with state-of-the-art smoke detectors, heat sensors, and
                            programmable alarm systems, it ensures early detection of potential fire hazards. In case of
                            emergencies, integrated fire suppression systems, including sprinklers and extinguishers,
                            activate swiftly to minimize damage and safeguard lives.
                            <br/><br/>
                            Designed for various environments such as offices, industrial sites, and public spaces, our
                            system delivers real-time monitoring, rapid response, and comprehensive fire safety
                            solutions to protect your property and people.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-5">
                        <motion.div
                            className="h-80 bg-[url('/img/Fire-Detection-Fire-Fighting-System.png')] bg-cover bg-center rounded-lg"
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
