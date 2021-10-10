import React from 'react'
import styles from '../styles/Article.module.css'
import { Article } from '../types/Articles'
import ArticleItem from './ArticleItem'

interface Props {
    articles: Article[]
}

const ArticleList: React.FC<Props> = ({ articles}) => {
    return (
        <div className={styles.grid}>
            {articles.map(article => (
                <ArticleItem article={article} key={article.id} />
            ))}
        </div>
    )
}

export default ArticleList
