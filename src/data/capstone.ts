export const capstone = {
  title:
    "PLANTERAID: Web-Based Planter Aid Soil Moisture Monitoring and Recommendation System with Alert Notifications Using Microcontroller Devices",
  overview:
    "PlanterAid is a group Capstone project that combines a web dashboard with IoT sensor nodes to monitor soil moisture, temperature, and humidity across multiple planting zones. The system presents readings, recommendations, and alerts that support informed crop-care decisions.",
  problem:
    "Promised Land Farm relied heavily on manual observation and did not have a structured system for recording environmental readings or issuing timely alerts when crop conditions moved outside acceptable ranges.",
  objectives: [
    "Design, develop, and implement an IoT-integrated, web-based multi-zone system that monitors soil moisture, humidity, and temperature in real time.",
    "Integrate a dashboard that presents environmental readings, recommendations, and alert notifications for crop-stress and environmental concerns.",
    "Use GPS modules to associate monitoring data with individual farm zones for spatial tracking.",
  ],
  features: [
    "Real-time and historical dashboard views for soil moisture, temperature, and humidity",
    "Multi-zone sensor monitoring and node management",
    "Rule-based recommendations for crop-care conditions",
    "Alert notifications when readings exceed configured thresholds",
    "GPS-based spatial reference for sensor nodes",
    "Owner and farmhand access roles",
    "Monitoring-data filtering and PDF report export",
    "SMS notifications for critical conditions",
  ],
  software: [
    "C#",
    "Blazor .NET Core 8.0",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL Server",
    "SQL Server Management Studio",
    "Arduino IDE",
  ],
  hardware: [
    "ESP32 / Lolin32 microcontroller",
    "SHT31-DIS-B temperature and humidity sensor",
    "SEN0308 capacitive soil-moisture sensor",
    "NEO-M8N GPS module",
    "Portable power bank",
    "Pocket Wi-Fi for data transmission",
    "Weather-resistant prototype enclosure",
  ],
  methodology:
    "The project used Extreme Programming, an iterative Agile methodology centered on short development cycles, technical review, user feedback, and close collaboration with the farm beneficiary.",
  testing:
    "System validation covered sensor readings, hardware and software compatibility, wireless data transmission, dashboard behavior, GPS reference checks, continuous operation, and user acceptance. The available portfolio images document representative field and continuous-operation setups.",
  contribution:
    "This was a collaborative group project. My verified work included participation in research and field interviews, system and database work, testing, technical documentation, and preparation of Capstone figures and progress materials.",
  outcome:
    "The completed prototype demonstrated web-based multi-zone monitoring, visible environmental readings, recommendation and alert presentation, and communication between sensor hardware and the dashboard. It is a monitoring and decision-support system; it does not automatically irrigate crops.",
};

export const capstoneImages = [
  {
    src: "/assets/images/capstone/multi-zone-dashboard.png",
    alt: "PlanterAid multi-zone dashboard showing environmental graphs and farm status",
    caption: "Multi-zone monitoring dashboard",
    group: "GUI Screenshots",
  },
  {
    src: "/assets/images/capstone/dashboard-interface.png",
    alt: "PlanterAid dashboard interface used during front-end testing",
    caption: "Dashboard interface used during front-end testing",
    group: "GUI Screenshots",
  },
  {
    src: "/assets/images/capstone/notification-recommendation.png",
    alt: "PlanterAid notification log showing an alert and recommendation",
    caption: "Notification and recommendation interface",
    group: "GUI Screenshots",
  },
  {
    src: "/assets/images/capstone/prototype-enclosure.jpg",
    alt: "PlanterAid prototype sensor-node enclosure and mounting structure",
    caption: "Prototype sensor-node enclosure",
    group: "Hardware",
  },
  {
    src: "/assets/images/capstone/sensor-node-placement.jpg",
    alt: "PlanterAid sensor node positioned beside a pineapple plant",
    caption: "Sensor-node placement near a pineapple plant",
    group: "Hardware",
  },
  {
    src: "/assets/images/capstone/soil-moisture-sensor.jpg",
    alt: "Capacitive soil-moisture sensor inserted into soil beside a pineapple plant",
    caption: "Soil-moisture sensor placement",
    group: "Hardware",
  },
  {
    src: "/assets/images/capstone/farm-testing-area.jpg",
    alt: "Reference thermo-hygrometer used during PlanterAid farm testing",
    caption: "Farm testing and reference measurement",
    group: "Testing",
  },
  {
    src: "/assets/images/capstone/gps-reference.jpg",
    alt: "Google Maps coordinate reference used to validate the PlanterAid GPS module",
    caption: "GPS coordinate reference testing",
    group: "Testing",
  },
  {
    src: "/assets/images/capstone/continuous-operation-setup.jpg",
    alt: "PlanterAid serial readings compared with a reference temperature and humidity instrument",
    caption: "Sensor readings compared with a reference instrument",
    group: "Testing",
  },
];
