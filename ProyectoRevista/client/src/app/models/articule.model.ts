export interface ArticleModel{
    id: string;
    title: string;
    abstract: string;
    keywords: string;
    authorName: string;
    authorSurname: string;
    authorEmail: string;
    authorAfil: string;
    articlePDF: string;
    state: string;
    date: Date;
    numEdition: number;
    score: number;
}