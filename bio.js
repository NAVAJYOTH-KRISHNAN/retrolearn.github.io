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
  {
    subject: "VISUAL CONCEPTS",
    link: "https://www.youtube.com/@AmoebaSisters",
  },
];

// Data for the second table (Additional Resources)
const resources = [
  {
    resource: "The living world",
    link: "https://youtu.be/Yr1pAFlTXHA?si=8DBldLIIFSmUVmVY",
  },
  {
    resource: "Biological classification",
    link: "https://youtube.com/playlist?list=PLrHjxIp47OtWaIsq8M2613MH_DTPScM2I&si=DT7e2A14dha_1_W9",
  },
  {
    resource: "Plant kingdom",
    link: "https://www.youtube.com/watch?v=SiiaOjTJSkQ&list=PLrHjxIp47OtUh11KzcaUQ8rFRlh2kFunp",
  },
  {
    resource: "Animal kingdom",
    link: "https://www.youtube.com/watch?v=a4jsHSzaEv4&list=PLrHjxIp47OtVK2600ZrHYGYzpB6mOaty2",
  },
  {
    resource: "Morphology of flowering plants",
    link: "https://www.youtube.com/playlist?list=PLOxLJ3q2Q5YPMzS6As4-5i02erX1rpPqB",
  },
  {
    resource: "Anatomy of flowering plants",
    link: "https://www.youtube.com/playlist?list=PL2AGQm6bx5CByE7NsahX3B9DN-tWPY6vn",
  },
  {
    resource: "Structural organisation in animals",
    link: "https://www.youtube.com/playlist?list=PL2AGQm6bx5CC21P0HTZy-lgUxgsktX9EG",
  },
  {
    resource: "Cell: the unit of life",
    link: "https://www.youtube.com/playlist?list=PLsgHooHkqhhM_W2JIonGzSr_TuU3LOY1M",
  },
  {
    resource: "Biomolecules",
    link: "https://www.youtube.com/playlist?list=PLrHjxIp47OtXSX75otltdGgwI_bOlbAUu",
  },
  {
    resource: "Cell cycle and cell division",
    link: "https://www.youtube.com/watch?v=p3gwQAYSMnw&list=PLsgHooHkqhhMbUvz0HhRZwLrpa4--2M1F",
  },
  {
    resource: "Photosynthesis in higher plants",
    link: "https://www.youtube.com/watch?v=r7qNoCtGCzc&list=PL2AGQm6bx5CCP-FSbV6wZ5hOr76L7eMLO",
  },
  {
    resource: "Respiration in plants",
    link: "https://www.youtube.com/watch?v=NWdQ4GMcVLU&list=PLsgHooHkqhhMUX0WXj4KxBS9HoJrh1NZM",
  },
  {
    resource: "Plant growth and development",
    link: "https://www.youtube.com/watch?v=Bwea7MDCIo4&list=PLOxLJ3q2Q5YNP_UDUM3Bsi-WKEfbAtQA0",
  },
  {
    resource: "Breathing and exchange of gases",
    link: "https://www.youtube.com/watch?v=VWvfFVJR12w",
  },
  {
    resource: "Body fluids and circulation",
    link: "https://www.youtube.com/watch?v=kjXSit0s5Kc&list=PLrHjxIp47OtUMsBXn1kf6fQ0ZAT63KXEt&pp=iAQB",
  },
  {
    resource: "Excretory products and their elimination",
    link: "https://www.youtube.com/playlist?list=PLrHjxIp47OtXjJCejgeh_93vyN8_Lea38",
  },
  {
    resource: "Locomotion and movement",
    link: "https://www.youtube.com/playlist?list=PLrHjxIp47OtX3PFt1fQXhsC-Ms7-DqicC",
  },
  {
    resource: "Neural control and coordination",
    link: "https://www.youtube.com/watch?v=w7XMMgiavkk&pp=ygUhIk5ldXJhbCBjb250cm9sIGFuZCBjb29yZGluYXRpb24i",
  },
  {
    resource: "Chemical coordination and integration",
    link: "https://www.youtube.com/watch?v=gfjTBaMF8pY&pp=ygUlQ2hlbWljYWwgY29vcmRpbmF0aW9uIGFuZCBpbnRlZ3JhdGlvbg%3D%3D",
  },
  {
    resource: "Sexual reproduction in flowering plant",
    link: "https://www.youtube.com/watch?v=6UXGobXdZGA&pp=ygUmU2V4dWFsIHJlcHJvZHVjdGlvbiBpbiBmbG93ZXJpbmcgcGxhbnQ%3D",
  },
  {
    resource: "Human reproduction",
    link: "https://www.youtube.com/watch?v=6HJEH_9-dU8&list=PLsgHooHkqhhNzLZWpX60ubt5MSUSlqto2",
  },
  { resource: "Reproductive health", link: "https://example.com" },
  {
    resource: "Principles of inheritance and variation",
    link: "https://www.youtube.com/watch?v=CPj-2xVrRq0&list=PLsgHooHkqhhOPOBLGYQQ_E9QVj9bIeDL2",
  },
  {
    resource: "Molecular basis of inheritance",
    link: "https://www.youtube.com/watch?v=vFNrae6e2oA&list=PLrHjxIp47OtVVcnFhzAmlR3NXd6M0myZy&pp=iAQB",
  },
  {
    resource: "Evolution",
    link: "https://www.youtube.com/watch?v=RTX9si5RBb0&pp=ygUORXZvbHV0aW9uIG5lZVQ%3D",
  },
  {
    resource: "Human health and disease",
    link: "https://www.youtube.com/watch?v=L7Kdbvgltr8",
  },
  {
    resource: "Microbes in human welfare",
    link: "https://www.youtube.com/watch?v=VfAnkI8XxxM&pp=ygUjTWljcm9iZXMgaW4gaHVtYW4gd2VsZmFyZSBjbGFzcyAxMiA%3D",
  },
  {
    resource: "Biotechnology: principles and processes",
    link: "https://www.youtube.com/watch?v=p31XNP1jw54&list=PLrHjxIp47OtW6mLK_Nd4ytW91I6oFNYNm",
  },
  {
    resource: "Biotechnology and its application",
    link: "https://www.youtube.com/watch?v=WBBRJksbWAQ&list=PLrHjxIp47OtXGkYKaGbivfT7EFA2rSGG8",
  },
  {
    resource: "Organisms and populations",
    link: "https://www.youtube.com/watch?v=UJbOGUMa1xI&list=PLrHjxIp47OtWI1zhpjA7QCatlxyoInLPQ",
  },
  {
    resource: "Ecosystem",
    link: "https://www.youtube.com/watch?v=SyDUFv9ITPk&pp=ygUSZWNvc3lzdGVtIGNsYXNzIDEy",
  },
  {
    resource: "Biodiversity and conservation",
    link: "https://www.youtube.com/playlist?list=PLKlDmF-iIyAlR0RFTe7GMkRSWWF-0z4-5",
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
