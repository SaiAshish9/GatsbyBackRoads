import React from 'react'


import Title from '../Title'

import styles from '../../css/services.module.css'

import services from '../../constants/services'

const Services = () => {
    return (
        <section className={styles.services}>
            
            <Title title="our" subtitle="services"/>


                
<div className={styles.center}>
{
    services.map((i,k)=>{
        return (
<article className={styles.service} key={k}>
<span>
    {i.icon}
    </span>


    <h4>
        {i.title}
    </h4>

    <p>
        {i.text}
    </p>
</article>
        )
    })
}
</div>

        </section>
    )
}

export default Services
