import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
<<<<<<< HEAD
  html,
  css,
  reactjs,
  git,
  figma,
  theatre,
  iuk,
  lhs,
  carrent,
  jobit,
  tripguide,
=======
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
<<<<<<< HEAD
    title: "Digital Content Creation",
    icon: creator,
  },
  {
    title: "Social Media Strategy",
    icon: mobile,
  },
  {
    title: "Event Promotion & Visuals",
    icon: web,
  },
  {
    title: "Website Content Management",
    icon: backend,
  },
=======
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
<<<<<<< HEAD
=======
    name: "TypeScript",
    icon: typescript,
  },
  {
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
    name: "React JS",
    icon: reactjs,
  },
  {
<<<<<<< HEAD
    name: "Adobe Express",
    icon: figma, // Placeholder icon
  },
  {
    name: "Canva",
    icon: figma, // Placeholder icon
  },
  {
    name: "Facebook Ads Manager",
    icon: figma, // Placeholder icon
  },
  {
    name: "Google Suite",
    icon: git, // Placeholder icon
  },
  {
    name: "Microsoft Office",
    icon: git, // Placeholder icon
  },
  {
    name: "Qualtrics",
    icon: figma, // Placeholder icon
=======
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
  },
];

const experiences: TExperience[] = [
  {
<<<<<<< HEAD
    title: "Social Media Management",
    companyName: "IUK Staff Council",
    icon: iuk, // Placeholder
    iconBg: "#383E56",
    date: "Fall 2024 - Present",
    points: [
      "Managing Facebook and Instagram platforms for the IUK Staff Council.",
      "Designing all promotional graphics for web and social media.",
      "Creating and managing a content calendar to drive engagement.",
      "Led the digital strategy for the first virtual silent auction, raising $822 for scholarships.",
    ],
  },
  {
    title: "Workshop & Event Planner",
    companyName: "IUK CTLA",
    icon: iuk, // Placeholder
    iconBg: "#E6DEDD",
    date: "Fall 2022 - Fall 2023",
    points: [
      "Managed event registration, attendance tracking, and workshop certificate tracking.",
      "Created content for web and email communications, and used SEO to improve online visibility.",
      "Contributed to a more user-friendly online presence for CTLA resources.",
      "Supported various faculty events, which led to new course creations and approvals.",
    ],
  },
  {
    title: "Event Organizer",
    companyName: "LHS Class of 2009",
    icon: lhs, // Placeholder
    iconBg: "#383E56",
    date: "Fall 2024",
    points: [
      "Organized the 15-year class reunion, with 27 alumni and 13 guests attending.",
      "Managed ticket sales, which brought in $950 for the venue.",
      "The event was the first one held at the Vibrant Events Catering in Logansport, IN.",
      "Developed digital graphics for invitations and social media promotion.",
    ],
  },
  {
    title: "Bar Manager/Bartender",
    companyName: "Logansport State Theatre",
    icon: theatre, // Placeholder
    iconBg: "#E6DEDD",
    date: "Summer 2021 - Fall 2022",
    points: [
      "Managed inventory control for the bar.",
      "Successfully sold many cases of beer before their expiration date, helping to organize goods as the theatre reopened after COVID.",
=======
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
<<<<<<< HEAD
      "Rochelle's work on our first virtual silent auction was outstanding. Her digital strategy and promotional graphics were key to us raising $822 for scholarships.",
    name: "IUK Staff Council Member",
    designation: "",
    company: "IUK Staff Council",
=======
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
<<<<<<< HEAD
      "We were so proud to be the very first event held at our new venue, and it wouldn't have been possible without Rochelle's organization. The reunion was a huge success!",
    name: "LHS Class President",
    designation: "",
    company: "LHS Class of 2009",
=======
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
<<<<<<< HEAD
      "The promotional materials Rochelle created for our advising events were fantastic. Her work helped us successfully enroll 70-80 new students at each event.",
    name: "Advising Team Lead",
    designation: "",
    company: "IUK Advising",
=======
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
<<<<<<< HEAD
    name: "IUKSC Silent Auction",
    description:
      "Designed and managed the online platform for the IUK Staff Council's silent auction, which raised $822 for staff scholarships and student support.  93, 94]",
    tags: [
      {
        name: "Google Script",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Social Media",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Placeholder
    sourceCodeLink: "https://github.com/", // Placeholder
  },
  {
    name: "LHS Class of 2009 Reunion",
    description:
      "Organized the 15-year class reunion, which was the first event held at the Vibrant Events Catering in Logansport, IN. The event was attended by 27 alumni and 13 guests, and ticket sales generated $950 for the venue.  90, 91, 92]",
    tags: [
      {
        name: "Jotform",
        color: "blue-text-gradient",
      },
      {
        name: "Google Suite",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Express",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Placeholder
    sourceCodeLink: "https://github.com/", // Placeholder
  },
  {
    name: "Pack the Police Car",
    description:
      "Organized a winter essentials drive for Kokomo Urban Outreach, collecting 475 items.  93]",
    tags: [
      {
        name: "Qualtrics",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Express",
        color: "green-text-gradient",
      },
    ],
    image: tripguide, // Placeholder
    sourceCodeLink: "https://github.com/", // Placeholder
  },
];

export { services, technologies, experiences, testimonials, projects };
=======
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
>>>>>>> 745b7734da4b170f4536a2866e42f34d5d021e41
