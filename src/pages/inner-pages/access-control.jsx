import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import ScrollToTop from "../../widgets/scroll-to-top.jsx";
import {motion, useInView} from "framer-motion";

export function AccessControl() {
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
                            Access Control
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Ensuring a secure and controlled environment is crucial in today's world, where the need for
                            managing access is more vital than ever. Our Access Control System offers advanced solutions
                            like biometric authentication, RFID card access, and centralized monitoring, designed to
                            safeguard premises and assets effectively.
                            <br/><br/>
                            With our solutions, you can regulate who enters your facility, providing peace of mind and
                            operational efficiency. Whether for corporate buildings, industrial sites, or high-security
                            areas, our systems ensure that only authorized personnel gain entry, helping you maintain
                            security and control seamlessly.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-10">
                        <motion.div
                            className="h-80 bg-[url('/img/access-control.jpeg')] bg-cover bg-center rounded-lg"
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
