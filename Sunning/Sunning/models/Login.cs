using System;
using System.ComponentModel.DataAnnotations;

namespace Sunning.Models
{
    public class Login
    {
        [Key]
        public string user { get; set; }
        public string passwd { get; set; }
        public Login()
        {
        }
    }
}
