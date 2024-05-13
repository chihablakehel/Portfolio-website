"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  site,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] sm:max-w[44rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20.5rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <a
            href={site}
            target="_blank"
            className="text-xs text-center text-gray-100 py-1 px-2 my-1 sm:my-2 bg-gray-400 w-fit rounded-full hover:scale-110 focus:scale-110 active:scale-105 transition-all"
          >
            Go Live
          </a>
          <ul className="flex flex-wrap mt-2 sm:mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
        group-even:-left-40 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-2
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-2
        group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
