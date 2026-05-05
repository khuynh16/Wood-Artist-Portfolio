import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import MainGalleryView from "./MainGalleryView/MainGalleryView";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <MainGalleryView />
      {/* <Newsletter
        description="Get notified when I share new pieces and exhibitions."
        successMessage="In the meantime, feel free to keep looking around."
        showGalleryButton={false}
      /> */}
    </>
  );
};

export default Gallery;
