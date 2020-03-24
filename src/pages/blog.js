import React from 'react'

import {Link} from 'gatsby'

import {Layout} from '../components/Layout'

// import {graphql} from 'gatsby'

 const blog = (props) => {
    return (
        <Layout>
            

<Link to="/">
home
</Link>


        </Layout>
    )
}

// {props.data.site.siteMetadata.title}
// export const query=graphql`
// {
// site{
//         siteMetadata{
//             title
//     }
// }}
// `

export default blog
