import styles from "./Newsletter.module.css";
import Button from "@mui/material/Button";
import newsletterIcon from "../../Assets/Images/NewsletterIcon.png";
import { useState } from "react";
import axios from "axios";

const Newsletter = ({ description }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // await axios.post("https://formsubmit.co/lynn.nguyen1206@hotmail.com", {
      //   email: email,
      // });

      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.titleRow}>
            <img
              src={newsletterIcon}
              alt="lotus newsletter icon"
              className={styles.image}
              loading="lazy"
            />
            <p className={styles.emdash}></p>
            <p className={styles.title}>Stay in the Loop</p>
            <p className={styles.emdash}></p>
            <img
              src={newsletterIcon}
              alt="lotus newsletter icon"
              className={styles.image}
              loading="lazy"
            />
          </div>
          <p className={styles.description}>{description}</p>
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className={styles.mailingListButton}
            variant="contained"
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: "bold",
              fontSize: "1.3rem",
              mt: "1rem",
              textTransform: "capitalize",
              width: "100%",
            }}
            type="submit"
          >
            Join Mailing List
          </Button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
