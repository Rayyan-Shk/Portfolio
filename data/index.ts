import { link } from "fs";
import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning advanced backend development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stream - Video Conferencing App",
    des: "The Stream app is a Zoom-like video conferencing platform that enables secure real-time meetings, screen sharing, and collaboration.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://stream-meeting.vercel.app",
  },
  {
    id: 2,
    title: "Paytm - Money transfer app ",
    des: "Full-stack secure wallet and P2P money transfer app",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Rayyan-Shk/Paytm-Clone",
  },
  {
    id: 3,
    title: "Meduim - Blogging Website",
    des: "Full-featured blog website enabling users to create, publish, and read blog posts.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Rayyan-Shk/medium-clone",
  },
  {
    id: 4,
    title: "Advanced Data Table",
    des: "Advanced filtering, intelligent search capabilities, fuzzy search, range filtering and data grouping ",
    img: "/Table.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://reuniondata-table.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "My upcoming goals involve strengthening my expertise as a Full-Stack Developer with DevOps practices. With more experience, I aim to transition into Blockchain development and contribute to building decentralized solutions.",
    name: "Rayyan Shaikh",
    title: "Full Stack developer",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Service Desk Engineer at Reliance",
    desc: "Resolved backend issues for supermarket software including SAP, POS, and LS Express.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance Experience",
    desc: "I work as a freelance Full-Stack Developer, delivering scalable web applications and API.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Rayyan-Shk",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/RayyanDevTweets",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/rayyan-shaikh-b026a52b1/",
  },
];
