import {InnerPageFrame} from "./inner-pages/inner-page-frame.jsx";

export function FacilityManagement() {
    const para = "At Creative Associates Solutions Private Limited, we offer comprehensive facility management solutions that ensure your operations run smoothly and efficiently. Our services encompass a wide array of specialized areas, including:\n" +
        "<br/> <br/> \n" +
        "Maintenance of Precision Air Conditioners:" +
        "<br/> \n" +
        " Expert servicing of precision HVAC systems to maintain optimal indoor climate control and energy efficiency.\n" +
        "<br/> <br/> \n" +
        "Building Management Systems (BMS): " +
        "<br/> \n" +
        "Advanced systems for monitoring and controlling building services to enhance operational efficiency and reduce energy consumption.\n" +
        "<br/> <br/> \n" +
        "Visitor Management Systems: " +
        "<br/> \n" +
        "Streamlined processes for managing visitors, enhancing security, and improving the overall experience for guests.\n" +
        "<br/> <br/> \n" +
        "Cafeteria Management: " +
        "<br/> \n" +
        "Professional management services for cafeteria operations, ensuring quality food service and customer satisfaction.\n" +
        "<br/> <br/> \n" +
        "Turnstiles/Flap Barriers/Boom Barriers: " +
        "<br/> \n" +
        "Advanced entry solutions for secure access control in various facility types, enhancing safety and efficiency.\n" +
        "<br/> <br/> \n" +
        "Our facility management team is dedicated to providing tailored services that align with your organization’s strategic goals. We focus on optimizing resource utilization, ensuring compliance with safety standards, and creating a clean, safe, and efficient environment for employees and visitors alike. Trust Creative Associates Solutions for all your facility management needs and experience enhanced operational efficiency and reliability.";
    const title = "Facility Management";
    const imageName = "Facility-Management.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}