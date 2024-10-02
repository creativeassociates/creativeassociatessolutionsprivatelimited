import {InnerPageFrame} from "./inner-pages/inner-page-frame.jsx";

export function TechnicalSolutions() {
    const para = "Creative Associates Solutions Private Limited offers cutting-edge technical solutions designed to enhance operational efficiency and streamline processes for businesses across various sectors. Our innovative solutions include:\n" +
        "<br/> <br/> \n" +
        "Automated Parking Management:" +
        "<br/> \n" +
        " Efficient parking solutions that automate vehicle entry and exit processes, improving traffic flow and reducing congestion in busy facilities.\n" +
        "<br/> <br/> \n" +
        "Vehicle Management Through GPRS Solutions: " +
        "<br/> \n" +
        "Advanced tracking and management systems utilizing GPRS technology to monitor vehicle location, optimize routes, and improve fleet efficiency.\n" +
        "<br/> <br/> \n" +
        "Biometric Attendance Management Systems: " +
        "<br/> \n" +
        "State-of-the-art biometric systems that ensure accurate attendance tracking, enhancing accountability and operational transparency.\n" +
        "<br/> <br/> \n" +
        "AV and PA Systems: " +
        "<br/> \n" +
        "Comprehensive audio-visual integration services that enhance communication and collaboration within spaces, from meeting rooms to large auditoriums.\n" +
        "<br/> <br/> \n" +
        "At Creative Associates Solutions, we are committed to providing tailored technical solutions that meet your specific needs. Our team of experts works closely with clients to implement these advanced technologies, ensuring a seamless integration into existing operations. Experience improved productivity, enhanced security, and innovative solutions with our comprehensive technical offerings.";
    const title = "Technical Solutions";
    const imageName = "technical-solutions.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}