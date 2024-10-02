export const services = [
    {
        img: "./img/electronic-security.webp",
        name: "Electronic Security",
        path: "/electronicSecurity",
        services: [
            {name: "Access Control System", path: "/accessControl"},
            {
                name: "Intrusion Detection & Perimeter Protection Systems",
                path: "/intrusionDetection&PerimeterProtectionSystems"
            },
            {name: "Vehicle Surveillance System", path: "/vehicleSurveillanceSystem"},
            {name: "Explosive Detectors", path: "/explosiveDetectors"},
            {name: "Time and Attendance Systems", path: "/timeAndAttendanceSystems"},
            {
                name: "Fire Detection/ Fire Fighting System",
                underContent: [
                    {name: "Heat/Smoke detection", path: "/heat&smokeDetection",},
                    {
                        name: "Programmable/Non-programmable fire alarm system",
                        path: "/programmable-Non-ProgrammableFireAlarmSystem",
                    },
                    {name: "Fire Extinguishers", path: "/fireExtinguishers",},
                    {name: "Water Sprinklers", path: "/waterSprinklers",},
                    {name: "Hydrant & Wet riser systems", path: "/hydrant&WetRiserSystems",}
                ],
                path: "/fireDetection&FireFightingSystem"
            },
        ],
    },
    {
        img: "./img/facility-management.webp",
        name: "Facility Management",
        path: "/facilityManagement",
        services: [
            {
                name: "Maintenance of precision air conditioners/ Thermostat/AHU",
                path: "/maintenanceOfPrecisionAirConditioners-Thermostat&AHU"
            },
            {name: "VRV / VAV", path: "/vrv-vav"},
            {name: "HSU", path: "/hsu"},
            {name: "Building Management System", path: "/buildingManagementSystem"},
            {name: "AV and PA System", path: "/av&PaSystem"},
            {name: "Access Control System", path: "/accessControl"},
            {name: "Visitor Management System", path: "/visitorManagementSystem"},
            {name: "Turnstiles / Flap Barrier / Boom Barrier", path: "/turnstiles-flapBarrier-boomBarrier"},
            {name: "Cafeteria Management", path: "/cafeteriaManagement"},

        ],
    },
    {
        img: "./img/technical-solutions.jpeg",
        name: "Technical Solutions",
        path: "/technicalSolutions",
        services: [
            {name: "Biometric Attendance Management Systems", path: "/biometricAttendanceManagementSystems"},
            {name: "Automated Parking Management", path: "/automatedParkingManagement"},
            {name: "Vehicle Management through GPRS Solutions", path: "/vehicleManagementThroughGPRSSolutions"}
        ],
    },
];
