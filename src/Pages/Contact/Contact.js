import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Contact.module.css";
import contact_pic from "../../Assets/Images/Contact.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const validSubmission = (event) => {
    event.preventDefault();
    setFormSubmitted(!formSubmitted);

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/lynn.nguyen1206@hotmail.com", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateSubject = (event) => {
    setSubject(event.target.value);
  };

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contactTitle}>Let's Chat!</div>
          <div className={styles.formContent}>
            <img
              className={styles.picture}
              src={contact_pic}
              alt={"working on beginning_ending project"}
            ></img>
            <form
              className={styles.form}
              style={{
                display: formSubmitted ? "none" : "",
              }}
              onSubmit={validSubmission}
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={updateName}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={updateEmail}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={updateSubject}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Message:</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="10"
                  required
                  value={message}
                  onChange={updateMessage}
                ></textarea>
              </div>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  mt: "1rem",
                  textTransform: "capitalize",
                }}
                type="submit"
                value="Submit"
              >
                Submit Message
              </Button>
            </form>
          </div>

          <div
            className={styles.emailSubmissionMessage}
            style={{ display: !formSubmitted ? "none" : "flex" }}
          >
            Thank you for your email, {name}! <br></br>
            <br></br> I will get back to you soon!
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
