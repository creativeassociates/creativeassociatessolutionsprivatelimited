import {InnerPageFrame} from "./inner-page-frame.jsx";

export function ExplosiveDetectors() {
    const para = "Our Explosive Detectors offer cutting-edge technology to ensure the highest level of\n" +
        "                            security for sensitive environments. Designed to detect a wide range of explosive materials,\n" +
        "                            these systems provide fast, accurate identification, helping prevent potential threats\n" +
        "                            before they escalate." +
        "                            <br/><br/>" +
        "                            Ideal for airports, government buildings, and high-risk areas, our detectors offer reliable\n" +
        "                            performance with minimal false alarms. With advanced scanning capabilities and seamless\n" +
        "                            integration into your overall security infrastructure, our Explosive Detectors enhance\n" +
        "                            safety, providing peace of mind for personnel and visitors alike.";

    const title = "Explosive Detectors";
    const imageName = "Explosive-Detectors.jpeg";

    return (
        <InnerPageFrame title={title} imageName={imageName} para={para}/>
    );
}
