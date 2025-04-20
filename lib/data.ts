import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "GCET",
    description:
      "I joined a bootcamp to learn full-stack development. I learned HTML, CSS, JavaScript, React, Node.js and Express.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Greater Noida",
    description:
      "I worked as a front-end developer for a startup. I was responsible for building the front-end of the web app using React and Next.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "India",
    description:
      "I worked as a full-stack developer for a startup. I was responsible for building the front-end and back-end of the web app using React, Next.js, Node.js and Express.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Talksic",
    description: "A real-time video chat application that allows users to connect and communicate seamlessly. Built with WebRTC for peer-to-peer video and audio streaming.",
    tags: ["React", "TypeScript", "WebRTC", "Node.js", "Socket.IO"],
    imageUrl: rmtdevImg,
  },
  {
    title: "E-commerce Store",
    description:
      "An e-commerce store built with Next.js and Tailwind CSS. It features a product catalog, shopping cart, and checkout process.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "We Build U - Agency",
    description:
      "A portfolio website for a web development agency. It showcases the agency's work and services.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
