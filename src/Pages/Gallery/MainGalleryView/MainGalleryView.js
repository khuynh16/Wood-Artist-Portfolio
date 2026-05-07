import ArtCard from "../../../Components/Card/Card";
import styles from "./MainGalleryView.module.css";
import arrowLeft from "../../../Assets/Images/arrow-left.png";
import { useNavigate } from "react-router-dom";

const MainGalleryView = ({ initialArtworkSlug }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <ArtCard initialArtworkSlug={initialArtworkSlug} />
        </div>
        {initialArtworkSlug && (
          <button
            className={styles.backToGalleryButton}
            onClick={() => navigate("/gallery")}
          >
            <img
              className={styles.backArrow}
              src={arrowLeft}
              alt="Back arrow https://www.flaticon.com/free-icons/arrow-left created by deha21"
            ></img>
            Back to Main Gallery
          </button>
        )}
      </div>
    </>
  );
};

export default MainGalleryView;
