import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function VehicleSurveillanceSystem() {
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
                            Vehicle Surveillance System
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Our Vehicle Surveillance System provides advanced monitoring and control solutions to
                            enhance the security of your premises. Equipped with cutting-edge technologies such as
                            license plate recognition, GPS tracking, and high-definition video monitoring, this system
                            ensures that every vehicle entering or leaving your facility is thoroughly tracked and
                            documented.
                            <br/><br/>
                            Ideal for parking lots, corporate campuses, and high-security areas, the system helps
                            prevent unauthorized access, improves traffic flow, and enhances overall safety. With
                            real-time data and seamless integration into broader security networks, our Vehicle
                            Surveillance System delivers superior control and security for your facility.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-5">
                        <motion.div
                            className="h-80 bg-[url('/img/Vehicle-Surveillance-System.jpeg')] bg-cover bg-center rounded-lg"
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
