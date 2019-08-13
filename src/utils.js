import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env")});

import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport"
import utils from "./utils"

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  }
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email)
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "sztolabs@gmail.com",
    to: address,
    subject: "⚽️로그인 비밀번호⚽️",
    html: `로그인 비밀번호입니다. ${secret} <br/> 앱에 붙여넣기를 하시면 됩니다.`
  }
  return sendMail(email);
}