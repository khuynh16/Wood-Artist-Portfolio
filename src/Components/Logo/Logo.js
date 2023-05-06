// original logo leaf design utilized to create lotus flower logo came from @Seda on Figma!
// source: https://www.figma.com/community/file/943843409604246251

import styles from "./Logo.module.css";
import { ReactComponent as Logo } from "../../Assets/Images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ReusableLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Logo
      className={
        location.pathname === "/"
          ? styles.logo + " " + styles.hideLogoOnHomePage
          : styles.logo
      }
      alt={"home"}
      onClick={() => navigate("/")}
    />
  );
};

export default ReusableLogo;
