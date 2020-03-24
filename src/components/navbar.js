import React,{useState} from 'react'

import {Link} from 'gatsby'

import {FaAlignRight} from 'react-icons/fa'

import styles from '../css/navbar.module.css'

import links from '../constants/links'

import socialIcons from '../constants/social-icons'

import logo from '../images/logo.svg'

export const Navbar = () => {


const [isOpen,setNav]=useState(false)

const toggleNav=()=>{
    setNav(isOpen=>!isOpen)
}



    return (

<nav className={styles.navbar}>

<div className={styles.navCenter}>

<div className={styles.navHeader}>

<img src={logo} alt="wait"  />

<button type="button" className={styles.logoBtn}
onClick={toggleNav}
>
<FaAlignRight className={styles.logoIcon}/>
</button>

</div>

<ul 
className={isOpen?`${styles.navLinks} ${styles.showNav}`:
`${styles.navLinks}`
}>

{links.map((i,k)=>{
    return (
        <li key={k}> 
          <Link to={i.path}>
          {i.text}
          </Link>
        </li>
    )
})}

</ul>

<div className={styles.navSocialLinks} >

{socialIcons.map((i,k)=>{
return (
    <a key={k} href={i.url} target="_blank"
    rel="noopener noreferrer"
    
    >
{i.icon}
    </a>
)
})}

</div>


</div>

</nav>


)
}
