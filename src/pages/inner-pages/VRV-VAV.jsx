import {InnerPageFrame} from "./inner-page-frame.jsx";

export function VRVVAV() {
    const para = "Creative Associates Solutions Private Limited specializes in the management and maintenance of Variable Refrigerant Volume (VRV) and Variable Air Volume (VAV) systems. These advanced HVAC solutions offer exceptional energy efficiency and precise climate control, tailored to meet the unique needs of your facility.\n" +
        "<br/><br/>\n" +
        "Our team ensures optimal performance and reliability of VRV and VAV systems, providing routine maintenance and support to enhance indoor comfort while reducing energy consumption. With our expertise, we help you achieve a sustainable and comfortable environment for occupants, all while maintaining operational efficiency.";
    const title = "VRV/VAV Systems";
    const imageName = "Variable-Refrigerant-Volume-(VRV)-and-Variable-Air-Volume-(VAV)-systems.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}