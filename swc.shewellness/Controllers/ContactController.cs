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
            var timeStamp = System.DateTime.Now;
            try
            {
                if (ModelState.IsValid)
                {
                    MailMessage mail = new MailMessage();
                    mail.To.Add("simpson.logan19@gmail.com");
                    mail.From = new MailAddress(m.Email);
                    mail.Subject = "New form submission from " + m.FirstName;
                    //mail.Sender = new MailAddress(m.Email);

                    string header = "Hey Amber! " + m.FirstName + " " + m.LastName + " just sent you a message.<br/><br/>";
                    string name = "Name: " + m.FirstName + " " + m.LastName + "<br/>";
                    string email = "Email: " + m.Email + "<br/>";
                    string message = "Message: " + m.Message + "<br/>";
                    string footer = "Reply to them at: " + m.Email + "<br/><br/> This email was sent upon form submission on She Wellness Co at " + timeStamp;

                    mail.Body = header + name + email + message + footer;
                    mail.IsBodyHtml = true;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    //smtp.Credentials = new System.Net.NetworkCredential("shewellnessco@gmail.com", "jrnfedmwdlxzexkm");
                    smtp.Credentials = new System.Net.NetworkCredential("simpson.logan19@gmail.com", "qtjcywpuljqrhycz");
                    smtp.EnableSsl = true;
                    smtp.UseDefaultCredentials = false;
                    smtp.Send(mail);
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


    }
}
