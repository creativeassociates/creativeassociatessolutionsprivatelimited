import React from "react";
import {Helmet} from "react-helmet";

export function Meta() {
    const metaContent = {
        title: "Comprehensive Facility Management & Security Solutions | Creative Associates Solutions Pvt. Ltd.",
        description: " Discover top-notch facility management, security, and automation solutions including CCTV surveillance, access control, fire detection, and biometric systems. Providing customized services to ensure safety, efficiency, and operational excellence for businesses across industries.",
        keywords: "Facility management solutions, Security and surveillance systems, Access control systems, CCTV surveillance, Fire detection systems, Biometric attendance systems, Intrusion detection systems, Perimeter protection, Automated parking management, Technical maintenance services, Industrial and corporate security solutions, Comprehensive fire fighting systems, Vehicle surveillance solutions"
    }

    return (<>
            <Helmet>
                <title>{metaContent.title}</title>
                <meta name="description" content={metaContent.description}/>
                <meta name="keywords" content={metaContent.keywords}/>
                <meta name="author" content="Rohan Kakkar"/>
            </Helmet>
        </>);
}