import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Adam from "../assets/Pics/Adam.png";
import William from "../assets/Pics/William.png";
import Jannie from "../assets/Pics/Jannie.png";
import Miranda from "../assets/Pics/Miranda.png";
import Love from "../assets/Pics/Love.png";

const infoText = [
  {
    name: "Adam",
    img: Adam,
    text: (
      <p style={{ fontFamily: "Fredoka", fontSize: "1rem", margin: "0" }}>
        Hello! <br /> My name is Adam and I'm a front-end developer at Plajm. My
        main focus is the front-end part of projects, but I sometimes work with
        the backend as well. With many years of working with customers of
        different kinds I am an expert in communication and getting our goals
        aligned with the customers for a well finished product. I was one of the
        co-founders of Spotify and worked there during the first 3 years. I then
        sold my stake and moved to South Korea where I opened a chain of
        ice-cream restaurants. When I got the offer to come work for Plajm I
        couldn't say no. <br /> <br /> I like: Cool cars I don't like: Not cool
        cars
      </p>
    ),
  },
  {
    name: "William",
    img: William,
    text: (
      <p style={{ fontFamily: "Fredoka", fontSize: "1rem", margin: "0" }}>
        William is a twenty-two year old digital mastermind. Whether it is
        setting up a database for the world's largest e-commerce or coding an
        interactive and responsive business portfolio. He has worked with some
        of the giant companies in the world such as Google, Tesla and Amazon.
        However, during his last employment he did not get the spiritual
        fulfillment that he craved. So despite endless amounts of offers from
        Musk and Bezos he decided to start a new adventure by joining the young
        and promising network bureau Plajm. <br /> <br />
        He is now working as digital head developer of technical operations
      </p>
    ),
  },
  {
    name: "Jannie",
    img: Jannie,
    text: (
      <p style={{ fontFamily: "Fredoka", fontSize: "1rem", margin: "0" }}>
        Jannie is a frontend developer that loves to be creative. She graduated
        from Medieinstitutet in spring 2023 and has been working at Plajm since
        then. At Plajm she's been apart of a scrum-team and she has been working
        in both small and large projects. She thinks the best thing about
        frontend is to watch the code come to life.
      </p>
    ),
  },
  {
    name: "Miranda",
    img: Miranda,
    text: (
      <p style={{ fontFamily: "Fredoka", fontSize: "1rem", margin: "0" }}>
        "Miranda is 27 years old and finished her studies at Medieinstitutet in
        2023. She started working at Plajm straight after attaining her
        graduation and has since then been working on several major projects
        with clients like Microsoft, Klarna och Swedish Match." <br /> <br />
        Experiences: <br /> <br />
        Frontend Developer <br /> Plajm 2023- present
        <br />
        Maintain and update websites based on feedback from clients
        <br />
        Train junior team members and provide them with constructive feedback{" "}
        <br />
        <br />
        Troubleshoot website problems <br />
        Collaborate with team members on projects and product needs
        <br />
        Present design ideas to clients to receive feedback
        <br />
        <br />
        Core skills:
        <br /> <br />
        Project Management
        <br />
        Communication
        <br />
        Critical thinking
      </p>
    ),
  },
  {
    name: "Love",
    img: Love,
    text: (
      <p
        style={{
          fontFamily: "Fredoka",
          fontSize: "1rem",
          margin: "0",
          transition: " all .2s ease-in-out",
        }}
      >
        Love is a top tier coding engineer with more than 20 years in the
        industry. If you want the job done, he's your guy! From building the
        entire google-platform on a commondore-64, to create apple.com,
        amazon.com and netflix.com in 24 hours. After his big breakthrough in
        the web-developing front, he decided to take a step back and take some
        time off.
        <br />
        He now specializes in javascript, react, & css.
        <br />
      </p>
    ),
  },
];

export const PersonalModal = ({ isOpen, handleClose, title, subtitle }) => {
  const [skillText, setSkillText] = useState(<p>empty</p>);
  const [currentImg, setCurrentImg] = useState(Adam);

  const getSkillText = () => {
    if (title) {
      let newText = infoText.find((object) => object.name === title);
      setCurrentImg(newText.img);
      setSkillText(newText.text);
    } else {
      setSkillText(<></>);
    }
  };

  useEffect(() => {
    getSkillText();
  }, [title]);

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <img src={currentImg} alt={title} style={{ height: "8vw" }} />
          <p
            style={{
              fontFamily: "Fredoka",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            {title}
          </p>
        </div>

        <DialogContent>{skillText}</DialogContent>
      </Dialog>
    </>
  );
};

PersonalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
