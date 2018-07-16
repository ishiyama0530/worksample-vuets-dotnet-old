using Microsoft.AspNetCore.Mvc;

namespace WebApplication3.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        [ValidateAntiForgeryToken]
        [HttpPost("message/{name}")]
        public IActionResult Message(string name)
        {
            return Json(new
            {
                message = $"Good morning {name}."
            });
        }
    }
}
