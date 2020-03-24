import React from 'react'

import Title from '../Title'

import styles from '../../css/about.module.css'

import img from '../../images/defaultBcg.jpeg'

 const About = () => {
    return (
        <section className={styles.about}>
            
            <Title title="about" subtitle="us" />


             <div className={styles.aboutCenter}>

                 <article className={styles.aboutImg}>

                     <div className={styles.imgContainer}>

                         <img src={img} alt="wait"/>

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