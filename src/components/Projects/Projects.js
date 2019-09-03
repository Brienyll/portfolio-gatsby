import React from 'react'
import Title from '../Title'
import styles from "../../css/projects.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const getImages = graphql`
query Images {
    face: file(relativePath:{eq:"face-mu.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    books: file(relativePath:{eq:"books-mu.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    friends: file(relativePath:{eq:"friends-mu.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    light: file(relativePath:{eq:"light-mu.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Projects = () => {
  const data = useStaticQuery(getImages);
  return (
    <Wrapper className={styles.projects}>
      <Title title="Projects" />
      <div className={styles.center}>
        <article className={styles.project}>
            <a href="https://facer29.netlify.com/">
            <Img fluid={data.face.childImageSharp.fluid} alt="Face Recognition App" /></a>
            <h4>Face Recognition App</h4>
            <p>Built a web Application that detects and identifies images that you upload from the web using machine learning and neural networks with the help of clarifai's API.</p>
        </article>
        <article className={styles.project}>
            <a href="https://books29.netlify.com/">
            <Img fluid={data.books.childImageSharp.fluid} alt="Face Recognition App" /></a>
            <h4>My Books</h4>
            <p>Built a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that interacts with an API server and client library.</p>
        </article>
        <article className={styles.project}>
            <a href="https://friends29.netlify.com/">
            <Img fluid={data.friends.childImageSharp.fluid} alt="Face Recognition App" /></a>
            <h4>Robo Friends</h4>
            <p>Single Page Application using React that searches your robot friends asyncronously. Leveraged React for dynamic state management.</p>
        </article>
        <article className={styles.project}>
            <a href="https:/light29.netlify.com/">
            <Img fluid={data.light.childImageSharp.fluid} alt="Face Recognition App" /></a>
            <h4>Lights Off Game</h4>
            <p>A Lights out game clone.  Pressing any of the lights will toggle it and the adjacent lights. </p>
        </article>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid #696969;
  }
`

export default Projects
