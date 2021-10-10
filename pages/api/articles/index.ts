// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'
import ArticleService from '../../../services/ArticleService'
import { Article } from '../../../types/Articles'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  res.status(200).json(ArticleService.list())
}
