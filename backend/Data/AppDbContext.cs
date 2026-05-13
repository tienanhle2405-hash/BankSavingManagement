using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(
            DbContextOptions<AppDbContext> options
        ) : base(options)
        {
        }

    

        public DbSet<Customer> Customers { get; set; }

        public DbSet<SavingBook> SavingBooks { get; set; }

        public DbSet<TransactionHistory> TransactionHistories { get; set; }

        public DbSet<Users> Users { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        

            modelBuilder.Entity<SavingBook>()
                .HasOne(x => x.Customer)
                .WithMany(x => x.SavingBooks)
                .HasForeignKey(x => x.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);

            // =========================
            // SavingBook -> TransactionHistory
            // 1 SavingBook has many Transactions
            // =========================

            modelBuilder.Entity<TransactionHistory>()
                .HasOne(x => x.SavingBook)
                .WithMany(x => x.TransactionHistories)
                .HasForeignKey(x => x.SavingBookId)
                .OnDelete(DeleteBehavior.Cascade);



            modelBuilder.Entity<SavingBook>()
                .Property(x => x.Balance)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<TransactionHistory>()
                .Property(x => x.Amount)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<SavingBook>()
                .Property(x => x.OpenDate)
                .HasDefaultValueSql("GETUTCDATE()");

            modelBuilder.Entity<TransactionHistory>()
                .Property(x => x.TransactionDate)
                .HasDefaultValueSql("GETUTCDATE()");
        }
    }
}