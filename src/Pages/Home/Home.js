import styles from "./Home.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import main_page_pic from "./../../Assets/Images/Bud.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <img
          className={styles.mainPic}
          src={main_page_pic}
          alt={"front page artwork"}
        ></img>
        <div className={styles.shadow} />
      </div>
      <div className={styles.artistName}>
        <span>Lynn</span>
        <span>Nguyen</span>
      </div>
      <div className={styles.artistPhrase}>
        <span>Artist.</span>
        <span>Designer.</span>
        <span>Wood Sculptor.</span>
      </div>
    </>
  );
};

export default Home;
