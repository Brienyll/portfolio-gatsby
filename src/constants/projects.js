import React from "react"
import P1 from "../images/scfacer29.png"
import P2 from "../images/scbooks29.png"
import P3 from "../images/scfriends29.png"

export default [
  {
    image: <img src={P1} alt="Face Recognition App" />,
    title: "Face Recognition App",
    text: "Built a web Application that detects and identifies images that you upload from the web using machine learning and neural networks with the help of clarifai's API."
  },
  {
    image: <img src={P2} alt="Virtual Bookshelf" />,
    title: "Virtual Bookshelf",
    text: "Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library."
  },
  {
    image: <img src={P3} alt="My Friends" />,
    title: "My Friends",
    text: "Single Page Application using React that searches your robot friends asyncronously. Leveraged React for dynamic state management."
  }
]