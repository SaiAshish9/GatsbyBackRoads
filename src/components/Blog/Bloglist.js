import React from 'react'

import BlogCard from './BlogCard'

import Title from '../Title'

import styles from '../../css/blog.module.css'

import {useStaticQuery,graphql} from 'gatsby'


const getPost=graphql`

query{
    posts:allContentfulPost(sort:{fields:createdAt,order:DESC}){
      edges{
        node{
          published(formatString:"MMMM Do, YYYY")
          title
          createdAt(formatString:"LLLL")
          slug
          id:contentful_id
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }

`

const BlogList = () => {
    
    const {posts} =useStaticQuery(getPost)
    
    return (
        <section className={styles.blog}>

            <Title title="our" subtitle="blogs"/>

<div className={styles.center}>
    {
posts.edges.map(({node}) =>{
    return (
        <BlogCard key={node.id} blog={node}/>
    )
})

    }
</div>

        </section>
    )
}

export default BlogList
