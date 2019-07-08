import React from 'react'
import Title from '../Title'
import styles from "../../css/projects.module.css"
import projects from '../../constants/projects'
import P1 from "../../images/scfacer29.png"

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Title title="Projects" />
      <div classname={styles.center}>
        {
          projects.map((item, index)=> {
            return <article key={index} className={styles.project}>
            <img src={P1}/>
            <h4>{ item.title}</h4>
            <p>{item.text}</p>
            </article>
          })
        }
      </div>
    </section>
  )
}

export default Projects
