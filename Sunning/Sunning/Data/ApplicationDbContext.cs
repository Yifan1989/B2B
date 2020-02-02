using System;
using Microsoft.EntityFrameworkCore;
using Sunning.models;

namespace Sunning.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        //Data querying in Entity Framework Core is performed against the
        //DbSet properties of the DbContext. The DbSet represents a collection
        //of entities of a specific type - the type specified by the type parameter.

        // every set is like a table in the db
        public DbSet<Login> Logins { get; set; }
    }
}
