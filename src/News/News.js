import React from "react";
import NewReleasePhoto from "../images/release1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const News = () => {
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
      <div className="main-page">
        <motion.div animate={animation} className="new-news">
          <section id="news">
            <h1 className="artist-name">Nansea</h1>
            <div className="releasePhoto">
              <img src={NewReleasePhoto} alt="new release teaser" />
            </div>

            <div>
              <h3>Upcoming Single Release 2023</h3>
              <div id="news-headline">
                <p>There will be a new single, yey!</p>
              </div>
              <div id="news-content">
                <p>
                  <i>
                    just coming down from an acid trip, new year just started,
                    just out of a baaaad relationship, staying with friends,
                    just before going to bed, looking in the mirror ... You
                    realise that when everyone's asleep, you're all alone. No
                    one to take care of you but yourself. The person in the
                    mirror goes: "You'd better be nice to me, because from now
                    on I'm all you've got."
                  </i>
                </p>

                <p>
                  <i>Kindness</i> is an art-pop anthem for reclaiming
                  self-respect and love, because times have been hard and the
                  world has been unkind, so the least you can do is be kind to
                  yourself, right?!
                  <br></br>
                  It is scheduled for release in late summer 2023. Catch the
                  release here, on all streaming platforms and social channels.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
