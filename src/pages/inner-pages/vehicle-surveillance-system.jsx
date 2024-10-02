import {InnerPageFrame} from "./inner-page-frame.jsx";

export function VehicleSurveillanceSystem() {
    const para = " Our Vehicle Surveillance System provides advanced monitoring and control solutions to\n" +
        "                            enhance the security of your premises. Equipped with cutting-edge technologies such as\n" +
        "                            license plate recognition, GPS tracking, and high-definition video monitoring, this system\n" +
        "                            ensures that every vehicle entering or leaving your facility is thoroughly tracked and\n" +
        "                            documented." +
        "                            <br/><br/>" +
        "                            Ideal for parking lots, corporate campuses, and high-security areas, the system helps\n" +
        "                            prevent unauthorized access, improves traffic flow, and enhances overall safety. With\n" +
        "                            real-time data and seamless integration into broader security networks, our Vehicle\n" +
        "                            Surveillance System delivers superior control and security for your facility.";
    const title = "Vehicle Surveillance System";
    const imageName = "Vehicle-Surveillance-System.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}
