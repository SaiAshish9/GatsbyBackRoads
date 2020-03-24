import React from 'react'


import {StaticQuery,graphql} from 'gatsby'


const getData=graphql`
query {
    site {
        siteMetadata {
            description
        }
    }
}
`

const RegularHeader = () => {
    return <StaticQuery
     query={getData}
     render={(d)=>{
     return <h1>{d.site.siteMetadata.description}</h1>
     }}
     
     />    
}

export default RegularHeader
