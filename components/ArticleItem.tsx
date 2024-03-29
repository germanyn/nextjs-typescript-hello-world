import React from 'react'
import { Article } from '../types/Articles'
import styles from '../styles/Article.module.css'
import Link from 'next/link'

interface Props {
    article: Article
}

const ArticleItem: React.FC<Props> = ({ article }) => {
    return (
        <Link
            href="/article/[id]"
            as={`/article/${article.id}`}
            
        >
            <a className={styles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
