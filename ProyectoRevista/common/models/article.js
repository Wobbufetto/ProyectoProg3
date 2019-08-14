'use strict';

module.exports = function (Article) {
    Article.findByAuthor = function (authorName, cb) {
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

    Article.findByEdition = function (numEdition, cb){
        Article.find({
            where: {
                numEdition:{
                    eq : numEdition
                }
            }
        }, cb);
    };

    Article.remoteMethod("findByEdition", {
        accepts: {
            arg: "numEdition",
            type: "number"
        },
        returns: {
            arg: "names",
            type: "array"
        },
        http: {
            path: "/get-article-by-edition",
            verb: "get"
        }
    })

};
