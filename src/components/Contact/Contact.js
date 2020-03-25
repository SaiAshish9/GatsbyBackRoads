import React from 'react'

import Title from '../Title'

import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us">
            </Title>

<div className={styles.center}>

<form
action="https://formspree.io/megiy95984@rushmails.com"
method="POST"
className={styles.form}>

<div>

<label htmlFor="name">
    name
</label>
<input className={styles.formControl} 
type="text"
 name="name" 
 id="name"
 placeholder="Sai Ashish"
 autoComplete="off"
/>

<label htmlFor="email">
    email
</label>
<input className={styles.formControl} 
type="email"
 name="email" 
 id="email"
 placeholder="email@email.com"
 autoComplete="off"
/>

<label htmlFor="message">
    message
</label>
<input className={styles.formControl} 
type="message"
 name="message" 
 id="message"
 placeholder="hello there"
 autoComplete="off"
/>


</div>

<div>
    <input type="submit" value="submit here" className={styles.submit}/>
</div>



</form>


</div>




        </section>
    )
}

export default Contact
