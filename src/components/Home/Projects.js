import React from 'react'
import Title from '../Title'
import styles from "../../css/projects.module.css"
import projects from '../../constants/projects'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Title title="Projects" />
      <div className={styles.center}>
        {
          projects.map((item, index)=> {
            return <article key={index} className={styles.project}>
            <a href={item.link}>
            <span>{item.image}</span></a>
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
