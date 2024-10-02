import {InnerPageFrame} from "./inner-page-frame.jsx";

export function HSU() {
    const para = "Creative Associates Solutions Private Limited offers expert management and maintenance services for Handling System Units (HSU) to ensure efficient air distribution and temperature control in commercial and industrial facilities. Our HSU solutions are designed to optimize indoor air quality and maintain a comfortable environment for occupants.\n" +
        "<br/><br/>\n" +
        "We provide installation, routine maintenance, and troubleshooting to keep your HSUs running efficiently, reducing energy costs and ensuring reliable performance. Our comprehensive facility management services ensure your systems remain fully operational, contributing to overall building efficiency and occupant satisfaction.";
    const title = "Handling System Units (HSU)";
    const imageName = "Handing-System-Unit.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}