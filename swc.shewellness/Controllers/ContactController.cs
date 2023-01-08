using Microsoft.AspNetCore.Mvc;
using swc.shewellness.Models;

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

        [HttpPost] public ActionResult Index(ContactModel client)
        {
            string firstName = client.FirstName;
            string lastName = client.LastName;
            string emailAddress = client.EmailAddress;
            string message = client.Message;
            return View();
        }


    }
}
