import {InnerPageFrame} from "./inner-page-frame.jsx";

export function AutomatedParkingManagement() {
    const para = "Creative Associates Solutions Private Limited provides cutting-edge Automated Parking Management solutions to streamline vehicle flow and enhance parking efficiency. Our system leverages advanced technology, including sensors and GPRS integration, to automate vehicle entry, exit, and parking allocation.\n" +
        "<br/><br/>\n" +
        "Designed for commercial complexes, malls, and office buildings, our solutions reduce congestion, optimize space usage, and provide real-time monitoring of parking activities. With seamless integration into your facility's operations, we offer a hassle-free, secure, and efficient parking experience for both management and users.";
    const title = "Automated Parking Management";
    const imageName = "Automated-Parking-System.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}