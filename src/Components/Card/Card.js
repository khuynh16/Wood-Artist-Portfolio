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

      // Create one card per subgallery instead of flattening all images
      const subGalleryCards = artwork.subGalleries.map((g) => ({
        name: g.name,
        nameReplacementInFancybox: g.nameReplacementInFancybox,
        year: g.year,
        medium: g.medium,
        dimension: g.dimension,
        hideMedium: g.hideMedium,
        hideDimension: g.hideDimension,
        thumbnail: g.collectionOfPics[0]?.thumbnail,
        original: g.collectionOfPics[0]?.original,
        collectionOfPics: g.collectionOfPics,
        parentArtworkName: artwork.name,
        isSubGalleryCard: true,
      }));

      setPictures(subGalleryCards);
      setMode("subgallery");
    }
  }, [initialArtworkSlug, mode]);

  useEffect(() => {
    if (initialArtworkSlug || mode === "categories") {
      return;
    }

    setSelectedArtwork(null);
    setPictures(getCategoryPictures());
    setMode("categories");
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

      // Create one card per subgallery instead of flattening all images
      const subGalleryCards = item.subGalleries.map((g) => ({
        name: g.name,
        nameReplacementInFancybox: g.nameReplacementInFancybox,
        year: g.year,
        medium: g.medium,
        dimension: g.dimension,
        hideMedium: g.hideMedium,
        hideDimension: g.hideDimension,
        thumbnail: g.collectionOfPics[0]?.thumbnail,
        original: g.collectionOfPics[0]?.original,
        collectionOfPics: g.collectionOfPics,
        parentArtworkName: item.name,
        isSubGalleryCard: true,
      }));

      setPictures(subGalleryCards);
      setMode("subgallery");
    }

    // CASE 1.5: Clicking a subgallery card -> Open Fancybox with all images from that subgallery
    else if (item.isSubGalleryCard) {
      const galleryItems = item.collectionOfPics.map((pic) => {
        const hideMedium = item.hideMedium === true || pic.hideMedium === true;
        const hideDimension =
          item.hideDimension === true || pic.hideDimension === true;
        const showMedium = !!item.medium && !hideMedium;
        const showDimension = !!item.dimension && !hideDimension;

        return {
          src: pic.original,
          thumb: pic.thumbnail,
          caption: `
            <h2 style="display:flex;justify-content:center;padding-top:25px;font-style:italic">
              ${pic.nameReplacementInFancybox || item.nameReplacementInFancybox || item.name}
            </h2>
            <h3 style="display:flex;justify-content:center;margin-top:20px">
              ${item.year || ""}
            </h3>
            ${showMedium ? `<h3 style="display:flex;justify-content:center;align-items:center;text-align:center">${item.medium}</h3>` : ""}
            ${showDimension ? `<h3 style="display:flex;justify-content:center">${item.dimension}</h3>` : ""}
            ${
              pic.photographerDetails
                ? `<h3 style="display:flex;justify-content:center;">${pic.photographerDetails}</h3>`
                : ""
            }
          `,
        };
      });

      Fancybox.show(galleryItems, {
        infinite: true,
      });
    }

    // CASE 2: Normal artwork (e.g., Serenity) -> Open Fancybox immediately with all images
    else {
      if (item.parentArtworkName) {
        return;
      }

      const fullArtwork = ArtworksData.find((a) => a.name === item.name);

      if (fullArtwork && fullArtwork.collectionOfPics) {
        const galleryItems = fullArtwork.collectionOfPics.map((pic) => {
          const hideMedium =
            fullArtwork.hideMedium === true || pic.hideMedium === true;
          const hideDimension =
            fullArtwork.hideDimension === true || pic.hideDimension === true;
          const showMedium = !!fullArtwork.medium && !hideMedium;
          const showDimension = !!fullArtwork.dimension && !hideDimension;

          return {
            src: pic.original,
            thumb: pic.thumbnail,
            caption: `
              <h2 style="display:flex;justify-content:center;padding-top:25px;font-style:italic">
                ${pic.nameReplacementInFancybox || fullArtwork.name}
              </h2>
              <h3 style="display:flex;justify-content:center;margin-top:20px">
                ${fullArtwork.year || ""}
              </h3>
              ${showMedium ? `<h3 style="display:flex;justify-content:center;align-items:center;text-align:center">${fullArtwork.medium}</h3>` : ""}
              ${showDimension ? `<h3 style="display:flex;justify-content:center">${fullArtwork.dimension}</h3>` : ""}
              ${
                fullArtwork.photographerDetails
                  ? `<h3 style="display:flex;justify-content:center;">${fullArtwork.photographerDetails}</h3>`
                  : ""
              }
            `,
          };
        });

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
            // Always use div and handleClick for subgallery cards
            // Regular category cards also use div with handleClick
            component="div"
            onClick={() => handleClick(artwork)}
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
