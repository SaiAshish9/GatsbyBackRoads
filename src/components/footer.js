import React from 'react'

import styles from '../css/footer.module.css'

import links from '../constants/links'

import socialIcons from '../constants/social-icons'

import {Link} from 'gatsby'

export const Footer = () => {
    return (
     <footer className={styles.footer}>

         <div className={styles.links}>
           {links.map((i,k)=>{
               return (
                   <Link key={k} to={i.path}>
                      {i.text}
                   </Link>
               )
           })}

         </div>


<div className={styles.icons}>

{socialIcons.map((i,k)=>{
               return (
                   <a href={i.url} key={k} target="_blank" rel="noopener noreferrer">
                      {i.icon}
                   </a>
               )
           })}

</div>

<div className={styles.copyright}>
  copyright &copy; backroads {new Date().getFullYear()}
  {' '} All rights reserved
</div>

     </footer>
    )
}
