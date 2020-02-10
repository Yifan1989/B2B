using System;
using System.ComponentModel.DataAnnotations;
namespace Sunning.Models
{
    public class Warehouse
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string owner { get; set; }
        public string comment { get; set; }

        public Warehouse()
        {
        }
    
    }
}
