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

  let files = []
  if (req.body.filesName.length > 0) {
    const l = req.body.filesName.length
    for (let i=0; i<l; i++) {
      files.push({
        filename: req.body.filesName[i],
        path: req.body.files[i]
      })
    }
  }

  let subject = req.body.year + ' ' + req.body.make + ' ' + req.body.model + ' ' + req.body.color

  let text = 'Dear ' + req.body.name + ',' + '\n' + '\n' +
             'Thank you for email us!'

  let mailOptions = {
    from: 'admautobodyshop@gmail.com', // sender address
    to: req.body.email, // list of receivers
    cc: 'admautobodyshop@gmail.com',
    subject: subject, // Subject line
    text: text, //, // plaintext body
    attachments: files
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
