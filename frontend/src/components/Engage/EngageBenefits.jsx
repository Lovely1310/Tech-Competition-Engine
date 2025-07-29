import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const EngageBenefits = () => {
  return (
    <>
      {/* Section 1 — Engage AI */}
      <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
              AI makes it <span className="underline decoration-wavy decoration-cyan-400">easy</span>
            </h2>

            <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
              <span className="font-semibold text-gray-900">Engage</span> helps you craft a fully customized event experience, aligned with your goals and brand. It's so intuitive, <span className="text-cyan-600 font-medium">your whole team</span> can jump in with ease.
            </p>

            <motion.ul
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-base md:text-lg font-medium"
            >
              {[
                "Simply respond to a few smart prompts.",
                "Share your theme, audience, and objectives.",
                "Get outputs that align with your brand’s voice.",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariant}
                  className="relative pl-6 text-gray-800"
                >
                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-500 rounded-full"></span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677ef5d7e3eea3401abd66b8_screenshot_engageevent-1000.webp"
              alt="Engage AI Screenshot"
              className="rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-cyan-200"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Developer Challenges */}
      <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute -top-16 -right-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image Left */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center order-2 md:order-1"
          >
            <img
              src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/677ef5d7e5a865ee72aeb51c_screenshot_challengeide-1000.webp"
              alt="Developer Challenge Screenshot"
              className="rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-cyan-200"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
              Show devs what you’re made of
            </h2>

            <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
              Developers want a close look at your tech. Let them explore your brand through real-world problems that mirror your product’s value.
            </p>

            <motion.ul
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-base md:text-lg font-medium"
            >
              {[
                "Tap into real engineering problems that reflect your work.",
                "Empower devs to solve them using tools they already love.",
                "Create an experience that speaks their language.",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariant}
                  className="relative pl-6 text-gray-800"
                >
                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-500 rounded-full"></span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>


      {/* Section 3 — Developer Relationships */}
<section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
    {/* Text Left */}
    <motion.div
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6 leading-tight">
       Grow Meaningful Developer Connections
      </h2>
      <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
        Use <span className="font-semibold text-gray-900">Engage</span> to deliver a rewarding experience to a larger audience of developers.
      </p>
      <motion.ul
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4 text-base md:text-lg font-medium"
      >
        {[
          "Tap into a vibrant global network of passionate developers.",
          "Build long-term, authentic relationships with top tech talent.",
          "Strengthen your hiring pipeline with engaged and qualified candidates.",
        ].map((point, index) => (
          <motion.li
            key={index}
            variants={listItemVariant}
            className="relative pl-6 text-gray-800"
          >
            <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></span>
            <span className="absolute left-0 top-1.5 w-3 h-3 bg-cyan-500 rounded-full"></span>
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>

    {/* Image Right */}
    <motion.div
      variants={imageVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <img
        src= "https://cdn.prod.website-files.com/6344c9cef89d6f3350a388e4/638933f6059eeb81e3b47d72_hero_avatars.webp"
        alt="Developer Community Faces"
        className="rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-cyan-200"
      />
    </motion.div>
  </div>
</section>

    </>
  );
};

export default EngageBenefits;
