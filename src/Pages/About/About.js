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
              My artwork combines technology and sculpture to create interactive
              works that transcend the boundaries of either medium. Embedded in
              my artwork is a naive playfulness recalling the good memories of
              the past, intertwining with the present. In my works, interaction
              and entertainment are the keys. My audiences are not limited only
              to vision, but they can use other senses to engage my artworks. My
              work allows me to find the lucidity and meaning of life as an
              expatriate who had to adapt to a new home, while acknowledging.
              The past will never perish, and this moment and my thinking and
              feeling will endure in my artworks.
              <br></br>
              <br></br>
              Like language and laughter to me, creativity is a natural human
              instinct, a foundation of who we are. I have always known that I
              was born with a certain capacity to create and express myself
              through Art. Unfortunately, my family would not support me if I
              went to school for art. Life is too short and seeing an
              opportunity to pursue what I love, I chose to educate myself as an
              artist. So far, I have not looked back, and changing my degree to
              the arts has been the best decision I made. It was a dream to
              combine Art and Technology.
              <br></br>
              <br></br>
              The art medium I am focusing on in my career is interactive
              kinetic wood sculpture. I believe wood is an enchanting, natural
              material. Sculptures made from wood provide me with the feeling of
              engaging living things whenever I touch them. Additionally, I am
              integrating my technical knowledge into my wood sculpture, such as
              augmented reality, different types of motors, and laser cutting.
              Combining digital and traditional art expands my medium,
              modernizes my artworks, and opens my artistic mind to
              interdisciplinary media.
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
              blending between wood and technology. Motors, sensors and
              augmented reality (AR) converge in my works, creating vivid
              stories in which nature, mechanics and digital realms come
              together.
              <br></br>
              <br></br>I graduated from the University of Maryland, College Park
              and have exhibited my art in prestigious galleries. I am currently
              a graduate student at University of Maryland, Baltimore County,
              leveraging my diverse background in fine arts and digital media as
              well as my teaching and design expertise. Awards include the
              Performing and Creative Arts Scholarship, the Paula Santeen
              Scholarship, Honorable Mention in the 2023 Sadat Peace Contest and
              Second Place in the Senior Exhibition at UMD, among many others.
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
                  Eye of the Beholder 2023 at Maryland Federation of Art |
                  Annapolis, MD
                </li>
                <li>
                  'My Personal Best' Exhibition | The Women's Caucus for Art of
                  Greater | Washington, DC
                </li>
                <li>6th Artist Grant - Special Mention Award from TERAVARNA</li>
                <li>
                  'Pivotal' Exhibition at Montpelier Arts Center | The Women's
                  Caucus for Art of Greater | Laurel, MD
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
