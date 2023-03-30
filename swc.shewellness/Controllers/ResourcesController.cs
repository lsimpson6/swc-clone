using Microsoft.AspNetCore.Mvc;

namespace swc.shewellness.Controllers
{
    public class ResourcesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
