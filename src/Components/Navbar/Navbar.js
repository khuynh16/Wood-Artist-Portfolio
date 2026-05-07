import { Outlet, Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReusableLogo from "../../Components/Logo/Logo";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isNavExpanded ? "hidden" : "auto";
  }, [isNavExpanded]);

  useEffect(() => {
    if (isNavExpanded) {
      setIsNavExpanded(false);
    }
  }, [location.pathname]);

  return (
    <>
      <nav className={styles.nav}>
        <ReusableLogo />
        <div
          className={
            isNavExpanded
              ? styles.expanded
              : location.pathname === "/"
                ? styles.hiddenAnimationCSS + " " + styles.navLinksContainer
                : styles.navLinksContainer
          }
        >
          <Link to="/about">
            <button
              className={
                location.pathname === "/about" ? styles.activeRoute : ""
              }
            >
              About
            </button>
          </Link>
          <Link to="/gallery">
            <button
              className={
                location.pathname === "/gallery" ? styles.activeRoute : ""
              }
            >
              Gallery
            </button>
          </Link>
          <Link to="/exhibitions">
            <button
              className={
                location.pathname === "/exhibitions" ? styles.activeRoute : ""
              }
            >
              Exhibitions
            </button>
          </Link>
          <button
            className={styles.instagramIcon}
            onClick={() =>
              window.open("//www.instagram.com/1_ynn3.4rt.h/", "_blank")
            }
          >
            <InstagramIcon fontSize="large" />
          </button>
          <button
            className={styles.linkedinIcon}
            onClick={() =>
              window.open("//www.linkedin.com/in/lynnnguyenLP", "_blank")
            }
          >
            <LinkedInIcon fontSize="large" />
          </button>
        </div>
        <button
          className={
            location.pathname === "/"
              ? styles.hamburgerHomePageStyling +
                " " +
                styles.hiddenAnimationCSS
              : styles.hamburgerNonHomePageStyling
          }
          style={{
            backgroundColor: isNavExpanded ? "rgb(56 55 55)" : "white",
          }}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span
            className={styles.hamburgerLine}
            style={{
              background: isNavExpanded ? "white" : "black",
            }}
          ></span>
          <span
            className={styles.hamburgerLine}
            style={{
              background: isNavExpanded ? "white" : "black",
            }}
          ></span>
          <span
            className={styles.hamburgerLine}
            style={{
              background: isNavExpanded ? "white" : "black",
            }}
          ></span>
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
