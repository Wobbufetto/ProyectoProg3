export interface ArticleModel{
    id: string;
    title: string;
    abstract : string;
    keywords: string;
    authorName : string;
    authorSurname: string;
    articlePDf : File;
    state : string;
    date: Date;
    image: string;
}