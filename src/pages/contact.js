import React from 'react'

import {Layout} from '../components/Layout'

import StyledHero from '../components/StyledHero'

import {graphql} from 'gatsby'

import Contact from '../components/Contact/Contact'

export default function contact({data}) {
    return (
        <Layout>

<StyledHero

img={data.defaultBcg.childImageSharp.fluid}

/>

<Contact/>

        </Layout>
    )
}

export const query=graphql`

query {
  defaultBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`