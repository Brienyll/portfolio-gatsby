import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/scbooks29.png"
import Img from "gatsby-image"

const data = useStaticQuery(getImages);

export default [
  
  {
    link: "https://facer29.netlify.com/",
    image: <Img fluid={data.fluid.childImageSharp} alt="Face Recognition App" />,
    title: "Face Recognition App",
    text: "Built a web Application that detects and identifies images that you upload from the web using machine learning and neural networks with the help of clarifai's API."
  },
  {
    link: "https://books29.netlify.com/",
    image: <img src={img} alt="Virtual Bookshelf" />,
    title: "Virtual Bookshelf",
    text: "Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library."
  },
  {
    link: "https://friends29.netlify.com/",
    image: <Img fixed={data.fluid.childImageSharp} alt="My Friends" />,
    title: "My Friends",
    text: "Single Page Application using React that searches your robot friends asyncronously. Leveraged React for dynamic state management."
  },
  {
    link: "https://pokebattle29.netlify.com/",
    image: <Img fixed={data.fluid.childImageSharp} alt="Poke Cards" />,
    title: "Poke Cards",
    text: "Single Page Application using React that deals 5 random pokemon cards to you and opponent. Winner is detrmined by the total experience of Pokemons"
  }
]