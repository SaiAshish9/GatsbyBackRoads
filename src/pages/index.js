import React from "react"

import {Layout} from '../components/Layout'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import StyledHero from '../components/StyledHero'

// import 'bootstrap/dist/css/bootstrap.min.css'

import Banner from '../components/Banner'

import About from '../components/Home/About'

import Services from '../components/Home/Services'

import {graphql} from 'gatsby'


import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => (



    <Layout >
  
  <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>

<Banner title="continue exploring" info="lorem ipsum dolor sit amet, consectetur adip">


<AniLink fade to="/tours" className="btn-white">
explore tours
</AniLink>

</Banner>


  </StyledHero> 

<About/>

<Services/>

<FeaturedTours/>

    </Layout>
  )


export const query=graphql`

query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90,maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`