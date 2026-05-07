import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { Fancybox } from "@fancyapps/ui";

import ArtworksData, { getCategoryPictures } from "../Artworks/Artworks";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Card = ({ initialArtworkSlug }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("categories");
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [pictures, setPictures] = useState(getCategoryPictures());

  useEffect(() => {
    if (!initialArtworkSlug || mode !== "categories") {
      return;
    }

    const artwork = ArtworksData.find(
      (a) =>
        slugify(a.name) === initialArtworkSlug && a.subGalleries?.length > 0,
    );

    if (artwork) {
      setSelectedArtwork(artwork.name);

      const subGalleryFlattened = artwork.subGalleries.flatMap((g) =>
        g.collectionOfPics.map((pic) => ({
          ...pic,
          name: g.name,
          year: g.year,
          medium: g.medium,
          dimension: g.dimension,
          parentArtworkName: artwork.name,
        })),
      );

      setPictures(subGalleryFlattened);
      setMode("subgallery");
    }
  }, [initialArtworkSlug, mode]);

  useEffect(() => {
    // Bind to elements that are rendered as <a> tags (subgallery mode)
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, [pictures]);

  const handleClick = (item) => {
    // CASE 1: Has subgalleries (e.g., Thesis Exhibition) -> Drill down to new grid
    if (item.subGalleries?.length > 0) {
      navigate(`/${slugify(item.name)}`);
      setSelectedArtwork(item.name);

      const subGalleryFlattened = item.subGalleries.flatMap((g) =>
        g.collectionOfPics.map((pic) => ({
          ...pic,
          name: g.name,
          year: g.year,
          medium: g.medium,
          dimension: g.dimension,
          parentArtworkName: item.name,
        })),
      );

      setPictures(subGalleryFlattened);
      setMode("subgallery");
    }

    // CASE 2: Normal artwork (e.g., Serenity) -> Open Fancybox immediately with all images
    else {
      if (item.parentArtworkName) {
        return;
      }

      const fullArtwork = ArtworksData.find((a) => a.name === item.name);

      if (fullArtwork && fullArtwork.collectionOfPics) {
        // Map the collection to the format Fancybox.show() expects
        const galleryItems = fullArtwork.collectionOfPics.map((pic) => ({
          src: pic.original,
          thumb: pic.thumbnail,
          caption: `
            <h2 style="display:flex;justify-content:center;padding-top:25px;font-style:italic">
              ${fullArtwork.name}
            </h2>
            <h3 style="display:flex;justify-content:center;margin-top:20px">
              ${fullArtwork.year || ""}
            </h3>
            <h3 style="display:flex;justify-content:center;align-items:center;text-align:center">
              ${fullArtwork.medium || ""}
            </h3>
            <h3 style="display:flex;justify-content:center">
              ${fullArtwork.dimension || ""}
            </h3>
            ${
              fullArtwork.photographerDetails
                ? `<h3 style="display:flex;justify-content:center;">${fullArtwork.photographerDetails}</h3>`
                : ""
            }
          `,
        }));

        // Launch Fancybox manually with the array of images
        Fancybox.show(galleryItems, {
          infinite: true,
        });
      }
    }
  };

  const isImageMode = mode === "subgallery";

  return (
    <>
      {pictures.map((artwork) => (
        <MuiCard key={artwork.thumbnail} className={styles.card}>
          <CardActionArea
            // In categories mode, we stay as a div to handle the logic manually
            // In subgallery mode, we become an <a> for Fancybox auto-binding
            component={isImageMode ? "a" : "div"}
            onClick={() => handleClick(artwork)}
            {...(isImageMode && {
              href: artwork.original,
              "data-fancybox": artwork.name,
              "data-caption": `
                <h2 style="display:flex;justify-content:center;padding-top:25px;font-style:italic">
                  ${artwork.name}
                </h2>
                <h3 style="display:flex;justify-content:center;margin-top:20px">
                  ${artwork.year}
                </h3>
                <h3 style="display:flex;justify-content:center;align-items:center;text-align:center">
                  ${artwork.medium}
                </h3>
                <h3 style="display:flex;justify-content:center">
                  ${artwork.dimension}
                </h3> 
                ${
                  artwork.photographerDetails
                    ? `<h3 style="display:flex;justify-content:center;">${artwork.photographerDetails}</h3>`
                    : ""
                }
              `,
            })}
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
