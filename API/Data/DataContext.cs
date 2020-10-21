using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Record> Records { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //seed database with dummy data
            modelBuilder.Entity<Record>().HasData(
                new Record()
                {
                    Id = 1,
                    Date = "2020-09-30T00:00:01",
                    Name = "Coles",
                    Value = 20,
                    Category = "Groceries",
                    Type = "Expense"                   
                },

                new Record()
                {
                    Id = 2,
                    Date = "2020-10-01T00:00:01",
                    Name = "Traslink",
                    Value = 30,
                    Category = "Transportation",
                    Type = "Expense"                   
                },

                new Record()
                {
                    Id = 3,
                    Date = "2020-10-02T00:00:01",
                    Name = "Cafe 63",
                    Value = 22,
                    Category = "Eating Out",
                    Type = "Expense"                   
                }
            );
        }
    }
}