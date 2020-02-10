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
    }
}
