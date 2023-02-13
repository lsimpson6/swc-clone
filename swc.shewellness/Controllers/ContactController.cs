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

        // form specific
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(ContactModel model)
        {
            if (ModelState.IsValid)
            {
                var body = "<p>Email From: {0} ({1})</p><p>Message:</p><p>{2}</p>";
                var message = new MailMessage();
                message.To.Add(new MailAddress("simpson.logan19@gmail.com"));  // replace with valid value 
                message.From = new MailAddress(model.Email);  // replace with valid value
                message.Subject = "Your email subject";
                message.Body = string.Format(body, model.Name, model.Email, model.Message);
                message.IsBodyHtml = true;

                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "simpson.logan19@gmail.com",  // replace with valid value
                        Password = "S0ccer4l1fe019"  // replace with valid value
                    };
                    smtp.Credentials = credential;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    await smtp.SendMailAsync(message);
                    smtp.Send(message);
                    return RedirectToAction("ThankYou");
                }
            }
            return View(model);

        }


    }
}
