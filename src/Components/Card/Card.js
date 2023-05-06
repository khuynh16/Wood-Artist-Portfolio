import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import justPictures from "../Artworks/Artworks";
import { useState } from "react";
import styles from "./Card.module.css";
import { Fancybox } from "@fancyapps/ui"; // while not used, needed to run the fancybox image carousel??

const Card = () => {
  const [selectedArtworkName, setSelectedArtworkName] = useState("");
  const justMainCategoryPictures = justPictures.filter(
    (picture) => picture.isCategoryPic === true
  );
  const [currentPicturesArray, setCurrentPicturesArray] = useState(
    justMainCategoryPictures
  );

  return (
    <>
      {currentPicturesArray.map((artwork) => (
        <MuiCard
          sx={{
            maxWidth: 345,
            display: artwork.isCategoryPic === false ? "none" : "",
          }}
          key={artwork.thumbnail}
          className={styles.card}
        >
          <CardActionArea
            onClick={() => {
              setSelectedArtworkName(artwork.name);
              // once clicked, exchanges the array of only main category pictures
              // with the array that has all pictures so Fancybox is able to load
              // all images in each gallery category picture carousel
              setCurrentPicturesArray(justPictures);
              // setTimeout(function () {
              //   const tes =
              //     document.getElementsByClassName("fancybox__slide")[0];
              //   // console.log(tes);

              //   const imge =
              //     document.getElementsByClassName("fancybox__image")[0];

              //   imge.style.cssText += "margin-left: 20vw";

              //   tes.style.cssText += "display:flex;flex-direction:row";
              // }, 500);
            }}
            data-fancybox={
              selectedArtworkName === artwork.name ? "gallery" : ""
            }
            href={artwork.original}
            data-caption={
              "<h2 style='display: flex; justify-content: center; padding-top: 25px; font-style: italic'>" +
              artwork.name +
              "<h2>" +
              "<h3 style='display: flex; justify-content: center; margin-top: 20px'>" +
              artwork.year +
              "<h3>" +
              "<h3 style='display: flex; justify-content: center; align-items: center; text-align: center'>" +
              artwork.medium +
              "<h3>" +
              "<h3 style='display: flex; justify-content: center;'>" +
              artwork.dimension +
              "<h3>"
            }
          >
            <CardMedia
              component="img"
              height="250"
              alt={artwork.name}
              src={artwork.thumbnail}
            />
            <CardContent className={styles.cardTextBody}>
              <Typography
                className={styles.cardText}
                variant="h5"
                component="div"
                align="center"
                fontFamily="Roboto, sans-serif"
                fontWeight="500"
              >
                {artwork.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </MuiCard>
      ))}
    </>
  );
};

export default Card;
