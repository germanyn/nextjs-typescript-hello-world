export interface Article {
    id: number | string
    title: string
    body: string
    excerpt: string
    userId?: number
}