import React, {useRef, useState} from "react";
import {Button, Card, CardBody, CardHeader, Input, Textarea, Typography,} from "@material-tailwind/react";
import {FingerPrintIcon} from "@heroicons/react/24/solid";
import {PageTitle} from "../widgets/layout/page-title.jsx";
import {Footer} from "../widgets/layout/footer.jsx";
import {FeatureCard} from "../widgets/cards/feature-card.jsx";
import {ServicesCard} from "../widgets/cards/services-card.jsx";
import {featuresData} from "../data/features-data.js";
import {services} from "../data/services-data.js";
import {useNavigate} from "react-router";
import Navbar from "../widgets/layout/navbar.jsx";
import {motion, useInView} from "framer-motion";
import * as emailjs from "emailjs-com";
import {navRoutes} from "../routes.jsx";

export function Home() {

    const SERVICE_ID = "service_g9p6t0u";
    const TEMPLATE_ID = "template_zo4izbq";
    const PUBLIC_KEY = "HEUdbnpiyTW2pAnxg";

    const form = useRef();
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('user_email');
    const mobileNo = formData.get('mobile_number');
    const message = formData.get('message');

    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        if (name.length < 1 || email.length < 5 || message.length < 0 || mobileNo.length < 10) {
            setStatus('All fields are required.');
            return;
        }
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("Received successfully!");
                    form.current.reset();
                },
                (error) => {
                    setStatus("Failed to send.");
                },
            );

    };

    const navigate = useNavigate();

    const whoWeAre = "At Creative Associates Solutions Pvt. Ltd., we are a dynamic team of passionate\n" +
        "                                    professionals committed to delivering innovative, end-to-end facility management\n" +
        "                                    solutions across diverse industries.\n" +
        "                                    With over two decades of experience, we’ve established ourselves as a trusted\n" +
        "                                    partner to businesses in Retail, Hospitality, Manufacturing, and Corporate sectors,\n" +
        "                                    providing tailor-made solutions that drive\n" +
        "                                    efficiency, security, and seamless operations.";

    const whatWeDo = "At Creative Associates Solutions Pvt. Ltd., we specialize in delivering integrated\n" +
        "                                    facility management services across diverse industries. Our solutions ensure the\n" +
        "                                    safety, efficiency, and smooth operation of your business.";

    const workingWithUsPleasure = "At Creative Associates Solutions Pvt. Ltd., we believe that successful partnerships are\n" +
        "                            built on trust, collaboration, and mutual respect. When you choose to work with us, you are\n" +
        "                            not just hiring a service provider; you are joining forces with a dedicated team that\n" +
        "                            prioritizes your needs and aspirations.";

    const topNotchServices = " We specialize in delivering comprehensive security and facility management solutions\n" +
        "                                    tailored to meet the unique needs of your business. From state-of-the-art\n" +
        "                                    surveillance systems to efficient operations and safety protocols, our services\n" +
        "                                    ensure a secure and well-maintained environment, empowering your organization to\n" +
        "                                    thrive.";

    // Animation variants for different elements
    const fadeInUp = {
        hidden: {opacity: 0, y: 100},
        visible: {opacity: 1, y: 0, transition: {duration: 1.2}},
    };

    const fadeIn = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 1.2}},
    };

    const slideInFromRight = {
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0, transition: {duration: 1.2}},
    };

    // Use refs to track which sections are in view
    const refTop = useRef(null);
    const refWhoWeAre = useRef(null);
    const refWhatWeDo = useRef(null);
    const refFeatures = useRef(null);
    const refServices = useRef(null);
    const refWorkingWithUs = useRef(null);


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const isTopInView = useInView(refTop, {once: false});
    const isWhoWeAreInView = useInView(refWhoWeAre, {once: false});
    const isWhatWeDoInView = useInView(refWhatWeDo, {once: false});
    const isFeaturesInView = useInView(refFeatures, {once: false});
    const isServicesInView = useInView(refServices, {once: false});
    const isWorkingWithUsInView = useInView(refWorkingWithUs, {once: false});


    return (
        <>
            <div className="overflow-auto">
                <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                    <Navbar routes={navRoutes}/>
                </div>

                {/* Main Top Section */}
                <div ref={refTop} className="relative min-h-screen  w-full bg-cover bg-no-repeat bg-center"
                     style={{backgroundImage: "url('./img/background.webp')"}}>
                    <div className="absolute inset-0 h-full w-full bg-gray-900/60"/>

                    <motion.div className="grid min-h-screen px-8" initial="hidden"
                                animate={isTopInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <div className="container relative my-auto mx-auto grid place-items-center text-center">
                            <Typography variant="h1" color="white" className="lg:max-w-3xl">
                                Provides End-To-End Facility Management Solutions
                            </Typography>
                            <Typography variant="lead" color="white"
                                        className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl font-extrabold">
                                Enable You To 'SECURE' Your Facility Environment
                            </Typography>
                            <motion.div className="flex items-center gap-4" initial={{opacity: 0, y: 20}}
                                        animate={isTopInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                        transition={{duration: 0.8}}>
                                <Button variant="gradient" color="white">
                                    Get started
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="absolute bottom-32 text-center space-x-20 left-1/4">
                        <Button onClick={() => scrollToSection(refWhoWeAre)}>Who We Are</Button>
                        <Button onClick={() => scrollToSection(refWhatWeDo)}>What We Do</Button>
                        <Button onClick={() => scrollToSection(refServices)}>Services</Button>
                        <Button onClick={() => scrollToSection(refWorkingWithUs)}>Working With Us</Button>
                    </div>
                </div>

                {/* Who We Are Section */}
                <motion.div ref={refWhoWeAre}
                            className="relative flex h-screen content-center items-center justify-center"
                            initial="hidden" animate={isWhoWeAreInView ? "visible" : "hidden"} variants={fadeIn}>
                    <div className="absolute top-0 h-full w-full bg-cover bg-center"
                         style={{backgroundImage: "url('./img/background-3.png')"}}
                    />
                    <div className="max-w-8xl container relative mx-auto h-screen flex items-center justify-center">
                        <div className="flex flex-wrap items-center justify-center">
                            <motion.div className="w-full px-4 text-left lg:w-6/12" variants={fadeInUp}>
                                <Typography variant="h1" color="white" className="mb-6 font-black text-center">
                                    Who we are?
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80 text-center">
                                    {whoWeAre}
                                </Typography>
                                <Button className="mt-8 mx-auto block" onClick={() => navigate("/woWeAre")}>
                                    Read More
                                </Button>
                            </motion.div>
                            <motion.div className="w-full px-4 lg:w-5/12" initial="hidden"
                                        animate={isWhoWeAreInView ? "visible" : "hidden"} variants={slideInFromRight}>
                                <div
                                    className="relative h-80 w-full bg-cover bg-center rounded-lg" style={{backgroundImage:"url('./img/Security.webp')"}}/>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* What We Do Section */}
                <div ref={refWhatWeDo}
                     className="relative flex h-auto content-center items-center justify-center pt-8 pb-40">
                    <div
                        className="absolute top-0 h-full w-full bg-center bg-cover"
                        style={{backgroundImage: "url('./img/background-2.jpg')"}}
                    />
                    <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center"/>
                    <motion.div className="max-w-6xl container relative mx-auto" initial="hidden"
                                animate={isWhatWeDoInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <div className="flex flex-wrap items-center">
                            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 p-8">
                                <Typography variant="h2" color="white" className="mb-4 font-bold text-5xl">
                                    What we do?
                                </Typography>
                                <Typography variant="lead" color="white" className="opacity-80 text-xl">
                                    {whatWeDo}
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Section */}
                <section ref={refFeatures} className="-mt-32 bg-white px-4 pb-20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {featuresData.map(({color, title, icon, description}) => (
                                <motion.div key={title} initial="hidden"
                                            animate={isFeaturesInView ? "visible" : "hidden"} variants={fadeInUp}>
                                    <FeatureCard
                                        color={color}
                                        title={title}
                                        icon={React.createElement(icon, {
                                            className: "w-5 h-5 text-white",
                                        })}
                                        description={description}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <div ref={refServices} className="w-full bg-cover bg-center"
                     style={{backgroundImage: "url('./img/background-3.png')"}}>
                    <section className=" pt-5 pb-10">
                        <div className="max-w-7xl mx-auto">
                            <Typography variant="h2" color="white" className="mb-4 font-bold text-5xl text-center">
                                Our Services
                            </Typography>
                            <motion.div className="mt-9 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3"
                                        initial="hidden" animate={isServicesInView ? "visible" : "hidden"}
                                        variants={fadeInUp}>
                                {services.map(({img, name, services}) => (
                                    <ServicesCard
                                        key={name}
                                        img={img}
                                        name={name}
                                        services={services}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* Working With Us Section */}
                <div ref={refWorkingWithUs} className="mt-32 flex flex-wrap items-center">
                    <motion.div className="mx-auto -mt-8 w-full px-4 md:w-5/12" initial="hidden"
                                animate={isWorkingWithUsInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <div
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                            <FingerPrintIcon className="h-8 w-8 text-white "/>
                        </div>
                        <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                            Working with us is a pleasure
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                            {workingWithUsPleasure}
                        </Typography>
                        <Button variant="filled" onClick={() => navigate("/workingWithUsIsPleasure")}>read more</Button>
                    </motion.div>
                    <motion.div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0"
                                initial="hidden" animate={isWorkingWithUsInView ? "visible" : "hidden"}
                                variants={slideInFromRight}>
                        <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                            <CardHeader floated={false} className="relative h-56">
                                <img alt="Card Image" src="./img/office.jpeg"
                                     className="h-full w-full object-cover rounded-t-lg"/>
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" className="mb-3 mt-2 font-bold text-center">
                                    Top Notch Services
                                </Typography>
                                <Typography className="font-normal text-blue-gray-500">
                                    {topNotchServices}
                                </Typography>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>

                {/* Contact Us Section */}
                <section className="relative bg-white py-24 px-4">
                    <div className="container mx-auto">
                        <PageTitle section="Contact Us" heading="Want to work with us?">
                            Complete this form and we will get back to you in 24 hours.
                        </PageTitle>
                        <form ref={form} className="mx-auto w-full mt-12 lg:w-6/12">
                            <div className="mb-8 flex gap-8">
                                <Input variant="outlined" size="lg" name="from_name" label="Full Name"/>
                                <Input variant="outlined" size="lg" name="user_email" label="Email Address"/>
                                <Input variant="outlined" size="lg" name="mobile_number" label="Mobile Number"/>
                            </div>
                            <Textarea variant="outlined" size="lg" name="message" label="Message" rows={5}/>
                            <p className="text-center text-xl">{status}</p>
                            <Button variant="gradient" size="lg" className="mt-8" fullWidth onClick={() => sendEmail()}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </section>

                {/* Footer Section */}
                <div className="bg-white">
                    <Footer/>
                </div>
            </div>
        </>
    );
}
