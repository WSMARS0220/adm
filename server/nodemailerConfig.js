import nodemailer from 'nodemailer'

export default function handleEmailSend(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'admautobodyshop@gmail.com',
      pass: 'james1987'
    },
  })
  let text = 'Hello world from \n\n' + req.body.name;

  let mailOptions = {
    from: 'admautobodyshop@gmail.com', // sender address
    to: 'zhang_mingshuo@hotmail.com', // list of receivers
    cc: 'admautobodyshop@gmail.com',
    subject: 'Email Example', // Subject line
    text: text, //, // plaintext body
    attachments: [
      {
        filename: 'temp.png',
        path: req.body.files[0]
      }
    ]
    // html: '<img src='+req.body.files[0]+'/>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error)
      res.json({error: 'error'})
    } else {
      console.log('Message sent to ' + req.body.email + ': ' + info.response)
      res.json({message: 'Email has sent to ' + req.body.email + '...'})
    }
  })
}
