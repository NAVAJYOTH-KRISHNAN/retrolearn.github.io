// Data for the first table (Course Breakup)
const courses = [
  {
    subject: "Mechanics",
    link: "https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e",
  },
  {
    subject: "Electromagnetism",
    link: "https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j",
  },
  {
    subject: "Optics and Waves",
    link: "https://www.youtube.com/playlist?list=PL0USrqsImzshuziGqzlltug0icIpfKfkN",
  },
  {
    subject: "Thermodynamics",
    link: "https://www.youtube.com/playlist?list=PLA62087102CC93765",
  },
  {
    subject: "Modern Physics",
    link: "https://www.youtube.com/playlist?list=PL9peWTxCcrBJpNWHjwUh7CXQVq1nC0FRH",
  },
];

// Data for the second table (Additional Resources)
const resources = [
  {
    resource: "PHYSICS AND MEASUREMENT 1",
    link: "https://www.youtube.com/watch?v=vD80LiNuxtI",
  },
  {
    resource: "PHYSICS AND MEASUREMENT 2",
    link: "https://www.youtube.com/watch?v=tCoiJVW2314",
  },
  {
    resource: "KINEMATICS",
    link: "https://www.youtube.com/playlist?list=PLZuY15zJc7FgjXHIsInd54FLfhB1jjqM9",
  },
  {
    resource: "LAWS OF MOTION",
    link: "https://www.youtube.com/playlist?list=PLZuY15zJc7Fi2eIkonylXF9QWp9S9L7jK",
  },
  {
    resource: "WORK, ENERGY, AND POWER",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMadTDfU4hJ23tdPqIwV-v6io",
  },
  {
    resource: "ROTATIONAL MOTION",
    link: "https://www.youtube.com/watch?v=0AsgYj5KZXE",
  },
  {
    resource: "GRAVITATION",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMaeGEjLX2pJU-qqnPcyjpBiV",
  },
  {
    resource: "PROPERTIES OF SOLIDS AND LIQUIDS 1",
    link: "https://www.youtube.com/watch?v=CmaVzzi7SVI",
  },
  {
    resource: "PROPERTIES OF SOLIDS AND LIQUIDS 2",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMacuWACFhY1HSZAfZlwml0X4",
  },
  {
    resource: "THERMODYNAMICS",
    link: "https://www.youtube.com/playlist?list=PLYVDsiuOZP5oiIFdST1_g0B9AQYC07xy9",
  },
  {
    resource: "KINETIC THEORY OF GASES",
    link: "https://www.youtube.com/watch?v=qvcEV4pZBQA&list=PLZuY15zJc7Fg1YbtLT6txCO5L__8PggZK&index=3",
  },
  {
    resource: "OSCILLATIONS",
    link: "https://www.youtube.com/watch?v=rGrNb1P9v9s",
  },
  { resource: "WAVES", link: "https://www.youtube.com/watch?v=Nf-eSbcUgHw" },
  {
    resource: "ELECTROSTATICS",
    link: "https://www.youtube.com/playlist?list=PLKa_ItsQ-6bvjMjF3nUSXT9ilXzAPVDRb",
  },
  {
    resource: "CURRENT ELECTRICITY",
    link: "https://www.youtube.com/watch?v=uE0wRNPMG5I&list=PLqkG39yUF_KgzcfQMWi-ajLSaAv2CfDbY&index=5",
  },
  {
    resource: "MAGNETIC EFFECTS OF CURRENT",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMacf--9QU-ep-YmRHc3e2_6v",
  },
  {
    resource: "MAGNETISM",
    link: "https://www.youtube.com/watch?v=2hwnmS4wA3Q",
  },
  {
    resource: "ELECTROMAGNETIC INDUCTION",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMadVthpkQ-MUWN5ldV_BO8op",
  },
  {
    resource: "ALTERNATING CURRENTS",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMafg7ZUZZpXS8mGSBP49fjl3",
  },
  {
    resource: "ELECTROMAGNETIC WAVES",
    link: "https://www.youtube.com/watch?v=v8wKo8spq7I",
  },
  {
    resource: "OPTICS",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMaeXk9ukLRM-SS-b3e18SMwj",
  },
  {
    resource: "MODERN PHYSICS",
    link: "https://www.youtube.com/watch?v=KJqzt5LQg9A&list=PLZuY15zJc7Fg1YbtLT6txCO5L__8PggZK",
  },
  {
    resource: "SEMICONDUCTORS",
    link: "https://www.youtube.com/playlist?list=PL_A4M5IAkMadpiaxmDasoChFugiq6K53N",
  },
];

// Function to populate the first table
function populateCoursesTable() {
  const tableBody = document.getElementById("recordedBatch");

  courses.forEach((course) => {
    const row = document.createElement("tr");

    const subjectCell = document.createElement("td");
    subjectCell.textContent = course.subject;
    row.appendChild(subjectCell);

    const linkCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = course.link;
    link.target = "_blank"; // Open link in a new tab
    link.textContent = "Course Link";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    tableBody.appendChild(row);
  });
}

// Function to populate the second table
function populateResourcesTable() {
  const tableBody = document.getElementById("additionalResources");

  resources.forEach((resource) => {
    const row = document.createElement("tr");

    const resourceCell = document.createElement("td");
    resourceCell.textContent = resource.resource;
    row.appendChild(resourceCell);

    const linkCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = resource.link;
    link.target = "_blank"; // Open link in a new tab
    link.textContent = "Resource Link";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    tableBody.appendChild(row);
  });
}

// Call the functions to populate both tables when the window loads
window.onload = function () {
  populateCoursesTable();
  populateResourcesTable();
};
