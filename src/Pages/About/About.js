import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import styles from "./About.module.css";
import { useState } from "react";
import about_pic from "../../Assets/Images/About.jpg";
import about_with_signature_pic from "../../Assets/Images/About-with-signature.jpg";

const About = () => {
  const [open, setOpen] = useState({
    artist: false,
    bio: false,
    exhibitions: false,
    exhibitionYear2026: false,
    exhibitionYear2025: false,
    exhibitionYear2024: false,
    exhibitionYear2023: false,
    exhibitionYear2022: false,
    exhibitionYear2021: false,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggle = (section) => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <>
      <Navbar />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.mainContent}>
            <p className={`${styles.bannerText} ${styles.mobileText}`}>
              The Story and Journey.
            </p>
            <img
              src={about_with_signature_pic}
              alt="example"
              className={styles.image}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              style={{
                filter: imageLoaded ? "none" : "blur(5px)",
                transition: "filter 300ms ease-out",
                backgroundColor: "#f5f5f5",
              }}
            />
            <p className={`${styles.bannerText} ${styles.desktopText}`}>
              The Story and Journey.
            </p>
            <h1>
              <span className={styles.h1TagStyling}>
                &nbsp;Artist Statement:
              </span>
            </h1>
            <p className={styles.artistStatement}>
              My work focuses on transforming ordinary, overlooked materials
              into whimsical, visually captivating sculptures. Using wood as my
              main medium, I often incorporate scraps, found, and repurposed
              items such as sushi bamboo mats, chopsticks, nut shells, and
              seashells—objects linked to everyday life, memory, and place. I
              combine these with man-made materials like resin, invisible
              threads, and colorful acrylic panels to create intricate
              mixed-media pieces that explore repetition, pattern, and balance.
              <br></br>
              <br></br>
              Growing up in a modest household, I learned to appreciate the
              natural world and the potential beauty in things often discarded.
              This respect for materials guides my practice; I treat each object
              with care, giving it new life through a patient handcrafting
              process. My sculptures take time to craft, and in that slow,
              meditative process, I find a peaceful state of being. For me, art
              is not just a product—it’s a space where I feel most alive,
              connected, and whole.
              <br></br>
              <br></br>
              While my work might seem playful or abstract, each piece is
              layered with personal history, literary or cultural references,
              and reflections on human experience. I don’t aim to explain
              everything I create—some aspects remain personal and beyond
              words—but I invite viewers to engage with the materiality and
              presence of the artwork, finding their own meaning in the forms.
              What sets my work apart is the balance between fine craftsmanship
              and simple, everyday materials, and the quiet emotional resonance
              that comes from this combination. My practice reflects resilience,
              imagination, and a deep desire to celebrate the beauty in things
              that are often unnoticed.
            </p>
            <h1>
              <span className={styles.h1TagStyling}>&nbsp;Biography:</span>
            </h1>
            <p className={styles.biography}>
              Lynn Nguyen (born in 1993) is a Vietnamese American
              interdisciplinary artist and wood sculptor whose practice explores
              the intersection of traditional craftsmanship, digital technology,
              and cultural memory. Drawing from visual aesthetics and East Asian
              woodworking techniques, her sculptures often incorporate both
              handcrafted and digital elements to reflect on time, identity, and
              emotional labor. Through a deep engagement with material and
              movement, her work investigates themes of resilience, fragility,
              and the tensions between handmade authenticity and mechanical
              precision. She holds a BFA in Studio Art from the University of
              Maryland, College Park, and will graduate soon from her MFA in
              Intermedia and Digital Art at the University of Maryland,
              Baltimore County. Nguyen is a member of the Art League of
              Germantown, INC., the Women's Caucus for Art, and the Washington
              Sculptors Group. Her work has been recognized for its
              craftsmanship, conceptual depth, and innovative use of mixed
              media. She is dedicated to a cross-disciplinary practice that
              bridges sculpture, digital media, and personal storytelling.
            </p>
            <h1>
              <span className={styles.h1TagStyling}>
                &nbsp;Academic Achievements:
              </span>
            </h1>
            <ul className={styles.academicAchievements}>
              <li>
                2022- 2023 | Creative and Performing Arts (CAPA) Scholarship -
                Department of Arts, University of Maryland, College Park
              </li>
              <li>
                2022- 2023 | Paula Santen Scholarship - Department of Arts,
                University of Maryland, College Park
              </li>
              <li>
                Summer 2025 | College of Arts, Humanities, & Social Sciences
                Grant, University of Maryland, Baltimore County
              </li>
              <li>
                Spring 2026 | Scholarly Development Fund, University of
                Maryland, Baltimore County
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Newsletter
        description="Get updates on new pieces, exhibitions, and what I'm working on."
        successMessage="In the meantime, feel free to look through my work."
        showGalleryButton={true}
      /> */}
    </>
  );
};

export default About;
