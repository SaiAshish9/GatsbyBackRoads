import React from 'react'

import {useStaticQuery,graphql} from 'gatsby'

const Header = () => {

const {site:{siteMetadata}}=useStaticQuery(graphql`

query A{
site{
    siteMetadata{
        title
    }
}
}
`)


    return (
        <div>
            <h1>
                title :{siteMetadata.title}
            </h1>
        </div>
    )
}

export default Header
