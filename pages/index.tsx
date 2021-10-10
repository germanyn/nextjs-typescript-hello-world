import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { SERVER_URL } from '../config'
import { Article } from '../types/Articles'

interface Props {
  articles: Article[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <ArticleList
        articles={articles}
      />
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`${SERVER_URL}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }