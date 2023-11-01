"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin ">
        {/* projects */}

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/WeedBate.png"
            alt="projects "
            className="w-[800px] h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <a href="https://weedbates.netlify.app/">
                <span className="underline decoration-[#f7ab0a]/50">
                  WeedBates
                </span>{" "}
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              Weedbates is a cutting-edge web platform that seamlessly
              integrates multiple technologies to provide an innovative solution
              for companies seeking efficient and personalized customer
              communication. Built using a powerful stack comprising React,
              Express, MongoDB, Bootstrap, and Node, Weedbates leverages the
              capabilities of the GennyLovo API, Telnyx API, and Stripe to
              create a dynamic and versatile communication system.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/FineIT.png"
            alt="projects "
            className="w-[800px] h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <a href="https://fineitlayout.netlify.app/">
                <span className="underline decoration-[#f7ab0a]/50">
                  FineIT
                </span>{" "}
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              FineIt is a sleek and modern website crafted to showcase the
              extensive range of services offered by the company. Developed with
              the powerful combination of React and TailwindCSS, FineIt combines
              cutting-edge technology and stunning design to create an engaging
              and informative platform.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/aiauto.png"
            alt="projects "
            className="w-[800px] h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <a href="https://ai.automateed.com">
                <span className="underline decoration-[#f7ab0a]/50">
                  Automateed
                </span>{" "}
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              Welcome to Automateed, your gateway to the world of AI-driven
              content generation. Automateed is a cutting-edge web application
              designed to empower users with the ability to effortlessly create
              a wide range of prompts, including images, videos, and social
              trends, all through the power of artificial intelligence. Whether
              you are a content creator, marketer, or simply someone looking to
              stay ahead in the digital landscape, Automateed has you covered.
              Our intuitive platform harnesses the capabilities of AI to
              streamline the prompt generation process, helping you save time
              and unleash your creative potential.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/pacitti.png"
            alt="projects "
            className="w-[800px] h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <a href="https://pacittijones.co.uk/">
                <span className="underline decoration-[#f7ab0a]/50">
                  Prop Genie
                </span>{" "}
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              Introducing Prop Genie, a powerful and versatile AI-based tool
              designed to transform the way websites showcase images. With Prop
              Genie, any website can harness the potential of artificial
              intelligence to reimagine and visualize images in unique and
              captivating ways. This innovative tool offers website owners and
              designers the ability to breathe new life into their visuals,
              making them more appealing, engaging, and memorable. Whether you
              are looking to enhance your product displays, create eye-catching
              banners, or give your website a fresh look, Prop Genie has you
              covered.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="/mealmagic.png"
            alt="projects "
            className="w-[800px] h-[500px]"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <a href="https://pacittijones.co.uk/">
                <span className="underline decoration-[#f7ab0a]/50">
                  Meal Magic
                </span>{" "}
              </a>
            </h4>
            <p className="text-lg text-center md:text-left">
              Meal Magic is your culinary companion in the digital age. It is
              not just an app; it is a kitchen wizard powered by artificial
              intelligence. Whether you are a seasoned home chef or a novice in
              the kitchen, Meal Magic is here to transform your cooking
              experience. This remarkable AI-based app takes the ingredients you
              have on hand and conjures up a world of cooking possibilities. No
              more staring blankly into your pantry or refrigerator – Meal Magic
              offers you a multitude of recipes and options tailored to your
              available ingredients.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
