using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Sunning.Data;
using Sunning.Models;
using System.Threading.Tasks;
using Sunning.Entities;

namespace Sunning.Controllers
{
    [Route("api/Warehouse")]
    [ApiController]
    public class WareHouseController: ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public WareHouseController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IQueryable<WarehouseDTO> GetWarehouses()
        {
            var warehouses = from warehouse in _db.Warehouses
                             select new WarehouseDTO()
                             {
                                 id = warehouse.id,
                                 name = warehouse.name,
                                 address = warehouse.address,
                                 owner = warehouse.owner,
                                 comment = warehouse.comment
                             };
            return warehouses;
        }

        [HttpPost]
        public async Task<IActionResult> AddWareHouse([FromBody] Warehouse objWarehouse)
        {
            //Console.WriteLine("1234567890");
            if (!ModelState.IsValid)
            {
                return new JsonResult("Error While Creating New Warehouse");
            }

            int newId = getLastWarehouseId();
            //Console.WriteLine("nbanba nbanba nbanba nbanba");
            //Console.WriteLine(newId);
            objWarehouse.id = newId + 1;

            _db.Warehouses.Add(objWarehouse);
            await _db.SaveChangesAsync();

            return new JsonResult("Warehouse Created Successfully");
        }

        public int getLastWarehouseId()
        {
            int maxId = _db.Warehouses.Max(u => u.id);
            return maxId;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWarehouse([FromRoute] int id, [FromBody] Warehouse objWarehouse)
        {
            _db.Warehouses.Update(objWarehouse);
            await _db.SaveChangesAsync();
            return new JsonResult("Warehouse Was Updated Successfully");
        }
    }
}
