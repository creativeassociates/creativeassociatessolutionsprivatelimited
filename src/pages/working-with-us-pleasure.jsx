import { Button, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, { navRoutes } from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function WorkingWithUsPleasure() {
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
                    className="relative min-h-screen flex flex-col md:flex-row w-10/12 mx-auto pt-10 pb-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="container text-center px-4 md:px-8 flex-1">
                        <Typography variant="h2" color="white" className="text-left text-3xl md:text-4xl lg:text-5xl">
                            Working with Us is a Pleasure
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg"
                        >
                            Partnering with us means seamless collaboration, innovative solutions, and a commitment to
                            your business’s success. Our expert team brings personalized, cutting-edge services,
                            ensuring your needs are met efficiently and with precision. With our focus on quality and
                            reliability, working with us is not just a service—it’s a long-term relationship built on
                            trust and excellence.
                        </Typography>

                        <Typography variant="h3" color="white" className="text-left w-full mt-5 text-2xl md:text-3xl">
                            Why Partner with Us?
                        </Typography>

                        <Typography variant="paragraph" color="white" className="text-left w-full font-light mt-5 text-sm md:text-base lg:text-lg">
                            <Typography variant="h4" color="white" className="text-left mt-5 text-xl md:text-2xl">
                                Client-Centric Approach:
                            </Typography>
                            We listen to your requirements and tailor our solutions to meet your specific challenges.
                            Our commitment to understanding your business ensures that we deliver results that truly
                            matter.
                            <br />

                            <Typography variant="h4" color="white" className="text-left mt-5 text-xl md:text-2xl">
                                Expertise and Experience:
                            </Typography>
                            With over 69 years in the industry, our team comprises highly skilled professionals who are
                            passionate about what they do. We leverage our extensive knowledge and experience to provide
                            innovative solutions that drive operational efficiency and security.
                            <br />

                            <Typography variant="h4" color="white" className="text-left mt-5 text-xl md:text-2xl">
                                Open Communication:
                            </Typography>
                            Transparency and open lines of communication are the cornerstones of our working
                            relationship. We keep you informed every step of the way, ensuring that you are always in
                            the loop regarding project progress and updates.
                            <br />

                            <Typography variant="h4" color="white" className="text-left mt-5 text-xl md:text-2xl">
                                Proactive Support:
                            </Typography>
                            Our partnership doesn't end with the delivery of services. We provide continuous support and
                            maintenance to ensure that your operations run smoothly. Our dedicated crisis management
                            team is always available to address any challenges that may arise.
                            <br />

                            <Typography variant="h4" color="white" className="text-left mt-5 text-xl md:text-2xl">
                                Shared Success:
                            </Typography>
                            We view your success as our success. By fostering a collaborative environment, we aim to
                            build long-term relationships that contribute to your growth and enhance your operational
                            capabilities.
                            <br /><br />
                            Join us at Creative Associates Solutions Pvt. Ltd. and experience a partnership that is
                            defined by excellence, dedication, and a shared commitment to success. Working with us is
                            not just a transaction; it’s a journey towards achieving your organizational goals together.
                        </Typography>
                    </div>

                    <div className="flex-1 pt-10 md:pt-20">
                        <motion.div
                            className="h-80 md:h-96 lg:h-[32rem] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('./img/working.jpeg')" }}
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
