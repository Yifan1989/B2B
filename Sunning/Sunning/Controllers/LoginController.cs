using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Sunning.Data;
using Sunning.Models;
using System.Threading.Tasks;
using Sunning.Entities;

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

        [HttpPost("{user}")]
        public async Task<IActionResult> CheckLogin([FromBody] Login loginUser)
        {
            var result = _db.Logins.Where(x => x.passwd == loginUser.passwd);
            if (result == null)
            {
                return new JsonResult("Password is not correct!");
            }
            return new JsonResult("Login Successfully!");
        }

        [HttpGet]
        public IQueryable<LoginDTO> GetLogins()
        {
            var logins = from log in _db.Logins
                         select new LoginDTO()
                         {
                             user = log.user,
                             passwd = log.passwd
                         };
            return logins;
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
