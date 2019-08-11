'use strict';

module.exports = function(Author) {
    Author.sendEmail = (message, subject, emailAddresses, cb) => {
        Author.app.models.Email.send({
            to: emailAddresses,
            from: "Vector Magazine",
            subject: subject,
            text: message,
            html: message
        }, function (err, mail){
            console.log("Email sended!!");
            if(err) return err;
        });
        cb(null,'message sent: ' + message);
    }

    Author.remoteMethod('sendEmail',{
        http:{
            path:'/sendEmail',
            verb: 'get'
        },
        description: [
            "Api to send email messages."
        ],
        accepts: [
            {
                arg: 'message',
                type: 'string',
                required: true
            },
            {
                arg: 'subject',
                type: 'string',
                required: true
            },
            {
                arg: 'emailAddresses',
                type: 'string',
                required: true
            }
        ],
        returns: { arg: 'response', type: 'string' }
    })
};
