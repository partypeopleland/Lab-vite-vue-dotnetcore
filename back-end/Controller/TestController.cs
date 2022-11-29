using Microsoft.AspNetCore.Mvc;

namespace back_end.Controller;

[Route("/api/[controller]")]
public class TestController : Microsoft.AspNetCore.Mvc.Controller
{
    public IActionResult Index()
    {
        return Ok("Test Result");
    }
}