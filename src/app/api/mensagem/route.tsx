import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const htmlEmailTemplate = (
  name: string,
  title: string,
  email: string,
  message: string,
) => {
  return `<div style="border: 2px solid gray; padding: 30px;">
  <p><strong>Autor</strong>: ${name}</p>
  <p><strong>Título</strong>: ${title}</p>
  <p><strong>Remetente</strong>: ${email}</p>
  <p><strong>Mensagem</strong>: ${message}</p>
  </div>`
}

export async function POST(request: NextRequest) {
  const { name, title, email, message, token } = await request.json()

  if (!name || !title || !email || !message) {
    return NextResponse.json(
      { erro: 'Faltam dados obrigatórios para a submissão.' },
      { status: 400 },
    )
  }

  if (!token)
    return NextResponse.json(
      { erro: 'O ReCAPTCHA não foi devidamente marcado.' },
      { status: 400 },
    )

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { erro: 'O e-mail inserido não é válido.' },
      { status: 400 },
    )
  }

  try {
    const result = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_CHAVE_PRIVADA}&response=${token}`,
      { method: 'POST' },
    )
    const data = await result.json()
    if (!data.success) {
      return NextResponse.json(
        { erro: 'O envio deve ser realizado por humanos.' },
        { status: 400 },
      )
    }
  } catch (error) {
    return NextResponse.json(
      { erro: 'Não foi possível validar se você é humano.' },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: title,
      html: htmlEmailTemplate(name, title, email, message),
    })
    return NextResponse.json({ name, title, email, message }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { erro: 'A mensagem não pôde ser enviada.' },
      { status: 500 },
    )
  }
}
