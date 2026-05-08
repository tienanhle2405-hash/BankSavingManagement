using BankSavingManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace BankSavingManagement.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<SavingBook> SavingBooks { get; set; }

        public DbSet<TransactionHistory> TransactionHistories { get; set; }
    }
}