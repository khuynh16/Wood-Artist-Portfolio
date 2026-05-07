import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import MainGalleryView from "./MainGalleryView/MainGalleryView";

const Gallery = () => {
  const { gallerySlug } = useParams();

  return (
    <>
      <Navbar />
      <MainGalleryView initialArtworkSlug={gallerySlug} />
      {/* <Newsletter
        description="Get notified when I share new pieces and exhibitions."
        successMessage="In the meantime, feel free to keep looking around."
        showGalleryButton={false}
      /> */}
    </>
  );
};

export default Gallery;
