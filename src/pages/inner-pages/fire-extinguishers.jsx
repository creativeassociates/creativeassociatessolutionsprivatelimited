import {InnerPageFrame} from "./inner-page-frame.jsx";

export function FireExtinguishers() {
    const para = "Creative Associates Solutions Private Limited offers a wide range of fire extinguishers as part of our comprehensive electronic security solutions. Our fire extinguishers are designed to meet the highest safety standards, providing quick and effective response to fire hazards across various types of facilities.\n" +
        "<br/><br/>\n" +
        "We provide installation, inspection, and maintenance services to ensure that your fire extinguishers are always ready for use in case of an emergency. Our solutions are tailored to protect your staff, property, and assets, offering peace of mind through enhanced fire safety and compliance with regulations.";
    const title = "Fire Extinguishers";
    const imageName = "Fire-Extinguishers.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}