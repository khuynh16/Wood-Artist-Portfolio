import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import styles from "./About.module.css";
import { useState } from "react";
import about_pic from "../../Assets/Images/About.jpg";

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
              src={about_pic}
              alt="example"
              className={styles.image}
              loading="lazy"
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
            <h1>
              <span className={styles.h1TagStyling}>&nbsp;Exhibitions:</span>
            </h1>
            <div className={styles.exhibitionYearButtons}>
              {/* exhibition 2026 */}
              <button
                className={`${styles.exhibitionYearButton} ${styles.latestExhibitionYear}`}
                disabled
              >
                2026
              </button>
              <ul className={styles.exhibitions2026}>
                <li>Example Gallery 1 | Example City, MD</li>
                <li>Example Gallery 2 | Example City, MD</li>
                <li>Example Gallery 3 | Example City, MD</li>
              </ul>

              {/* exhibition 2025 */}
              <button
                className={styles.exhibitionYearButton}
                onClick={() => toggle("exhibitionYear2025")}
              >
                <span className={styles.label}>
                  2025
                  <span
                    className={`${styles.arrow} ${
                      open.exhibitionYear2025 ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              </button>
              {open.exhibitionYear2025 && (
                <ul className={styles.exhibitions2025}>
                  <li>Example Gallery 1 | Example City, MD</li>
                  <li>Example Gallery 2 | Example City, MD</li>
                  <li>Example Gallery 3 | Example City, MD</li>
                </ul>
              )}

              {/* exhibition 2024 */}
              <button
                className={styles.exhibitionYearButton}
                onClick={() => toggle("exhibitionYear2024")}
              >
                <span className={styles.label}>
                  2024
                  <span
                    className={`${styles.arrow} ${
                      open.exhibitionYear2024 ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              </button>
              {open.exhibitionYear2024 && (
                <ul className={styles.exhibitions2024}>
                  <li>
                    '2nd NATURE' Art Competition at TERAVARNA | Los Angeles, CA
                    |{" "}
                    <b>
                      <i>Honorable Mention Award</i>
                    </b>
                  </li>
                  <li>
                    'Still and Lifeless' Juried Art Contest at Gallery 4% |
                    Baltimore, MD |{" "}
                    <b>
                      <i>Distinction Award</i>
                    </b>
                  </li>
                  <li>
                    'Looking Back' Exhibit at Corgi Clay Art Center | Stafford,
                    VA
                  </li>
                  <li>
                    'Sustenance' Exhibition at miXt Food Hall | The Women's
                    Caucus for Art of Greater Washington, D.C. (WCADC) |
                    Brentwood, MD
                  </li>
                  <li>
                    Reflections 2024 at Maryland Federation of Art | Annapolis,
                    MD
                  </li>
                  <li>
                    2024 Emerging Artists Exhibition at the Delaplaine Arts
                    Center | Frederick, MD
                  </li>
                  <li>
                    'Love Letters to Baltimore + The DMV' in the Asia North 2024
                    Exhibition | Baltimore, MD
                  </li>
                  <li>
                    2024 National Juried Exhibition at the Delaplaine Arts
                    Center | Frederick, MD |{" "}
                    <b>
                      <i>3rd Place Winner</i>
                    </b>
                  </li>
                  <li>
                    'Sensorium' Multimedia Installation at Lion Brothers
                    Building | Baltimore, MD
                  </li>
                  <li>
                    'Celebrate the Colors of the Season' Exhibition at Village
                    of Friendship Heights | The Women's Caucus for Art of
                    Greater Washington, D.C. (WCADC) | Chevy Chase, MD
                  </li>
                </ul>
              )}

              {/* exhibition 2023 */}
              <button
                className={styles.exhibitionYearButton}
                onClick={() => toggle("exhibitionYear2023")}
              >
                <span className={styles.label}>
                  2023
                  <span
                    className={`${styles.arrow} ${
                      open.exhibitionYear2023 ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              </button>
              {open.exhibitionYear2023 && (
                <ul className={styles.exhibitions2023}>
                  <li>
                    2023 Emerging Artists Exhibition at the Delaplaine Arts
                    Center | Frederick, MD
                  </li>
                  <li>
                    Sadat Art for Peace 2023 Competition at Herman Maril Gallery
                    | College Park, MD
                  </li>
                  <li>
                    Honor Thesis Show at Herman Maril Gallery | College Park, MD
                  </li>
                  <li>
                    Senior Show of UMD Department of Art | College Park, MD |{" "}
                    <b>
                      <i>2nd Place Winner</i>
                    </b>
                  </li>
                  <li>
                    Eye of the Beholder 2023 at Maryland Federation of Art |
                    Annapolis, MD
                  </li>
                  <li>
                    'My Personal Best' Exhibition | The Women's Caucus for Art
                    of Greater Washington, D.C. (WCADC) | Washington, DC
                  </li>
                  <li>
                    6th Artist Grant - Special Mention Award from TERAVARNA
                  </li>
                  <li>
                    'Pivotal' Exhibition at Montpelier Arts Center | The Women's
                    Caucus for Art of Greater Washington, D.C. (WCADC) | Laurel,
                    MD
                  </li>
                  <li>
                    Small Wonders 2023 at Maryland Federation of Art |
                    Annapolis, MD
                  </li>
                  <li>
                    Welcome New IMDA Cohorts at The Visual Arts Department, UMBC
                    | Baltimore, MD
                  </li>
                  <li>
                    UNDER $500 Exhibition at Maryland Art Place | Baltimore, MD
                  </li>
                  <li>
                    IMDA Open Studios at Lions Brothers Building | Baltimore, MD
                  </li>
                  <li>
                    'Unreal & Non-Representational' Juried Art Contest at
                    Gallery 4% | Baltimore, MD |{" "}
                    <b>
                      <i>Laurel Award</i>
                    </b>
                  </li>
                  <li>
                    '9th OPEN' 2023 International Juried Art Contest at
                    TERAVARNA | Los Angeles, CA |{" "}
                    <b>
                      <i>Finalist Award</i>
                    </b>
                  </li>
                </ul>
              )}

              {/* exhibition 2022 */}
              <button
                className={styles.exhibitionYearButton}
                onClick={() => toggle("exhibitionYear2022")}
              >
                <span className={styles.label}>
                  2022
                  <span
                    className={`${styles.arrow} ${
                      open.exhibitionYear2022 ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              </button>
              {open.exhibitionYear2022 && (
                <ul className={styles.exhibitions2022}>
                  <li>
                    Hill Center Galleries & CHAL Juried Exhibition 2022 |
                    District of Columbia, DC
                  </li>
                  <li>
                    INVASION Exhibition in IA&A at Hillyer | District of
                    Columbia, DC
                  </li>
                  <li>
                    The Emerging Artists Exhibition at the Delaplaine Arts
                    Center | Frederick, MD
                  </li>
                  <li>
                    Sadat Art for Peace 2022 Competition at Herman Maril Gallery
                    | College Park, MD
                  </li>
                  <li>
                    Immersive Media + Arts for All Showcase at Brendan Iribe
                    Center for Computer Science and Engineering | College Park,
                    MD
                  </li>
                  <li>Luna Lounge event at Stamp Gallery | College Park, MD</li>
                  <li>
                    A recent collaboration with an Immersive Media group for the
                    NEXTNOW event at Claire Smith Performing Arts Center |
                    College Park, MD
                  </li>
                  <li>
                    The “Momentum” at the Herman Maril Gallery | College Park,
                    MD
                  </li>
                  <li>
                    “Responsible Chaos” at the Department of Art | College Park,
                    MD
                  </li>
                  <li>
                    Small Wonders 2022 at Maryland Federation of Art |
                    Annapolis, MD
                  </li>
                </ul>
              )}

              {/* exhibition 2021 */}
              <button
                className={styles.exhibitionYearButton}
                onClick={() => toggle("exhibitionYear2021")}
              >
                <span className={styles.label}>
                  2021
                  <span
                    className={`${styles.arrow} ${
                      open.exhibitionYear2021 ? styles.open : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              </button>
              {open.exhibitionYear2021 && (
                <ul className={styles.exhibitions2021}>
                  <li>
                    Juried Winter Student Exhibition at Stamp Gallery | College
                    Park, MD
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Newsletter description="Get updates on new pieces, exhibitions, and what I’m working on." />
    </>
  );
};

export default About;
