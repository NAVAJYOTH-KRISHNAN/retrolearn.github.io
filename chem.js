document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      subject: "Organic Core 1",
      link: "https://ocw.uci.edu/courses/chem_51a_organic_chemistry.html",
    },
    {
      subject: "Organic Core 2",
      link: "https://ocw.uci.edu/courses/chem_51b_organic_chemistry.html",
    },
    {
      subject: "Organic Core 3",
      link: "https://ocw.uci.edu/courses/chem_51c_organic_chemistry.html",
    },
    {
      subject: "Advanced Organic",
      link: "https://ocw.uci.edu/courses/chem_125_advanced_organic_chemistry.html",
    },
    {
      subject: "Inorganic Core",
      link: "https://ocw.uci.edu/courses/chem_107_inorganic_chemistry.html",
    },
    {
      subject: "Physical Core",
      link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63LOmB3_O0xbgZVZibxj4rb",
    },
  ];

  const resources = [
    {
      topic: "Some Basic Concepts in Chemistry",
      link: "https://www.youtube.com/watch?v=EYma-QE9y4g&list=PL_A4M5IAkMaccW6F0AgKT-mmrlAQksYCu",
    },
    {
      topic: "States of Matter",
      link: "https://www.youtube.com/playlist?list=PLbu_fGT0MPsvK8_fiSxbEvT8fP-PCxH3F",
    },
    {
      topic: "Atomic Structure",
      link: "https://www.youtube.com/watch?v=Eto_2_VKJRI&list=PL_A4M5IAkMafCoVdcacbzrXlRy76fOTwJ",
    },
    {
      topic: "Chemical Bonding & Molecular Structure",
      link: "https://www.youtube.com/watch?v=GjXiTpuT9Tw&list=PL_A4M5IAkMae9ET3gaJB3jMt6DNT5h4Bo",
    },
    {
      topic: "Chemical Thermodynamics",
      link: "https://www.youtube.com/watch?v=V2A5Gf0Fw-Y&list=PL_A4M5IAkMaeRvDnG59F_78rB1xnVGll9",
    },
    {
      topic: "Solutions",
      link: "https://www.youtube.com/watch?v=kjN9SjMThe4&list=PLbu_fGT0MPsvUw7BWkS0MUdq2YU-fSf4w",
    },
    {
      topic: "Equilibrium",
      link: "https://www.youtube.com/watch?v=tshMLCW6Izw&list=PLbu_fGT0MPsvCCfC-XcZYIcNexaBGFSdi",
    },
    {
      topic: "Redox Reactions",
      link: "https://www.youtube.com/watch?v=2bI4Ktd4SOM&list=PL_A4M5IAkMacYFXvzpLSoIlg0E0VZS0SJ",
    },
    {
      topic: "Electrochemistry",
      link: "https://www.youtube.com/watch?v=j7PYqR1iGMg&list=PLF_7kfnwLFCF_VxKKAhHSLryCsJr3GW71",
    },
    {
      topic: "Chemical Kinetics",
      link: "https://www.youtube.com/watch?v=Ez2EaGNt-u8&list=PLF_7kfnwLFCHlh8wdeQ_ZZ96DhBDjqGMZ",
    },
    {
      topic: "Surface Chemistry",
      link: "https://www.youtube.com/watch?v=ZTda589Stq0&list=PLbu_fGT0MPsub8JlqWt0qkUBP_aDgt-FQ",
    },
    {
      topic: "Classification of Elements & Periodicity in Properties",
      link: "https://www.youtube.com/watch?v=TOXF8LXEFJw&list=PLF_7kfnwLFCFW27SD2cKamlTUde0OurJS",
    },
    {
      topic: "General Principles & Processes of Isolation of Elements",
      link: "https://www.youtube.com/watch?v=AwsHSlRdy1c&list=PLbu_fGT0MPstSt216vfQDsUKnYkD-6Pyy",
    },
    {
      topic: "Hydrogen",
      link: "https://www.youtube.com/watch?v=vS09iu7r550&list=PLF_7kfnwLFCEp3mJpBOvxh1cuDa2B85Ko",
    },
    {
      topic: "s-Block Elements (Alkali & Alkaline Earth Metals)",
      link: "https://www.youtube.com/watch?v=30HJ13x-ikA&list=PL_A4M5IAkMadIk5zPjnR2XgZi2n_7_Qwo",
    },
    {
      topic: "p-Block Elements",
      link: "https://www.youtube.com/watch?v=QcPXo2j0GAw&list=PLzSTglXGeoUsrdRMWxF9uh_5xxzdyVRKf",
    },
    {
      topic: "d- & f-Block Elements",
      link: "https://www.youtube.com/watch?v=l7AMUPeERJE&list=PL_A4M5IAkMacxIWVbn6uUj1kTpdYo9nOa",
    },
    {
      topic: "Coordination Compounds",
      link: "https://www.youtube.com/watch?v=toVqLHQ4t0w&list=PL_A4M5IAkMac47LLQFY_RA4IHR4CUJl5I",
    },
    {
      topic: "Environmental Chemistry",
      link: "https://www.youtube.com/watch?v=xOaYbVC_i4c&pp=ygUkZW52aXJvbm1lbnRhbCBjaGVtaXN0cnkgY2xhc3MgMTEgSkVF",
    },
    {
      topic: "Purification & Characterisation of Organic Compounds",
      link: "https://www.youtube.com/watch?v=V3xafeA09ao&pp=ygU4UHVyaWZpY2F0aW9uICYgQ2hhcmFjdGVyaXNhdGlvbiBvZiBPcmdhbmljIENvbXBvdW5kcyBKRUU%3D",
    },
    {
      topic: "Some Basic Principles of Organic Chemistry 1",
      link: "https://www.youtube.com/watch?v=nP0gDV0xDLY&pp=ygUvU29tZSBCYXNpYyBQcmluY2lwbGVzIG9mIE9yZ2FuaWMgQ2hlbWlzdHJ5IE1LQSA%3D",
    },
    {
      topic: "Some Basic Principles of Organic Chemistry 2",
      link: "https://www.youtube.com/watch?v=JgYlogdtJDo&list=PL2ub1_oKCn7qaG0YwhtOSPFmuBHQjKwAt",
    },
    {
      topic: "Hydrocarbons",
      link: "https://www.youtube.com/watch?v=nDV5yWfHKko&list=PL2ub1_oKCn7qt3lUQw-9jW6CC7CvxVjxu",
    },
    {
      topic: "Organic Compounds Containing Halogens",
      link: "https://youtube.com/playlist?list=PLTNDfsg9vIVdJReYs1wU1olHNdgDV_n_4&si=A39I0WxBC3JO7tXh",
    },
    {
      topic: "Organic Compounds Containing Oxygen",
      link: "https://www.youtube.com/watch?v=gKp1aM42VvI&list=PLF_7kfnwLFCHUtZnRiUbHrS5WSV0BsvSg",
    },
    {
      topic: "Organic Compounds Containing Nitrogen",
      link: "https://www.youtube.com/watch?v=SNoWfjyuwx8&list=PLbu_fGT0MPsvrWJD4Bz6fPIdqneiEyWIZ",
    },
    {
      topic: "Polymers",
      link: "https://www.youtube.com/watch?v=uPxf-2kxHA8&list=PL7rZUH8srnuOq2oPWsxjVsH5OYEwonrM5",
    },
    {
      topic: "Biomolecules",
      link: "https://www.youtube.com/watch?v=Iw3CIYVKLWw&list=PL_A4M5IAkMae9BWZoNV9PZSGhv7uSIgvH",
    },
    {
      topic: "Chemistry in Everyday Life",
      link: "https://www.youtube.com/watch?v=jkToIconpG0&pp=ygUeQ2hlbWlzdHJ5IGluIEV2ZXJ5ZGF5IExpZmUgSkVF",
    },
    {
      topic: "Principles Related to Practical Chemistry",
      link: "https://www.youtube.com/watch?v=okCmFv1-iwk&pp=ygUtUHJpbmNpcGxlcyBSZWxhdGVkIHRvIFByYWN0aWNhbCBDaGVtaXN0cnkgSkVF",
    },
  ];

  const courseTable = document.getElementById("courseTable");
  const resourceTable = document.getElementById("resourceTable");

  courses.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${course.subject}</td><td><a href="${course.link}" target="_blank">Course Link</a></td>`;
    courseTable.appendChild(row);
  });

  resources.forEach((resource) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${resource.topic}</td><td><a href="${resource.link}" target="_blank">Resource Link</a></td>`;
    resourceTable.appendChild(row);
  });
});

