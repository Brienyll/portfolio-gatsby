import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/dev.svg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="Skills"/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img}/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
          
          <h2>Web Technologies</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>postgreSQL</li>
            <li>mySQL</li>
          </ul>
          
          <h2>Tools</h2>
          <ul>
            <li>Git</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>       
        </article>
      </div>
    </section>
  )
}

export default About
