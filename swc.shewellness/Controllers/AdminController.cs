using Microsoft.AspNetCore.Mvc;

namespace swc.shewellness.Controllers
{
    public class AdminController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
