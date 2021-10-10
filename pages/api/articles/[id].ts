// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'
import { Article } from '../../../types/Articles'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article | { message: string }>
) {
    const { id } = req.query
    const article = articles.find(article => article.id === id)
    if (!article) {
        return res.status(404).send({
            message: `Article ${id} not found!`
        })
    }
    res.send(article)
}
