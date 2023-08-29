import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="navigation-list">
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#news">News</a>
      </motion.li>

      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#about">About</a>
      </motion.li>

      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#music">Music</a>
      </motion.li>

      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#videos">Videos</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
