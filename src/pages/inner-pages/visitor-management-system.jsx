import {InnerPageFrame} from "./inner-page-frame.jsx";

export function VisitorManagementSystem() {
    const para = "Creative Associates Solutions Private Limited provides a comprehensive Visitor Management System designed to enhance security and streamline the visitor check-in process. Our system enables organizations to efficiently track and manage visitor access, ensuring a secure environment for both staff and guests.\n" +
        "<br/><br/>\n" +
        "With features such as pre-registration, digital check-in, and real-time visitor tracking, our solution improves operational efficiency and enhances visitor experience. Our dedicated team ensures seamless implementation and ongoing support, allowing your organization to maintain a secure and welcoming atmosphere for all visitors.";
    const title = "Visitor Management System";
    const imageName = "Visitor-Management-System.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}