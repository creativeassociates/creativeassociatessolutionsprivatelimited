import {InnerPageFrame} from "./inner-page-frame.jsx";

export function BuildingManagementSystem() {
    const para = "Creative Associates Solutions Private Limited specializes in the installation, management, and maintenance of advanced Building Management Systems (BMS). Our BMS solutions provide centralized control over critical building operations, including HVAC, lighting, security, and energy management.\n" +
        "<br/><br/>\n" +
        "By automating and optimizing building functions, our BMS enhances operational efficiency, reduces energy consumption, and ensures a comfortable, secure environment for occupants. Tailored to meet the unique needs of commercial and industrial facilities, our services ensure your building operates at peak performance while minimizing operational costs.";
    const title = "Building Management System (BMS)";
    const imageName = "Building-Management-Systems.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}