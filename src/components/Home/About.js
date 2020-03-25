import React from 'react'

import Title from '../Title'

import styles from '../../css/about.module.css'


import Img from 'gatsby-image'

import {useStaticQuery,graphql} from 'gatsby'

const aboutImg=graphql`

query about{
    aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
        childImageSharp{
        fluid(maxWidth:600){
...GatsbyImageSharpFluid_tracedSVG

        }
    }
    }
}

`

 const About = () => {


const {aboutImage}=useStaticQuery(aboutImg)

    return (
        <section className={styles.about}>
            
            <Title title="about" subtitle="us" />


             <div className={styles.aboutCenter}>

                 <article className={styles.aboutImg}>

                     <div className={styles.imgContainer}>

                         {/* <img src={img} alt="wait"/> */}

<Img alt="wait" fluid={aboutImage.childImageSharp.fluid} />

                     </div>

                 </article>


<article className={styles.aboutInfo}>

    <h4>
        explore the difference 
    </h4>

    <p>
lorem ipsum dolor sit amet, consectetur adip


lorem ipsum dolor sit amet, con

lorem ipsum dolor sit amet,
    </p>

<button type="button" className="btn-primary">
read more
</button>

</article>

             </div>

        </section>
    )
}

export default About