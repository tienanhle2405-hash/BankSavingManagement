using System.Collections.Generic;

namespace Backend.Models
{
    public class SavingBook
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }

        public string BookNumber { get; set; }

        public decimal Balance { get; set; }

        public double InterestRate { get; set; }

        public int TermMonth { get; set; }

        public DateTime OpenDate { get; set; }

        public string Status { get; set; }

        public Customer? Customer { get; set; }

        public List<TransactionHistory> TransactionHistories { get; set; }
            = new();
    }
}