import { Email } from "smtpjs"



export function sendEmail()
{
    Email.send({
      Host: "amranimohamad040.gmail.com",
      Username: "amranimohamad040@gmail.com",
      Password: "0604230466--a",
      To: 'amranimohamad040@gmail.com',
      From: "amranimohamad040@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then( (message) => {
        alert("mail sent successfully")
      });
  }