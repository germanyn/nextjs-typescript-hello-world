import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Article } from '../../types/Articles'
import { ParsedUrlQuery } from 'querystring'
import { SERVER_URL } from '../../config'
import Meta from '../../components/Meta'
import ArticleService from '../../services/ArticleService'

const article: React.FC<Props> = ({ article }: Props) => {
    return (
        <>
            <Meta title={article.title} description={article.excerpt}/>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article

interface ServerContext extends ParsedUrlQuery {
    ['id']: string
}

interface Props {
    article: Article
}

export const getStaticProps: GetStaticProps<Props, ServerContext> = async (context) => {
    if (!context.params?.id) throw new Error('ID not found')
    const article = ArticleService.get(context.params?.id)!
    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async() => {
    const articles: Article[] = ArticleService.list()
    return {
        paths: articles
            .map(({ id }) => id.toString())
            .map(id => ({
                params: {
                    id
                }
            })),
        fallback: false,
    }
}

// export const getStaticProps: GetStaticProps<Props, ServerContext> = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article,
//         },
//     }
// }

// export const getStaticPaths = async() => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles: Article[] = await res.json()
//     return {
//         paths: articles
//             .map(({ id }) => id.toString())
//             .map(id => ({
//                 params: {
//                     id
//                 }
//             })),
//         fallback: false,
//     }
// }

// export const getServerSideProps: GetServerSideProps<Props, ServerContext> = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article,
//         },
//     }
    
// }
