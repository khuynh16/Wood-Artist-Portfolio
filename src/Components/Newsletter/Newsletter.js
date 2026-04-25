import styles from "./Newsletter.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import newsletterIcon from "../../Assets/Images/NewsletterIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Newsletter = ({ description, successMessage, showGalleryButton }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      const startTime = Date.now();

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      const elapsed = Date.now() - startTime;
      const remaining = 1500 - elapsed;

      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
      }

      // SUCCESS or ALREADY SUBSCRIBED
      if (data.success) {
        if (data.status === "already_subscribed") {
          setStatus("already_subscribed");
        } else {
          setStatus("success");
        }
        return;
      }

      // ERROR
      setStatus("error");
    } catch (err) {
      setStatus("error");
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

        {/* LOADING */}
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

        {/* SUCCESS */}
        {status === "success" && (
          <div className={styles.successMessageContainer}>
            <p className={styles.successMessageText}>
              You're all set! A confirmation email has been sent.
              <br />
              <br />
              {successMessage}
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

        {/* ALREADY SUBSCRIBED */}
        {status === "already_subscribed" && (
          <div className={styles.successMessageContainer}>
            <p className={styles.successMessageText}>
              You're already subscribed to the mailing list -- thank you!
              <br />
              <br />
              {successMessage}
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

        {/* ERROR */}
        {status === "error" && (
          <p style={{ color: "red", textAlign: "center" }}>
            Something went wrong. Please try again.
          </p>
        )}

        {/* FORM */}
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
