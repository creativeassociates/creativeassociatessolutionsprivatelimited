import {InnerPageFrame} from "./inner-page-frame.jsx";

export function TimeAndAttendanceSystems() {
    const para = "     Our Time & Attendance System streamlines workforce management with precision and ease.\n" +
        "                            Utilizing advanced biometric technology, RFID card readers, and facial recognition, it\n" +
        "                            ensures accurate tracking of employee attendance and work hours. This system helps eliminate\n" +
        "                            manual errors, prevents time theft, and improves overall operational efficiency.\n" +
        "                            <br/><br/>" +
        "                            Whether for corporate offices, industrial plants, or educational institutions, our Time &\n" +
        "                            Attendance System offers seamless integration with payroll and HR systems, providing a\n" +
        "                            comprehensive solution for managing your workforce while boosting productivity.\n";
    const title = "Time And Attendance Systems";
    const imageName = "Time-&-Attendance-System.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}
