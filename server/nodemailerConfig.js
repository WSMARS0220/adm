import nodemailer from 'nodemailer'

export default function handleEmailSend(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'mszhang0220@gmail.com',
      pass: 'Asdfg456@'
    },
  })
  let text = 'Hello world from \n\n' + req.body.name;

  let mailOptions = {
    from: 'mszhang0220@gmail.com', // sender address
    to: req.body.email, // list of receivers
    cc: 'mszhang0220@gmail.com',
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world âœ”</b>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error)
      res.json({yo: 'error'})
    } else {
      console.log('Message sent: ' + info.response)
      res.json({message: 'Email has sent to ' + req.body.email + '...'})
    }
  })
}
