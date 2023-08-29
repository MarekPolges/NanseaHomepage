import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <RxHamburgerMenu
      className={classes.Hamburger}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  const closedIcon = (
    <GrClose
      className={classes.Hamburger}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closedIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
