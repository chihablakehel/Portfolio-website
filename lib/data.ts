import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import eventoImg from "@/public/eventoEvent.png";
import petsoftImg from "@/public/petSoft.png";

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
    location: "Remotely ,Bytegrad.com",
    description:
      "I graduated after 6 months of studying as a full stack NextJs developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Web Developement learning",
    location: "Remotely , Coursera",
    description:
      "I toke front-end developement courses from Meta Staff on Coursera such as HTML ,CSS ,JS ,React.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Word Analytics",
    description:
      "A web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "JS", "CSS"],
    imageUrl: wordanalyticsImg,
    site: "https://word-analytics-chihablak.netlify.app",
  },
  {
    title: "CorpComment",
    description: "A web app where Users can give public feedback to companies.",
    tags: ["React", "Context API", "TypeScript", "CSS"],
    imageUrl: corpcommentImg,
    site: "https://corpcomment-chihablak.netlify.app",
  },
  {
    title: "RmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "React-Query", "Zustand"],
    imageUrl: rmtdevImg,
    site: "https://rmtdev-chihablak.netlify.app",
  },
  {
    title: "Evento",
    description:
      "Events board for the next events near you. It has features like routing, server side sorting and pagination.",
    tags: ["NextJs", "TypeScript", "prisma", "tailwind", "Framer"],
    imageUrl: eventoImg,
    site: "https://evento-chihablak.vercel.app/",
  },
  {
    title: "PetSoft",
    description:
      "Full stack Service as a Business app. Use PetSoft to easily keep track of pets under your care",
    tags: ["NextJs", "TypeScript", "prisma", "tailwind", "next-Auth", "Stripe"],
    imageUrl: petsoftImg,
    site: "https://petsoft-chihablak.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Zustand",
  "Node.js",
  "Express",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Framer Motion",
  "Git",
] as const;
