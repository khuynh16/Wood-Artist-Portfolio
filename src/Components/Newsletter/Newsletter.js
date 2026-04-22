import styles from "./Newsletter.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import newsletterIcon from "../../Assets/Images/NewsletterIcon.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Newsletter = ({ description, successMessage, showGalleryButton }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return;

    try {
      setStatus("loading");

      // simulate request (replace with real API later)
      timerRef.current = setTimeout(() => {
        setStatus("success");
      }, 1500);

      // Example real request:
      // await axios.post("your-endpoint", { email });
    } catch (error) {
      console.log(error);
      setStatus("idle");
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleRow}>
          <img
            src={newsletterIcon}
            alt="newsletter icon"
            className={styles.image}
            loading="lazy"
          />
          <p className={styles.emdash}></p>
          <p className={styles.title}>Stay in the Loop</p>
          <p className={styles.emdash}></p>
          <img
            src={newsletterIcon}
            alt="newsletter icon"
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* LOADING STATE */}
        {status === "loading" && (
          <Box
            sx={{
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={60} sx={{ color: "#fff" }} />
          </Box>
        )}

        {/* SUCCESS STATE */}
        {status === "success" && (
          <div className={styles.successMessageContainer}>
            <p className={styles.successMessageText}>
              You're all set! A confirmation email has been sent to you, just
              letting you know you've been added to the mailing list.<br></br>
              <br></br> {successMessage}
            </p>
            {showGalleryButton && (
              <Button
                onClick={() => {
                  navigate("/gallery");
                  window.scrollTo(0, 0);
                }}
                className={styles.mailingListButton}
                variant="contained"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  mt: "1rem",
                  textTransform: "capitalize",
                  width: "100%",
                  marginTop: "2em",
                }}
              >
                To Gallery
                <span style={{ marginLeft: "8px" }}>→</span>
              </Button>
            )}
          </div>
        )}

        {/* FORM STATE */}
        {status === "idle" && (
          <form onSubmit={handleSubmit}>
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
              type="submit"
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: "bold",
                fontSize: "1.3rem",
                mt: "1rem",
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              Join Mailing List
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
