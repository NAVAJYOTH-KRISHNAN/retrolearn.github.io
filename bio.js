// Data for the first table (Course Breakup)
const courses = [
  {
    subject: "FUNDAMENTAL BIOLOGY",
    link: "https://www.youtube.com/playlist?list=PLF83B8D8C87426E44",
  },
  {
    subject: "ADVANCED BIOLOGY",
    link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63LmSVIVzy584-ZbjbJ-Y63",
  },
];

// Data for the second table (Additional Resources)
const resources = [
  { resource: "The living world", link: "https://example.com" },
  { resource: "Biological classification", link: "https://example.com" },
  { resource: "Plant kingdom", link: "https://example.com" },
  { resource: "Animal kingdom", link: "https://example.com" },
  { resource: "Morphology of flowering plants", link: "https://example.com" },
  { resource: "Anatomy of flowering plants", link: "https://example.com" },
  {
    resource: "Structural organisation in animals",
    link: "https://example.com",
  },
  { resource: "Cell: the unit of life", link: "https://example.com" },
  { resource: "Biomolecules", link: "https://example.com" },
  { resource: "Cell cycle and cell division", link: "https://example.com" },
  { resource: "Photosynthesis in higher plants", link: "https://example.com" },
  { resource: "Respiration in plants", link: "https://example.com" },
  { resource: "Plant growth and development", link: "https://example.com" },
  { resource: "Breathing and exchange of gases", link: "https://example.com" },
  { resource: "Body fluids and circulation", link: "https://example.com" },
  {
    resource: "Excretory products and their elimination",
    link: "https://example.com",
  },
  { resource: "Locomotion and movement", link: "https://example.com" },
  { resource: "Neural control and coordination", link: "https://example.com" },
  {
    resource: "Chemical coordination and integration",
    link: "https://example.com",
  },
  {
    resource: "Sexual reproduction in flowering plant",
    link: "https://example.com",
  },
  { resource: "Human reproduction", link: "https://example.com" },
  { resource: "Reproductive health", link: "https://example.com" },
  {
    resource: "Principles of inheritance and variation",
    link: "https://example.com",
  },
  { resource: "Molecular basis of inheritance", link: "https://example.com" },
  { resource: "Evolution", link: "https://example.com" },
  { resource: "Human health and disease", link: "https://example.com" },
  { resource: "Microbes in human welfare", link: "https://example.com" },
  {
    resource: "Biotechnology: principles and processes",
    link: "https://example.com",
  },
  {
    resource: "Biotechnology and its application",
    link: "https://example.com",
  },
  { resource: "Organisms and populations", link: "https://example.com" },
  { resource: "Ecosystem", link: "https://example.com" },
  { resource: "Biodiversity and conservation", link: "https://example.com" },
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
