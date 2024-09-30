import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function TimeAndAttendanceSystems() {
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
                            Time And Attendance Systems
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Our Time & Attendance System streamlines workforce management with precision and ease.
                            Utilizing advanced biometric technology, RFID card readers, and facial recognition, it
                            ensures accurate tracking of employee attendance and work hours. This system helps eliminate
                            manual errors, prevents time theft, and improves overall operational efficiency.
                            <br/><br/>
                            Whether for corporate offices, industrial plants, or educational institutions, our Time &
                            Attendance System offers seamless integration with payroll and HR systems, providing a
                            comprehensive solution for managing your workforce while boosting productivity.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-5">
                        <motion.div
                            className="h-80 bg-[url('/img/Time-&-Attandance-System.jpeg')] bg-cover bg-center rounded-lg"
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
