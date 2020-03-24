

module.exports = {

siteMetadata:{
title:"BackRoads",
description:"Explore awesome worldwide tours and discover what make each of them unique",
author:"sai" ,
data:['1','2']
}, 
  plugins:[

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
   
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
     'gatsby-plugin-sass',
    
     `gatsby-plugin-styled-components`

]
}
