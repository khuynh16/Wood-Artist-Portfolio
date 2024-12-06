import Navbar from "../../Components/Navbar/Navbar";
import styles from "./About.module.css";
import about_pic from "../../Assets/Images/About.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.banner}>
            <img
              className={styles.picture}
              src={about_pic}
              alt={"looking up, posing in green fields"}
              loading="lazy"
            ></img>
            <p className={styles.bannerText}>The Story and Journey.</p>
          </div>
          <div className={styles.mainContent}>
            <h1>
              <span className={styles.h1TagStyling}>
                &nbsp;Artist Statement:
              </span>
            </h1>

            <p className={styles.artistStatement}>
              My artistic practice revolves around the harmonious combination of
              wood and mixed media, creating interactive works that transcend
              the conventional boundaries of these mediums. Embedded in my
              artwork is a naive playfulness; recalling the good memories of the
              past, intertwining with the present. Interaction and entertainment
              serve as the foundation for my artistic expression, inviting the
              audience to participate not only with their vision but with other
              senses. My work allows me to find the lucidity and meaning of life
              as an expatriate who had to adapt to a new home, while
              acknowledging the past will never perish. This moment, my
              perceptions, and my emotions will endure in the artworks.
              <br></br>
              <br></br>
              As an artist guided by a life as a Vietnamese American expatriate,
              I find meaning in the amalgamation of cultural influences and
              personal experiences. I use wood because it is an enchanting,
              natural material and sculptures made from wood provide me with the
              feeling of engaging living things. Joinery and the meticulous
              arrangement of patterned pieces of wood are the foundation of my
              woodworking endeavors. Within this craft, I explore the synergy of
              wood with various mixed materials, combining found objects, resin,
              acrylic, and more. This interdisciplinary approach modernizes my
              artwork, expanding the possibilities of expression.
              <br></br>
              <br></br>
              Being a Vietnamese American who embraced a new home at a young
              age, my artwork serves as a narrative that combines tradition and
              my contemporary's personal journey. Through my art, I seek to
              stimulate a deep engagement, nurturing an appreciation for the
              intricate layers that shape both my identity and the stories
              embedded within each sculpture. In a world marked by rapid change
              and cultural transformation, I aim to emphasize the celebration of
              diverse backgrounds and strengths through my artwork by infusing
              my artwork with personal stories and experiences. Imbued with a
              rich sense of culture and personal history, my creations merge
              craftsmanship with digital media to explore innovative artworks.
            </p>
            <h1>
              <span className={styles.h1TagStyling}>&nbsp;Biography:</span>
            </h1>
            <span className={styles.biography}>
              My artworks combine tradition and innovation, creating interactive
              art that transcends all boundaries. My work combines the elegance
              of wood with digital kinetic art, inviting viewers to experience
              art through multiple senses. As an expatriate adjusting to a new
              home while embracing my cultural roots, I find meaning and clarity
              in the complex role of life. My art goes beyond static sculptures,
              blending between wood and technology. Motors, sensors, and
              augmented reality (AR) converge in my works, creating vivid
              stories in which nature, mechanics and digital realms come
              together. I graduated from the University of Maryland, College
              Park and have exhibited my art in prestigious galleries. I am
              currently a graduate student at University of Maryland, Baltimore
              County, leveraging my diverse background in fine arts and digital
              media as well as my teaching and design expertise.
              <br></br>
              <br></br>
              <br></br>
              Selected exhibitions include:
              <br></br>
              <br></br>
              <br></br>
              <h4>2021:</h4>
              <br></br>
              <ul className={styles.exhibitions2021}>
                <li>
                  Juried Winter Student Exhibition at Stamp Gallery | College
                  Park, MD
                </li>
              </ul>
              <br></br>
              <h4>2022:</h4>
              <br></br>
              <ul className={styles.exhibitions2022}>
                <li>
                  Hill Center Galleries & CHAL Juried Exhibition 2022 | District
                  of Columbia, DC
                </li>
                <li>
                  INVASION Exhibition in IA&A at Hillyer | District of Columbia,
                  DC
                </li>
                <li>
                  The Emerging Artists Exhibition at the Delaplaine Arts Center
                  | Frederick, MD
                </li>
                <li>
                  Sadat Art for Peace 2022 Competition at Herman Maril Gallery |
                  College Park, MD
                </li>
                <li>
                  Immersive Media + Arts for All Showcase at Brendan Iribe
                  Center for Computer Science and Engineering | College Park, MD
                </li>
                <li>Luna Lounge event at Stamp Gallery | College Park, MD</li>
                <li>
                  A recent collaboration with an Immersive Media group for the
                  NEXTNOW event at Claire Smith Performing Arts Center | College
                  Park, MD
                </li>
                <li>
                  The “Momentum” at the Herman Maril Gallery | College Park, MD
                </li>
                <li>
                  “Responsible Chaos” at the Department of Art | College Park,
                  MD
                </li>
                <li>
                  Small Wonders 2022 at Maryland Federation of Art | Annapolis,
                  MD
                </li>
              </ul>
              <br></br>
              <h4>2023:</h4>
              <br></br>
              <ul className={styles.exhibitions2023}>
                <li>
                  2023 Emerging Artists Exhibition at the Delaplaine Arts Center
                  | Frederick, MD
                </li>
                <li>
                  Sadat Art for Peace 2023 Competition at Herman Maril Gallery |
                  College Park, MD
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
                  'My Personal Best' Exhibition | The Women's Caucus for Art of
                  Greater Washington, D.C. (WCADC) | Washington, DC
                </li>
                <li>6th Artist Grant - Special Mention Award from TERAVARNA</li>
                <li>
                  'Pivotal' Exhibition at Montpelier Arts Center | The Women's
                  Caucus for Art of Greater Washington, D.C. (WCADC) | Laurel,
                  MD
                </li>
                <li>
                  Small Wonders 2023 at Maryland Federation of Art | Annapolis,
                  MD
                </li>
                <li>
                  Welcome New IMDA Cohorts at The Visual Arts Department, UMBC |
                  Baltimore, MD
                </li>
                <li>
                  UNDER $500 Exhibition at Maryland Art Place | Baltimore, MD
                </li>
                <li>
                  IMDA Open Studios at Lions Brothers Building | Baltimore, MD
                </li>
                <li>
                  'Unreal & Non-Representational' Juried Art Contest at Gallery
                  4% | Baltimore, MD |{" "}
                  <b>
                    <i>Laurel Award</i>
                  </b>
                </li>
                <li>
                  '9th OPEN' 2023 International Juried Art Contest at TERAVARNA
                  | Los Angeles, CA |{" "}
                  <b>
                    <i>Finalist Award</i>
                  </b>
                </li>
              </ul>
              <br></br>
              <h4>2024:</h4>
              <br></br>
              <ul className={styles.exhibitions2024}>
                <li>
                  '2nd NATURE' Art Competition at TERAVARNA | Los Angeles, CA |{" "}
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
                  'Looking Back' Exhibit at Corgi Clay Art Center | Stafford, VA
                </li>
                <li>
                  'Sustenance' Exhibition at miXt Food Hall | The Women's Caucus
                  for Art of Greater Washington, D.C. (WCADC) | Brentwood, MD
                </li>
                <li>
                  Reflections 2024 at Maryland Federation of Art | Annapolis, MD
                </li>
                <li>
                  2024 Emerging Artists Exhibition at the Delaplaine Arts Center
                  | Frederick, MD
                </li>
                <li>
                  'Love Letters to Baltimore + The DMV' in the Asia North 2024
                  Exhibition | Baltimore, MD
                </li>
                <li>
                  2024 National Juried Exhibition at the Delaplaine Arts Center
                  | Frederick, MD |{" "}
                  <b>
                    <i>3rd Place Winner</i>
                  </b>
                </li>
                <li>
                  'Sensorium' Multimedia Installation at Lion Brothers Building
                  | Baltimore, MD
                </li>
                <li>
                  'Celebrate the Colors of the Season' Exhibition at Village of
                  Friendship Heights | The Women's Caucus for Art of Greater
                  Washington, D.C. (WCADC) | Chevy Chase, MD
                </li>
              </ul>
              <br></br>
              <br></br>
            </span>
            <div className={styles.biography}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
