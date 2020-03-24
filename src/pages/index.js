import React from "react"

import {Layout} from '../components/Layout'

import {Link} from 'gatsby'


import SimpleHero from '../components/SimpleHero'

// import 'bootstrap/dist/css/bootstrap.min.css'

import Banner from '../components/Banner'


import About from '../components/Home/About'

import Services from '../components/Home/Services'


export default () => (

    <>
    <Layout >
  
  <SimpleHero>

<Banner title="continue exploring" info="lorem ipsum dolor sit amet, consectetur adip">


<Link to="/tours" className="btn-white">
explore tours
</Link>

</Banner>


  </SimpleHero> 

<About/>

<Services/>

    </Layout>
    </>
    
)
