import {InnerPageFrame} from "./inner-page-frame.jsx";

export function AccessControl() {
    const para = "Ensuring a secure and controlled environment is crucial in today's world, where the need for\n" +
        "                            managing access is more vital than ever. Our Access Control System offers advanced solutions\n" +
        "                            like biometric authentication, RFID card access, and centralized monitoring, designed to\n" +
        "                            safeguard premises and assets effectively.\n" +
        "                            <br/><br/>" +
        "                            With our solutions, you can regulate who enters your facility, providing peace of mind and\n" +
        "                            operational efficiency. Whether for corporate buildings, industrial sites, or high-security\n" +
        "                            areas, our systems ensure that only authorized personnel gain entry, helping you maintain\n" +
        "                            security and control seamlessly.";
    return (
        <InnerPageFrame title="Access Control" para={para} imageName="access-control.jpeg"/>
    );
}