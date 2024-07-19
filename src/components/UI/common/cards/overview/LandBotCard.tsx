'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRightIcon } from "../../../SVGIcons";
import { itemVariants } from "./framer-animation";

const LandBotCard = ({ showButton = true }: { showButton?: boolean }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#141414] rounded-[32px]  border-2 border-[#FFFFFF1A] relative w-full overflow-hidden  p-8 flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="absolute inset-0 bg-[#141414] rounded-[32px] z-10"
        animate={{
          backgroundColor: hover
            ? "rgba(20, 20, 20, 0)"
            : "rgba(20, 20, 20, 0.7)",
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <div className="w-full flex items-start flex-col gap-10 relative z-10 h-full">
        <div className="w-full flex items-center justify-between relative z-10">
          <div className="flex flex-col">
            <span className="font-work-sans font-semibold text-[20px] leading-[30px] -tracking-wider text-[#FF532E]">
              /01
            </span>
            <h3 className="text-white font-work-sans font-medium text-[40px] leading-[44px] -tracking-wider">
              LandBot
            </h3>
          </div>
          {showButton ? (
            <motion.button
              className={`size-16 bg-[#1B1B1B] border-2 border-[#FFFFFF1A] relative flex items-center justify-center rounded-full shrink-0 overflow-hidden`}
              initial={{
                width: "40px",
                height: "40px",
                backgroundColor: "#1B1B1B",
              }}
              animate={
                hover
                  ? {
                      width: "150px",
                      height: "40px",
                      backgroundColor: "#FF532E",
                    }
                  : {
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#1B1B1B",
                    }
              }
              transition={{ duration: 0.5 }}
            >
              {hover ? (
                <>
                  <motion.span
                    initial={{ x: 50, opacity: 0 }}
                    animate={
                      hover ? { x: -10, opacity: 1 } : { x: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-white shrink-0"
                  >
                    Learn More
                  </motion.span>
                </>
              ) : null}
              <ArrowUpRightIcon className="absolute right-3" />
            </motion.button>
          ) : null}
        </div>
        <motion.div
          className="self-center"
          animate={{ scale: hover ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/assets/staking-insights/lb-forest.png"
            alt="Forest LB"
            className="relative z-[12]"
          />
        </motion.div>
      </div>
      <motion.img
        src="/assets/staking-insights/clouds.png"
        alt="Clouds"
        className="absolute bottom-0 left-0 w-full h-full"
        animate={{ scale: hover ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src="/assets/staking-insights/green-bottom-ellipse.png"
        alt=""
        className={`absolute bottom-0 left-0 w-full transition-opacity duration-300 ease-in-out ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

export default LandBotCard;
