import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const About = () => {
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
        <section id="about" className="new-news">
          <h1>ABOUT</h1>
          <p>
            Nansea (ˈnænsi) takes her name from a homophobic slur, reclaiming
            then submerging it in a cooling balm of polyphonic fractals, waves
            of synth crashing against 80’s-inspired drum machines, and the lull
            of a calm ocean on a moonlit night. Above it all floats the glide
            and glitter of the wonderous voice of Marek Polgesek (he/she/they),
            a voice both so settled and grasping, ecstatic and full, that it
            defies genre and gender boundaries—existing in a secret realm
            between Rosalia and Ravel. Polish-born, but raised in a small German
            town after their family relocated—a time also marked by the loss of
            her father—Nansea eventually found himself in Berlin, buffeted by
            swells of techno, operatic arias, and the internationalist artists
            of the queer and pop strata of the capital. Performances rippled out
            in wider concentric circles, from the bars and theatres of
            Kreuzkölln, to Berlin institutions like HKW, Berghain Kantine, and
            Torstrassen Festival. Collaborations with poets, musicians, and
            dancers flowed into work with the queer club collective GOLOSA, as
            well as with Colin Self and others on the 2021 Sheena McGrandles
            project Dawn. A lyrical focus on themes of community, the queer
            experience, and the dismantling of gender has manifested itself in a
            fluid and evolving style, shifting from 2019’s Comfort EP, recorded
            with a neo-baroque quintet, to their current work, undulating solo
            arrangements of synth and bass, opening up an untapped ocean of
            sound that pulses with an unchecked rhythm.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
