import {Button, Typography} from "@material-tailwind/react";
import React, {useRef} from "react";
import Navbar from "../../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../../routes.jsx";
import {motion, useInView} from "framer-motion";

export function ExplosiveDetectors() {
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
                            Explosive Detectors
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            Our Explosive Detectors offer cutting-edge technology to ensure the highest level of
                            security for sensitive environments. Designed to detect a wide range of explosive materials,
                            these systems provide fast, accurate identification, helping prevent potential threats
                            before they escalate.
                            <br/><br/>
                            Ideal for airports, government buildings, and high-risk areas, our detectors offer reliable
                            performance with minimal false alarms. With advanced scanning capabilities and seamless
                            integration into your overall security infrastructure, our Explosive Detectors enhance
                            safety, providing peace of mind for personnel and visitors alike.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-5">
                        <motion.div
                            className="h-80 bg-cover bg-center rounded-lg"
                            style={{backgroundImage: "url('./img/Explosive-Detectors.jpeg')"}}
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
