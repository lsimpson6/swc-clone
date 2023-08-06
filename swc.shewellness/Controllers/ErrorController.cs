using Microsoft.AspNetCore.Mvc;
using swc.shewellness.Models;


namespace swc.shewellness.Controllers
{
    public class ErrorController : Controller
    {
        [Route("/Error/NotFound")]
        public IActionResult NotFound(ErrorModel model, int errorCode)
        {
            model.ErrorCode = errorCode;
            return View("NotFound", model);
        }
    }
}
