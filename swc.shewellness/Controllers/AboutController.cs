using Microsoft.AspNetCore.Mvc;

namespace swc.shewellness.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
