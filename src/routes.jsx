import {Home} from "./pages/home.jsx";
import {WhoWeAre} from "./pages/who-we-are.jsx";
import {WhatWeDo} from "./pages/what-we-do.jsx";
import {WorkingWithUsPleasure} from "./pages/working-with-us-pleasure.jsx";
import {AccessControl} from "./pages/inner-pages/access-control.jsx";
import {
    IntrusionDetectionPerimeterProtectionSystems
} from "./pages/inner-pages/intrustion-detection-&-premirmeter-protection-system.jsx";
import {VehicleSurveillanceSystem} from "./pages/inner-pages/vehicle-surveillance-system.jsx";
import {ExplosiveDetectors} from "./pages/inner-pages/explosive-detectors.jsx";
import {TimeAndAttendanceSystems} from "./pages/inner-pages/time-and-attendance-systems.jsx";
import {FireDetectionFireFightingSystem} from "./pages/inner-pages/fire-detection-&-fire-fighting-system.jsx";

export const navRoutes = [
    {
        name: "home",
        path: "/",
        element: <Home/>,
    },
    {
        name: "who we are",
        path: "/woWeAre",
        element: <WhoWeAre/>,
    },
    {
        name: "what we do",
        path: "/whatWeDo",
        element: <WhatWeDo/>,
    }


];

export const routes = [
    {
        name: "Working with us is a pleasure",
        path: "/workingWithUsIsPleasure",
        element: <WorkingWithUsPleasure/>,
    },

    {
        name: "Access Control",
        path: "/accessControl",
        element: <AccessControl/>,
    },

    {
        name: "Intrusion Detection & Perimeter Protection Systems",
        path: "/intrusionDetection&PerimeterProtectionSystems",
        element: <IntrusionDetectionPerimeterProtectionSystems/>
    },
    {
        name: "Vehicle Surveillance System",
        path: "/vehicleSurveillanceSystem",
        element: <VehicleSurveillanceSystem/>
    },
    {
        name: "Explosive Detectors",
        path: "/explosiveDetectors",
        element: <ExplosiveDetectors/>
    },
    {
        name: "Time And Attendance Systems",
        path: "/timeAndAttendanceSystems",
        element: <TimeAndAttendanceSystems/>
    },
    {
        name: "Fire Detection/ Fire Fighting System",
        path: "/fireDetection&FireFightingSystem",
        element: <FireDetectionFireFightingSystem/>
    }
];

export default routes;