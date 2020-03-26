import React from 'react'

import StyledHero from '../components/StyledHero'

import {Layout} from '../components/Layout'

import {graphql} from 'gatsby'

import BlogList from '../components/Blog/Bloglist'

 const blog = ({data}) => {
    return (
        <Layout>
            
            <StyledHero

img={data.defaultBcg.childImageSharp.fluid}

/>


<BlogList/>

        </Layout>
    )
}


export const query=graphql`

query {
  defaultBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`

export default blog
