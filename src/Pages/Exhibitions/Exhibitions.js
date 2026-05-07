import styles from "./Exhibitions.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";

const Exhibitions = () => {
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
              Exhibitions.
            </p>
            <div className={styles.exhibitionYearButtons}>
              {/* exhibition 2026 */}
              <button
                className={`${styles.exhibitionYearButton} ${styles.latestExhibitionYear}`}
                disabled
              >
                2026
              </button>
              <ul className={styles.exhibitions2026}>
                <li>
                  Women Artists of the DMV Exhibition at Falls Church Arts
                  Gallery | Panelist in one of 19 venues of Women Artists of the
                  DMV | Falls Church, VA
                </li>
                <li>
                  <i>April 1st - 18th</i> | 2026 IMDA MFA Thesis Exhibition:{" "}
                  <b>
                    <i>Despite / Bất Chấp</i>
                  </b>{" "}
                  at the Center for Art Design and Visual Culture (CADVC)
                  Gallery, UMBC | Baltimore, MD
                </li>
                <li>
                  <i>April 13th</i> | 2026 IMDA MFA Thesis Defense at the CADVC
                  Gallery | Baltimore, MD
                </li>
                <li>
                  'From the Madness' Exhibition at the Interlude Gallery, Fine
                  Arts Building, UMBC | Baltimore, MD
                </li>
                <li>
                  Art Vendor of the Interlude's Art Market at UMBC Amphitheater
                  | Baltimore, MD
                </li>
                <li>
                  2026 Asia North Exhibition: Shoes at the Door in Baltimore's
                  Station North Arts District | Baltimore, MD
                </li>
                <li>
                  The Polar Ice Museum from Greenland to South Baltimore at the
                  Imaging Research Center (IRC), UMBC | Baltimore, MD
                </li>
                <li>
                  30 [Years] 1996-2026 We're Still Out There IMDA MFA Open
                  Studios / IMDA Alumni Showcase at the Lions Brothers Building
                  | Baltimore, MD
                </li>
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
                  <li>
                    Full Circle, Strathmore's 33rd Annual Juried Exhibition |
                    Bethesda, MD |{" "}
                    <b>
                      <i>3rd Place Winner</i>
                    </b>
                  </li>
                  <li>
                    'Beauty is What We're Fighting For' Exhibition at the Cade
                    Art Gallery at Anne Arundel Community College | Arnold, MD
                  </li>
                  <li>
                    'Mother Nature' Exhibition at Kentlands Mansion | The
                    Women's Caucus for Art of Greater Washington, D.C. (WCADC) |
                    Gaithersburg, MD
                  </li>
                  <li>
                    Nature Exhibition in the Naturalist Gallery of Contemporary
                    Art | Online Curatorial Institution
                  </li>
                  <li>
                    Art League of Germantown (ALOG) Featured Artist of the Month
                    | Germantown, MD
                  </li>
                  <li>
                    Mixed-Media Solo Exhibition at Baltimore County Public
                    Library - Arbutus Branch | Arbutus, MD
                  </li>
                  <li>
                    (un)Alter(ed) Ego Group Exhibition at the Bogus Gallery |
                    Baltimore, MD
                  </li>
                  <li>
                    One of the Grad Spotlights for November selected by the GSA
                    Chief, UMBC | Baltimore, MD
                  </li>
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
                  <li>
                    Fall 2024 |{" "}
                    <b>
                      <i>Passed</i>
                    </b>{" "}
                    Candidacy Graduate Review of the IMDA MFA Program at UMBC |
                    Baltimore, MD
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
                    'Responsible Chaos' at the Department of Art | College Park,
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
    </>
  );
};

export default Exhibitions;
