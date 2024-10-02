import {InnerPageFrame} from "./inner-page-frame.jsx";

export function WaterSprinklers() {
    const para = "Creative Associates Solutions Private Limited offers state-of-the-art water sprinkler systems as part of our electronic security solutions. These systems are essential for fire protection, providing automatic and efficient fire suppression to safeguard your facility and assets.\n" +
        "<br/><br/>\n" +
        "Our water sprinkler solutions are designed to integrate seamlessly with existing fire detection systems, ensuring rapid response in the event of a fire. We focus on customized installations and regular maintenance, guaranteeing that your fire protection systems function optimally and comply with safety regulations. Trust us to enhance the safety and security of your environment with our reliable water sprinkler systems.";
    const title = "Water Sprinklers";
    const imageName = "Water-Sprinklers.jpeg";

    return (
        <InnerPageFrame para={para} title={title} imageName={imageName}/>
    );
}