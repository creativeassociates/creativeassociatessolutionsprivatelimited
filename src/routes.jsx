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
import {HeatSmokeDetection} from "./pages/inner-pages/heat-&-smoke-detection.jsx";
import {
    MaintenanceOfPrecisionAirConditionersThermostatAHU
} from "./pages/inner-pages/maintenance-of-precision-air-conditioners-thermostat-AHU.jsx";
import {
    ProgrammableNonProgrammableFireAlarmSystem
} from "./pages/inner-pages/programmable-non-programmable-fire-alarm-system.jsx";
import {WaterSprinklers} from "./pages/inner-pages/water-sprinklers.jsx";
import {HydrantWetRiserSystems} from "./pages/inner-pages/hydrant-&-wet-riser-systems.jsx";
import {VRVVAV} from "./pages/inner-pages/VRV-VAV.jsx";
import {HSU} from "./pages/inner-pages/hsu.jsx";
import {BuildingManagementSystem} from "./pages/inner-pages/building-management-system.jsx";
import {AVAndPASystem} from "./pages/inner-pages/AV-and-PA-system.jsx";
import {VisitorManagementSystem} from "./pages/inner-pages/visitor-management-system.jsx";
import {TurnstilesFlapBarrierBoomBarrier} from "./pages/inner-pages/turnstiles-flapBarrier-boomBarrier.jsx";
import {CafeteriaManagement} from "./pages/inner-pages/cafeteria-management.jsx";
import {AutomatedParkingManagement} from "./pages/inner-pages/automated-parking-management.jsx";
import {BiometricAttendanceManagementSystems} from "./pages/inner-pages/biometric-attendance-management-systems.jsx";
import {VehicleManagementThroughGPRSSolutions} from "./pages/inner-pages/vehicle-management-through-GPRS-solutions.jsx";
import {FireExtinguishers} from "./pages/inner-pages/fire-extinguishers.jsx";
import {ElectronicSecuritySolutions} from "./pages/electronic-security-solutions.jsx";
import {FacilityManagement} from "./pages/facility-management.jsx";
import {TechnicalSolutions} from "./pages/technical-solutions.jsx";

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
        name: "Electronic Security",
        path: "/electronicSecurity",
        element: <ElectronicSecuritySolutions/>
    },
    {
        name: "Facility Management",
        path: "/facilityManagement",
        element: <FacilityManagement/>
    },
    {
        name: "Technical Solutions",
        path: "/technicalSolutions",
        element: <TechnicalSolutions/>
    },
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
    },
    {
        name: "Heat & Smoke Detection",
        path: "/heat&smokeDetection",
        element: <HeatSmokeDetection/>
    },
    {
        name: "Programmable/Non-programmable fire alarm system",
        path: "/programmable-Non-ProgrammableFireAlarmSystem",
        element: <ProgrammableNonProgrammableFireAlarmSystem/>
    },
    {
        name: "Fire Extinguishers",
        path: "/fireExtinguishers",
        element: <FireExtinguishers/>
    },
    {
        name: "Water Sprinklers",
        path: "/waterSprinklers",
        element: <WaterSprinklers/>
    },
    {
        name: "Hydrant & Wet riser systems",
        path: "/hydrant&WetRiserSystems",
        element: <HydrantWetRiserSystems/>
    },
    {
        name: "Maintenance of precision air conditioners/ Thermostat/AHU",
        path: "/maintenanceOfPrecisionAirConditioners-Thermostat&AHU",
        element: <MaintenanceOfPrecisionAirConditionersThermostatAHU/>
    },
    {name: "VRV / VAV", path: "/vrv-vav", element: <VRVVAV/>},
    {name: "HSU", path: "/hsu", element: <HSU/>},
    {name: "Building Management System", path: "/buildingManagementSystem", element: <BuildingManagementSystem/>},
    {name: "AV and PA System", path: "/av&PaSystem", element: <AVAndPASystem/>},
    {name: "Access Control System", path: "/accessControl", element: <AccessControl/>},
    {name: "Visitor Management System", path: "/visitorManagementSystem", element: <VisitorManagementSystem/>},
    {
        name: "Turnstiles / Flap Barrier / Boom Barrier",
        path: "/turnstiles-flapBarrier-boomBarrier",
        element: <TurnstilesFlapBarrierBoomBarrier/>
    },
    {name: "Cafeteria Management", path: "/cafeteriaManagement", element: <CafeteriaManagement/>},
    {
        name: "Biometric Attendance Management Systems",
        path: "/biometricAttendanceManagementSystems",
        element: <BiometricAttendanceManagementSystems/>
    },
    {name: "Automated Parking Management", path: "/automatedParkingManagement", element: <AutomatedParkingManagement/>},
    {
        name: "Vehicle Management through GPRS Solutions",
        path: "/vehicleManagementThroughGPRSSolutions",
        element: <VehicleManagementThroughGPRSSolutions/>
    }
];

export default routes;