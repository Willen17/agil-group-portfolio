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

export const CustomDialog = ({
  isOpen,
  handleClose,
  title,
  subtitle,
  children,
}) => {
  const [skillText, setSkillText] = useState("");

  const infoText = [
    {
      title: "React",
      text: "Created by Meta (formerly Facebook), React is a JavaScript library used for building user intefaces. With almost 200k starts on Github, this JS-library is one of the most popular and used by millions of websites. From creating simple single-page sites to more complex sites, React does it all. Our team is very knowledgeable in React, infact the website you are on right now is built with it!",
    },
    {
      title: "MongoDB",
      text: "The MongoDB database technology can be used for many different things. You want a database with user information? Perhaps you're planning to open an webshop and need a place to store all your products and orders? MongoDB has got you covered! Our team has the knowledge to set up and run databases in all different sizes and shapes. Ask and you shall recieve.",
    },
    {
      title: "Typescript",
      text: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds additional syntax to JavaScript to support tighter integration and easier coding with clear error messages.",
    },
    {
      title: "Html5",
      text: "The latest version of HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Also one of the cornerstones of the world wide web.",
    },
    {
      title: "Adobe Creative Cloud",
      text: "Adobe Creative Cloud is a set of applications and services from Adobe Inc. Adobe Creative Cloud helps you bring your creative projects to life in photography, graphic design, video editing, UX design, drawing and painting, social media, and more.",
    },
    {
      title: "Firebase",
      text: "Platform developed by Google for creating mobile and web applications. Firebase offers a wide variety of tools ranging from building to releasing and monitoring appliocations. It also offers tools to boost user engagement with rich analytics, A/B testing and messaging campaigns. An online dashboard and console gives you real-time information and tools for your website from anywhere.",
    },
    {
      title: "Node.js",
      text: "Node.js is a back-end JavaScript runtime environment. It can be used to communicate with databases and servers  to produce dynamic web page content before the page is sent to the user's browser. Essential for a good user experience, and we know just how to implement it into your project!",
    },
    {
      title: "Bootstrap",
      text: "Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a uniform appearance for prose, tables and form elements across web browsers. The team at Plejd have been working with Bootstrap for a long time and is using their knowledge to create beautiful responsive websites across all platforms.",
    },
    {
      title: "Material UI",
      text: "Based on Google's Material Design, Material UI is a library of React UI components that will make any website look proffesional. With everything from good looking buttons and sliders to form layouts and Accordions, MUI is the way to go. At Plejd we have been working with MUI for many different projects and are well aware of the capabillities it holds.",
    },
    {
      title: "Figma",
      text: "Figma is an online whiteboard for you and your team to brainstorm in the open. We use this wonderful application for many things. At Plejd we use Figma for early brainstorming, wireframes/mockups & prototyping.",
    },
  ];

  const getSkillText = () => {
    if (title) {
      let newText = infoText.find((object) => object.title === title);
      setSkillText(newText.text);
    } else {
      setSkillText("");
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
          {children}
          <p style={{ fontFamily: "Fredoka" }}>{title}</p>
        </div>

        <DialogContent>
          <p style={{ fontFamily: "Fredoka", fontSize: "1rem", margin: "0" }}>
            {skillText}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};
