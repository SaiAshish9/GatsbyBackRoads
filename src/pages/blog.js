import React from 'react'

import StyledHero from '../components/StyledHero'

import {Layout} from '../components/Layout'

import {graphql} from 'gatsby'

 const blog = ({data}) => {
    return (
        <Layout>
            
            <StyledHero

img={data.defaultBcg.childImageSharp.fluid}

/>




        </Layout>
    )
}

// {props.data.site.siteMetadata.title}
// export const query=graphql`
// {
// site{
//         siteMetadata{
//             title
//     }
// }}
// `


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
