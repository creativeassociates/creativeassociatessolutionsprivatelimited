import {InnerPageFrame} from "./inner-page-frame.jsx";

export function AVAndPASystem() {
    const para = "Creative Associates Solutions Private Limited offers comprehensive management services for Audio-Visual (AV) and Public Address (PA) systems, ensuring seamless communication and enhanced user experiences. Our expertise includes installation, maintenance, and optimization of AV systems for meeting rooms, conference halls, and public spaces, as well as PA systems for effective mass communication.\n" +
        "<br/><br/>\n" +
        "We ensure that your AV and PA systems are always operational, providing clear sound, video, and messaging for various events or daily operations. Our solutions are designed to meet the unique needs of corporate, industrial, and public facilities.";
    const title = "AV and PA System";
    const imageName = "AV-and-PA-System.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}