import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Music = () => {
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
      <section id="music" className="new-news">
        <div>
          <h1>MUSIC</h1>
        </div>
        <motion.div animate={animation} className="music-players">
          <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=1567242607/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://nansea.bandcamp.com/album/comfort">
              Comfort by Nansea
            </a>
          </iframe>

          <iframe
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/632012448&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Music;
