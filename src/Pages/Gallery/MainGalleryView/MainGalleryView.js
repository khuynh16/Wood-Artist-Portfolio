import ArtCard from "../../../Components/Card/Card";
import styles from "./MainGalleryView.module.css";

const MainGalleryView = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <ArtCard />
        </div>
      </div>
    </>
  );
};

export default MainGalleryView;
