const Email = require('email-templates');
const nodeMailer = require("nodemailer");


// Password of the email to use
var password = 'ReviewFetch2018';

var transporter = nodeMailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'ReviewFetch@gmail.com',
        pass: password
    }
});

// NOTE! - Must run test from within directory. 

const NewEmail = function(to, name, id) {

const email = new Email({
  message: {
    from: 'ReviewFetch@gmail.com'
  },
  // uncomment below to send emails in development/test env:
  send: true,
  transport: transporter,
});

return email
  .send({
    template: 'parts',
    message: {
      to: to //change to test with your own email
    },
    locals: {
      name: name,
      id: id
    }
  });
  // .then(console.log)
  // .catch(console.error);

};

// Testing
// NewEmail("kist221@gmail.com", "Test1", 1);
// NewEmail("kist221@ymail.com", "TestTwo", 3);

// Export emailer function
module.exports = NewEmail;