import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import justPictures from "../Artworks/Artworks";
import { useEffect } from "react";
import styles from "./Card.module.css";
import { Fancybox } from "@fancyapps/ui";

const Card = () => {
  useEffect(() => {
    // Bind Fancybox once when the component mounts
    Fancybox.bind("[data-fancybox]", {
      // Hash: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>
      {justPictures.map((artwork, index) => {
        // Create a unique ID based on the artwork name
        // (e.g., "gallery-Serenity") so only same-named photos group together
        const galleryId = `gallery-${artwork.name.replace(/\s+/g, "-")}`;

        return (
          <MuiCard
            key={index}
            className={styles.card}
            sx={{
              maxWidth: 500,
              // Only the "Category" pictures are visible as cards on the page
              display: artwork.isCategoryPic ? "block" : "none",
              margin: "10px",
              display: artwork.isCategoryPic ? "inline-block" : "none",
            }}
          >
            <CardActionArea
              component="a"
              href={artwork.original}
              data-fancybox={galleryId}
              data-caption={
                "<h2 style='display: flex; justify-content: center; padding-top: 25px; font-style: italic'>" +
                artwork.name +
                "</h2>" +
                "<h3 style='display: flex; justify-content: center; margin-top: 20px'>" +
                artwork.year +
                "</h3>" +
                "<h3 style='display: flex; justify-content: center; align-items: center; text-align: center'>" +
                artwork.medium +
                "</h3>" +
                "<h3 style='display: flex; justify-content: center;'>" +
                artwork.dimension +
                "</h3>" +
                // This part checks if the photographer exists and adds the line if it does
                (artwork.photographerDetails
                  ? "<h3 style='display: flex; justify-content: center;'>" +
                    artwork.photographerDetails +
                    "</h3>"
                  : "")
              }
            >
              <CardMedia
                component="img"
                height="350"
                alt={artwork.name}
                src={artwork.thumbnail}
              />
              <CardContent className={styles.cardTextBody}>
                <Typography
                  className={styles.cardText}
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {artwork.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MuiCard>
        );
      })}
    </>
  );
};

export default Card;
