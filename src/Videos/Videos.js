import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Videos = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "Ease-in",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-10vw",
        opacity: 0,
      });
    }
    console.log("use effect hook, inView =", inView);
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <section id="videos" className="new-news">
          <h1>VIDEOS</h1>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/J25jno7ePmw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </motion.div>
    </div>
  );
};

export default Videos;
