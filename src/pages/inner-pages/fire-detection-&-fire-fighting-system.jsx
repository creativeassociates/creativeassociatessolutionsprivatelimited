import {InnerPageFrame} from "./inner-page-frame.jsx";

export function FireDetectionFireFightingSystem() {
    const para = "Our Fire Detection and Fire Fighting System provides an essential layer of protection for\n" +
        "                            your facility. Equipped with state-of-the-art smoke detectors, heat sensors, and\n" +
        "                            programmable alarm systems, it ensures early detection of potential fire hazards. In case of\n" +
        "                            emergencies, integrated fire suppression systems, including sprinklers and extinguishers,\n" +
        "                            activate swiftly to minimize damage and safeguard lives.\n" +
        "                            <br/><br/>\n" +
        "                            Designed for various environments such as offices, industrial sites, and public spaces, our\n" +
        "                            system delivers real-time monitoring, rapid response, and comprehensive fire safety\n" +
        "                            solutions to protect your property and people.";
    const title = "Fire Detection / Fire Fighting System";
    const imageName = "Fire-Detection-Fire-Fighting-System.png";

    return (
        <InnerPageFrame title={title} imageName={imageName} para={para}/>
    );
}
