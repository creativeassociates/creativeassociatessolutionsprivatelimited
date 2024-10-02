import {InnerPageFrame} from "./inner-page-frame.jsx";

export function HeatSmokeDetection() {
    const title = "Heat & Smoke Detection";
    const para = "Creative Associates Solutions Private Limited offers advanced Heat and Smoke Detection\n" +
        "                            systems to ensure early warning against fire hazards, protecting your premises and\n" +
        "                            personnel. With state-of-the-art sensors, our systems accurately detect abnormal heat levels\n" +
        "                            or the presence of smoke, triggering immediate alarms.\n" +
        "                            <br/><br/>" +
        "                            Designed for a range of environments, from corporate offices to industrial facilities, our\n" +
        "                            heat and smoke detection solutions provide real-time monitoring and rapid response, helping\n" +
        "                            to prevent fire-related incidents and reduce potential damage. Reliable and scalable, they\n" +
        "                            seamlessly integrate into your broader fire safety infrastructure.";
    const imageName = "Heat-&-Smoke-Detector.jpeg";
    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}