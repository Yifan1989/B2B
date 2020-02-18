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
        public JsonResult CheckLogin([FromBody] Login loginUser)
        {
            foreach(var log in _db.Logins)
            {
                if (loginUser.user.Equals(log.user) && loginUser.passwd.Equals(log.passwd))
                {
                    return new JsonResult("true");
                }
            }
            return new JsonResult("false");
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
