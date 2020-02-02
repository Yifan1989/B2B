using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Sunning.Data;
using Sunning.models;
using System.Threading.Tasks;

namespace Sunning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController: ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public LoginController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetLogins()
        {
            return Ok(_db.Logins.ToList());
        }
    }
}
