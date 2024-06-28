document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      subject: "Single Variable Calculus",
      link: "https://www.youtube.com/watch?v=7K1sB05pE0A&list=PL590CCC2BC5AF3BC1",
    },
    {
      subject: "Linear Algebra",
      link: "https://www.youtube.com/watch?v=7UJ4CFRGd-U&list=PL221E2BBF13BECF6C",
    },
    {
      subject: "Probability",
      link: "https://www.youtube.com/watch?v=1uW3qMFA9Ho&list=PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6",
    },
    {
      subject: "Visual Concepts",
      link: "https://www.3blue1brown.com/#lessons",
    },
  ];

  const resources = [
    {
      topic: "Basic Mathematics (The Base)",
      link: "https://www.youtube.com/watch?v=WUmWcMDWYzE&list=PL2dPD7oDhSn9sWNfHbD8_VAs4as19rD6J&index=2",
    },
    {
      topic: "Sets, Relations & Functions",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn8ccydX5qV7SWHz4HwYiEKi",
    },
    {
      topic: "Complex Numbers",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn8YdI6ImeGBfbXDZMvsQ5YZ",
    },
    {
      topic: "Quadratic Equations",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn9ckRZr8_tTEiD16NgQxujr",
    },
    {
      topic: "Matrices & Determinants (Animated)",
      link: "https://www.youtube.com/watch?v=kjBOesZCoqc&list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B",
    },
    {
      topic: "Matrices",
      link: "https://www.youtube.com/playlist?list=PLoetsRqdeRZkU36562OqxRHSqAZIaumbU",
    },
    {
      topic: "Determinants",
      link: "https://www.youtube.com/watch?v=EBUE-UeNwu0&pp=ygUVZGV0ZXJtaW5hbnRzIGNsYXNzIDEy",
    },
    {
      topic: "Mathematical Induction",
      link: "https://www.youtube.com/watch?v=gZoJvwXnOfA&list=PLoetsRqdeRZmj23aWygMZjiq8pZ3lty99",
    },
    {
      topic: "Binomial Theorem & Its Simple Applications",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn94ONH81bb-Zkt7TYHOR-Vi",
    },
    {
      topic: "Sequences & Series",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn9G-UrS7bmMqFWa228_C3TS",
    },
    {
      topic: "Permutations & Combinations",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn9h3NIkfgKYUayvA4lNyLkY",
    },
    {
      topic: "Limits",
      link: "https://www.youtube.com/watch?v=p6c_cAIDvL8&list=PLoetsRqdeRZkHr5Y7j6Nhx1SGVT_1SqoO",
    },
    {
      topic: "Continuity & Differentiability",
      link: "https://www.youtube.com/playlist?list=PLoetsRqdeRZlkVo8sG_sQnI7-sVvUDhzK",
    },
    {
      topic: "Integral Calculus",
      link: "https://www.youtube.com/playlist?list=PL2dPD7oDhSn8yDzFk3f5bIY9jtyL1j9Vs",
    },
    {
      topic: "Differential Equations",
      link: "https://www.youtube.com/watch?v=WX_ZWo_O51I&list=PLoetsRqdeRZkHvCrGtIKgXlOWA36_GsZX",
    },
    {
      topic: "Circles",
      link: "https://www.youtube.com/watch?v=5VT7d1G12Bk&list=PLoetsRqdeRZnpv70TMV8NmyyohY1N_0Me",
    },
    {
      topic: "Conic sections",
      link: "https://www.youtube.com/watch?v=JAvdh6BFnEM&list=PLoetsRqdeRZltxh7357mGgcUfVRLpqpjM",
    },
    {
      topic: "Vector Algebra and Three Dimensional Geometry",
      link: "https://www.youtube.com/watch?v=47Ju4dkdFpk&list=PL2dPD7oDhSn8UVfCkHCIV710eQ1D9-IjV",
    },
    {
      topic: "Statistics",
      link: "https://www.youtube.com/watch?v=98PQc0i2K5c&list=PLoetsRqdeRZkc0qmm5PFYEhZthr9lZLCv",
    },
    {
      topic: "Probability",
      link: "https://www.youtube.com/watch?v=Iy9d3YAdpGw&list=PLoetsRqdeRZnRhF8Z5x62Zcl1rOWwkoq6",
    },
    {
      topic: "Trigonometry 1",
      link: "https://www.youtube.com/watch?v=vfc4FiizF1M&list=PL2dPD7oDhSn--VE2gHl0lNWDdh_AgMA9b",
    },
    {
      topic: "Trigonometry 2",
      link: "https://www.youtube.com/watch?v=tIzKaSoxeK0&list=PL2dPD7oDhSn_RuxShJx-WbwfKKdLGzjLr",
    },
    {
      topic: "Mathematical Reasoning",
      link: "https://www.youtube.com/watch?v=0cDINkrYy1E&pp=ygUkbWF0aHNtZXJpemluZyBtYXRoZW1hdGljYWwgcmVhc29uaW5n",
    },
  ];

  const courseTable = document.getElementById("courseTable");
  const resourceTable = document.getElementById("resourceTable");

  courses.forEach((course) => {
    const row = document.createElement("tr");
    const subjectCell = document.createElement("td");
    const linkCell = document.createElement("td");
    const link = document.createElement("a");

    subjectCell.textContent = course.subject;
    link.textContent = course.subject;
    link.href = course.link;
    link.textContent = "Course Link";
    link.target = "_blank";

    linkCell.appendChild(link);
    row.appendChild(subjectCell);
    row.appendChild(linkCell);
    courseTable.appendChild(row);
  });

  resources.forEach((resource) => {
    const row = document.createElement("tr");
    const topicCell = document.createElement("td");
    const linkCell = document.createElement("td");
    const link = document.createElement("a");

    topicCell.textContent = resource.topic;
    link.textContent = resource.topic;
    link.href = resource.link;
    link.textContent = "Resource Link";
    link.target = "_blank";

    linkCell.appendChild(link);
    row.appendChild(topicCell);
    row.appendChild(linkCell);
    resourceTable.appendChild(row);
  });
});
