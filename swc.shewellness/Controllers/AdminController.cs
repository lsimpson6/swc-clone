using Microsoft.AspNetCore.Mvc;
using swc.shewellness.Models;
using System.Diagnostics;
using System.Net.Mail;

namespace swc.shewellness.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index(AdminModel model)
        {
            return View(model);
        }

        public IActionResult Edit()
        {
            return View();
        }

        public IActionResult Newsletter()
        {
            return View();
        }

        public ActionResult SendNewsletter(SendEmailViewModel emailModel)
        {
            var timeStamp = System.DateTime.Now;
            try
            {
                if (ModelState.IsValid)
                {
                    MailMessage mail = new MailMessage();
                    mail.To.Add(emailModel.EmailList);
                    //mail.To.Add("simpson.logan19@gmail.com");
                    mail.From = new MailAddress("simpson.logan19@gmail.com");
                    mail.Subject = $"She Wellness Newsletter";
                    //mail.Sender = new MailAddress(m.Email);

                    string body = $"<div style='width: 100%; height: 250px; background-image: url({emailModel.ImageOne}); background-size: cover; background-position: center;'></div>" +
                        $"{emailModel.Heading}" +
                        $"{emailModel.Subheading}" +
                        $"{emailModel.Description}" +
                        $"{emailModel.Resources}";

                    mail.Body = body;
                    mail.IsBodyHtml = true;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    //smtp.Credentials = new System.Net.NetworkCredential("shewellnessco@gmail.com", "jrnfedmwdlxzexkm");
                    smtp.Credentials = new System.Net.NetworkCredential("simpson.logan19@gmail.com", "qtjcywpuljqrhycz");
                    smtp.EnableSsl = true;
                    smtp.UseDefaultCredentials = false;
                    smtp.Send(mail);



                    return View("Newsletter", emailModel);
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
