using System.Collections.Generic;

namespace BankSavingManagement.Models
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

        public ICollection<TransactionHistory>? TransactionHistories { get; set; }
    }
}