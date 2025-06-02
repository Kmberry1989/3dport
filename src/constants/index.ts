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
    name: "React JS",
    icon: reactjs,
  },
  {
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
  },
];

const experiences: TExperience[] = [
  {
    title: "Social Media Management",
    companyName: "IUK Staff Council",
    icon: iuk, // Placeholder
    iconBg: "#383E56",
    date: "Fall 2024 - Present",
    points: [
      "Managing Facebook and Instagram platforms for the IUK Staff Council.",
      "Designing all promotional graphics for web and social media.",
      "Creating and managing a content calendar to drive engagement.",
      "Led the digital strategy for the first virtual silent auction, raising $822 for scholarships[cite: 93, 94].",
    ],
  },
  {
    title: "Workshop & Event Planner",
    companyName: "IUK CTLA",
    icon: iuk, // Placeholder
    iconBg: "#E6DEDD",
    date: "Fall 2022 - Fall 2023",
    points: [
      "Managed event registration, attendance tracking, and workshop certificate tracking. [cite: 95]",
      "Created content for web and email communications, and used SEO to improve online visibility. [cite: 15, 123, 124]",
      "Contributed to a more user-friendly online presence for CTLA resources. [cite: 150]",
      "Supported various faculty events, which led to new course creations and approvals. [cite: 95]",
    ],
  },
  {
    title: "Event Organizer",
    companyName: "LHS Class of 2009",
    icon: lhs, // Placeholder
    iconBg: "#383E56",
    date: "Fall 2024",
    points: [
      "Organized the 15-year class reunion, with 27 alumni and 13 guests attending. [cite: 90]",
      "Managed ticket sales, which brought in $950 for the venue. [cite: 91]",
      "The event was the first one held at the Vibrant Events Catering in Logansport, IN. [cite: 92]",
      "Developed digital graphics for invitations and social media promotion. [cite: 129]",
    ],
  },
  {
    title: "Bar Manager/Bartender",
    companyName: "Logansport State Theatre",
    icon: theatre, // Placeholder
    iconBg: "#E6DEDD",
    date: "Summer 2021 - Fall 2022",
    points: [
      "Managed inventory control for the bar. [cite: 88]",
      "Successfully sold many cases of beer before their expiration date, helping to organize goods as the theatre reopened after COVID. [cite: 89]",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Rochelle's work on our first virtual silent auction was outstanding. Her digital strategy and promotional graphics were key to us raising $822 for scholarships.",
    name: "IUK Staff Council Member",
    designation: "",
    company: "IUK Staff Council",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We were so proud to be the very first event held at our new venue, and it wouldn't have been possible without Rochelle's organization. The reunion was a huge success!",
    name: "LHS Class President",
    designation: "",
    company: "LHS Class of 2009",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The promotional materials Rochelle created for our advising events were fantastic. Her work helped us successfully enroll 70-80 new students at each event.",
    name: "Advising Team Lead",
    designation: "",
    company: "IUK Advising",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "IUKSC Silent Auction",
    description:
      "Designed and managed the online platform for the IUK Staff Council's silent auction, which raised $822 for staff scholarships and student support. [cite: 93, 94]",
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
      "Organized the 15-year class reunion, which was the first event held at the Vibrant Events Catering in Logansport, IN. The event was attended by 27 alumni and 13 guests, and ticket sales generated $950 for the venue. [cite: 90, 91, 92]",
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
      "Organized a winter essentials drive for Kokomo Urban Outreach, collecting 475 items. [cite: 93]",
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