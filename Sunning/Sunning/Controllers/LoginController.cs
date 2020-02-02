using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Sunning.Data;
using Sunning.models;
using System.Threading.Tasks;

namespace Sunning.Controllers
{
    [Route("api/Login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public LoginController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        //return a list of employees from our database entity employees
        public IActionResult GetLogins()
        {
            return Ok(_db.Logins.ToList());
        }

        [HttpPost]
        public async Task<IActionResult> AddLogin([FromBody] Login objLogin)
        {
            if (!ModelState.IsValid)
            {
                return new JsonResult("Error While Creating New Login");
            }

            // this Logins is the table name in db
            _db.Logins.Add(objLogin);
            // saves all the changes to the database
            await _db.SaveChangesAsync();

            return new JsonResult("Login Created Successfully");
        }
    }
}
