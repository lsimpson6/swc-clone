using Microsoft.AspNetCore.Mvc;
using swc.shewellness.Models;
using System.Net;
using System.Net.Mail;

namespace swc.shewellness.Controllers
{
    public class ContactController : Controller
    {
        // for page

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Bookings()
        {
            return View();
        }

        // form specific
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(ContactModel m)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    WriteEmail(m);
                    return View("ThankYou", m);
                }
                else
                {
                    return View("Error");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return View("Error");
            }
        }

        public void WriteEmail(ContactModel m)
        {
            var timeStamp = System.DateTime.Now;
            var sendNewsletter = "";
            if (m.NewsletterSignUp)
            {
                sendNewsletter = $"<br/><br/>" +
                 $"{m.FirstName} <span style='font-weight: bold;'>would like</span> to receive your monthly newsletters.";
            }
            string body = $"<div style='width: 100%; height: 250px; background-image: url(https://i.imgur.com/gDGwHcJ.png); background-size: cover; background-position: center;'></div>" +
                $"<p>Hey Amber, {m.FirstName} {m.LastName} sent you a message! " +
                $"<br/><br/>" +
                $"From {m.FirstName}," +
                $"<br/>" +
                $"{m.Message}" + sendNewsletter +
                $"<br/><br/>" +
                $"Reply to {m.FirstName} by email at <a href='mailto:{m.Email}'>{m.Email}</a>" +
                $"<br/><br/>" +
                $"This email was sent upon form submission on She Wellness Co at {timeStamp}</p>";

            var url = "https://shewellnessco.azurewebsites.net/";
            string confirmationBody = $"<div style='width: 100%; height: 250px; background-image: url(https://i.imgur.com/gDGwHcJ.png); background-size: cover; background-position: center;'></div>" +
                $"<p style='font-size: 1em;'>Hey {m.FirstName}! <br/><br/> I'm so glad you reached out to take the first step in taking back control of your health. <br/><br/> I'm working hard to get you the best response for your needs and will get back to you as soon as possible! In the meantime if you've decided you're just ready to get started together, you can schedule your <a href='{url}' target='_blank'>initial consultation or free discovery call here</a> <br/><br/>To your health, <br/>Amber</p>";

            SendFormEmail(body, m);
            SendConfirmationEmail(confirmationBody, m);
        }

        public void SendFormEmail(string body, ContactModel m)
        {
            MailMessage mail = new MailMessage();
            mail.To.Add("shewellnessco@gmail.com");
            //mail.To.Add("simpson.logan19@gmail.com");
            mail.From = new MailAddress(m.Email);
            mail.Subject = $"{m.FirstName}, just sent you a message!";
            //mail.Sender = new MailAddress(m.Email);

            mail.Body = body;
            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.Credentials = new System.Net.NetworkCredential("shewellnessco@gmail.com", "jrnfedmwdlxzexkm");
            //smtp.Credentials = new System.Net.NetworkCredential("simpson.logan19@gmail.com", "qtjcywpuljqrhycz");
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Send(mail);
        }

        public void SendConfirmationEmail(string body, ContactModel m)
        {
            MailMessage confirmationMail = new MailMessage();
            confirmationMail.To.Add(m.Email);
            confirmationMail.From = new MailAddress("noreply.shewellnessco@gmail.com");
            confirmationMail.Subject = m.FirstName + ", we recieved your message!";


            confirmationMail.Body = body;
            confirmationMail.IsBodyHtml = true;

            SmtpClient smtpConfirmation = new SmtpClient();
            smtpConfirmation.Host = "smtp.gmail.com";
            smtpConfirmation.Port = 587;
            smtpConfirmation.Credentials = new System.Net.NetworkCredential("shewellnessco@gmail.com", "jrnfedmwdlxzexkm");
            //smtpConfirmation.Credentials = new System.Net.NetworkCredential("simpson.logan19@gmail.com", "qtjcywpuljqrhycz");
            smtpConfirmation.EnableSsl = true;
            smtpConfirmation.UseDefaultCredentials = false;
            smtpConfirmation.Send(confirmationMail);
        }


    }
}
