'use strict';

module.exports = function (Article) {
    Article.findByAuthor = function (authorName, cb){
        Article.find({ 
            where: { 
                authorName: authorName
            }
        }, cb);
    };

    Article.remoteMethod("findByAuthor", {
        accepts: {
            arg: "authorName",
            type: "string"
        },
        returns: {
            arg: "names",
            type: "array"
        },
        http: {
            path: "/get-article-by-author",
            verb: "get"
        }
    })
};
