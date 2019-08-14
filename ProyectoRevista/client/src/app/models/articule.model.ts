export interface ArticleModel{
    id: string;
    title: string;
    abstract: string;
    keywords: string;
    authorName: string;
    authorSurname: string;
    authorEmail: string;
    authorAfil: string;
    articlePDf: string;
    state: string;
    date: Date;
    image: string;
    numEdition: number;
    score: number;
}