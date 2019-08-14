'use strict';

module.exports = function(Evaluator) {
    Evaluator.sendEmail = (message, subject, emailAddresses, cb) => {
        Evaluator.app.models.Email.send({
            to: emailAddresses,
            from: "Vector Magazine Evaluator",
            subject: subject,
            text: message,
            html: message
        }, function (err, mail) {
            console.log("Email sended!!");
            if (err) return err;
        });
        cb(null, 'message sent: ' + message);
    }

    Evaluator.remoteMethod('sendEmail', {
        http: {
            path: '/sendEmail',
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
