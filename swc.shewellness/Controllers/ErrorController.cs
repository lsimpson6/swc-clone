using Microsoft.AspNetCore.Mvc;

namespace swc.shewellness.Controllers
{
    public class ErrorController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
