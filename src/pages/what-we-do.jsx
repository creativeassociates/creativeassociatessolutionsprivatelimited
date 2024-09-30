import { Button, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import Navbar from "../widgets/layout/navbar.jsx";
import routes, {navRoutes} from "../routes.jsx";
import ScrollToTop from "../widgets/scroll-to-top.jsx";
import { motion, useInView } from "framer-motion";

export function WhatWeDo() {
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
            <div className="relative bg-[url('/img/event.jpeg')]">
                <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

                <div className="relative container mx-auto p-4">
                    <Navbar routes={navRoutes} />
                </div>

                <motion.div
                    ref={ref}
                    className="relative min-h-screen flex w-10/12 mx-auto pt-10 pb-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                >
                    <div className="container text-center px-4 md:px-8">
                        <Typography variant="h2" color="white" className="text-left">
                            What We Do?
                        </Typography>
                        <Typography
                            variant="paragraph"
                            color="white"
                            className="text-left w-full font-light mt-5"
                        >
                            At Creative Associates Solutions Pvt. Ltd., we provide comprehensive facility management and
                            security solutions designed to meet the unique needs of businesses across multiple
                            industries. Our wide range of services is built to enhance efficiency, security, and
                            operational excellence, allowing you to focus on your core business while we handle the
                            rest.
                            <br/><br/>
                            Facility Management Solutions
                            We specialize in maintaining and managing both new and existing facilities through a
                            seamless integration of technology and expertise. Our offerings include:
                            <br/><br/>
                            Maintenance of precision air conditioners, HVAC systems, and building management systems
                            (BMS) for optimal environment control.
                            Comprehensive visitor management, cafeteria management, and access control systems to ensure
                            smooth day-to-day operations.
                            Customized annual maintenance contracts (AMCs) to ensure that your facility runs efficiently
                            year-round.
                            Security Solutions
                            We protect your business with state-of-the-art electronic security systems:
                            <br/><br/>
                            CCTV Surveillance (including Dome, Bullet, Network/IP, and Wireless cameras) for continuous
                            monitoring.
                            Access Control and Intrusion Detection to safeguard your premises.
                            Fire Detection & Fire Fighting Systems, including heat/smoke detectors, programmable alarm
                            systems, and water sprinkler systems.
                            Biometric Attendance & Vehicle Surveillance Solutions to streamline security and access
                            management.
                            Technical Solutions
                            Our advanced technology solutions help businesses operate smarter:
                            <br/><br/>
                            Biometric Attendance Management Systems for accurate and efficient workforce tracking.
                            Automated Parking Management and Vehicle Management through GPRS Solutions for seamless
                            parking operations.
                            AV Integration Services, including audio/video conferencing systems, wireless displays, and
                            experience centers to enhance communication and collaboration within your organization.
                            Operations & Maintenance
                            We offer complete operations and maintenance services to keep your facility running
                            smoothly:
                            <br/><br/>
                            General electrical maintenance and servicing of LT/HT panels, ACB/VCB units, and DG
                            operations.
                            24/7 power, UPS, and BMS monitoring to ensure uninterrupted facility performance.
                            Comprehensive preventive and breakdown maintenance, project management, and AMC solutions to
                            mitigate risks and reduce downtime.
                            Safety Equipment & IT Peripherals
                            We also provide high-quality safety equipment to ensure a safe working environment:
                            <br/><br/>
                            Protective gear, including helmets, gloves, reflective jackets, and fire blankets.
                            Emergency kits such as first aid and eyewash stations. Additionally, we offer a wide range
                            of IT peripherals including laptops, monitors, hubs, and POE switches to support your
                            technological needs.
                            Whether you need a reliable partner for facility management, enhanced security systems, or
                            advanced technical solutions, Creative Associates Solutions Pvt. Ltd. is here to provide the
                            expertise, innovation, and support to meet your business needs.
                        </Typography>
                    </div>
                    <div className="w-1/2 pt-20">
                        <motion.div
                            className="h-80 bg-[url('/img/fingerprint.jpeg')] bg-cover bg-center rounded-lg"
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
