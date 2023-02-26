import * as mom from "smtpjs"



 function sendEmail()
{
    mom.send({
      Host: "smtp.gmail.com",
      Username: "elamranimohammed104@gmail.com",
      Password: "12345678999",
      To: 'amranimohamad040@gmail.com',
      From: "elamranimohammed104@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy you reseaved this one !!",
    })
      .then( (message) => {
        alert("mail sent successfully")
      });
  }