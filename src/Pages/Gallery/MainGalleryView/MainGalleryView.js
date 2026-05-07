import ArtCard from "../../../Components/Card/Card";
import styles from "./MainGalleryView.module.css";

const MainGalleryView = ({ initialArtworkSlug }) => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <ArtCard initialArtworkSlug={initialArtworkSlug} />
        </div>
      </div>
    </>
  );
};

export default MainGalleryView;
