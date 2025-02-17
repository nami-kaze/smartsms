import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
})

export const sendMail = async ({
  to,
  cc,
  bcc,
  subject,
  html,
  from,
}: {
  to: string
  cc?: string
  bcc?: string
  subject: string
  html: string
  from?: string
}) => {
  const options = { to, cc, bcc, subject, html, from }
  if (!from) {
    options.from = process.env.MAIL_FROM
  }

  const info = await transporter.sendMail(options)
  console.log('Message sent: %s', info.messageId)
}
