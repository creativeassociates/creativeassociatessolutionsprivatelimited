import {InnerPageFrame} from "./inner-page-frame.jsx";

export function CafeteriaManagement() {
    const para = "Creative Associates Solutions Private Limited provides comprehensive Cafeteria Management services, ensuring smooth operations and a hygienic dining environment for your employees and visitors. Our services include food service management, hygiene maintenance, and equipment upkeep, designed to meet the daily needs of corporate and industrial facilities.\n" +
        "<br/><br/>\n" +
        "We focus on delivering a well-organized, clean, and efficient cafeteria experience, ensuring timely service and adherence to food safety standards. With our tailored solutions, you can offer a pleasant dining environment that enhances employee satisfaction and productivity.";
    const title = "Cafeteria Management";
    const imageName = "Cafeteria-Management.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}