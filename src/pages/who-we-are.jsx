import { Button, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function WhoWeAre() {
    // Create a ref for the component to track visibility
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <ScrollToTop />
            <div className="relative" style={{ backgroundImage: "url('./img/event.jpeg')" }}>
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes} />
                </div>

                <motion.div
                    ref={ref}
                    className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Who We Are?
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            At Creative Associates Solutions Pvt. Ltd., we specialize in delivering innovative,
                            end-to-end facility management solutions across industries like Retail, Hospitality,
                            Manufacturing, and Corporate sectors. With over two decades of experience, we offer tailored
                            solutions that enhance efficiency, security, and smooth operations.
                            <br /><br />
                            Our expertise includes electronic security systems, facility management, and project
                            management, all designed to align with your goals. From CCTV and fire protection to
                            biometric attendance and automated parking, we provide a full suite of services under one
                            roof.
                            <br /><br />
                            Our commitment to client-first service, proactive maintenance, and 24/7 support makes us the
                            trusted partner for businesses across India. Let us handle your facility management, so you
                            can focus on growing your business.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            initial="hidden"
                            style={{ backgroundImage: "url('./img/Security.webp')" }}
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
