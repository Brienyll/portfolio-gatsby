import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/scbooks29.png"
import Img from "gatsby-image"



const images = () => {
  const data = useStaticQuery(getImages);
  return (
    <Wrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default images
