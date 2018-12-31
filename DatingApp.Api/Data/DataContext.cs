using DatingApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users {get; set;}
        public DbSet<Photo> Photos {get; set;}
        //protected override void OnConfiguring (DbContextOptionsBuilder optionBuilder)
        //{
        //    optionBuilder.UseSqlServer(@"Server=PC-HB;Database=CoreDb;Trusted_Connection=True;");
        //}
    }
}