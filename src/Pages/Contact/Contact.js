import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Contact.module.css";
import contact_pic from "../../Assets/Images/Contact.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
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
      <Navbar />

      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.formContent}>
            {/* LEFT IMAGE */}
            <div className={styles.picDiv}>
              <img
                className={styles.picture}
                src={contact_pic}
                alt="shining light on clamped wood"
                loading="lazy"
              />
              <div className={styles.contactTitle}>Stay Connected!</div>
            </div>

            {/* RIGHT SIDE */}
            {!formSubmitted ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.newsletterTitle}>Email Newsletter</p>

                <div className={styles.newsletterContextContainer}>
                  <p className={styles.newsletterContext}>
                    Get notified of studio updates, exhibitions, and projects.
                  </p>

                  <input
                    className={styles.emailInput}
                    type="email"
                    name="email"
                    placeholder="your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Roboto Condensed, sans-serif",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      mt: "1rem",
                      textTransform: "capitalize",
                    }}
                    type="submit"
                  >
                    Subscribe!
                  </Button>
                </div>
              </form>
            ) : (
              <div className={styles.emailSubmissionMessage}>
                Thank you for subscribing! <br />
                <br />
                You'll receive updates on exhibitions and new work soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
