import { articles } from "../data";

export default class ArticleService {
    static list() {
        return articles
    }
    static get(id: string) {
        return articles.find(article => article.id === id)
    }
}