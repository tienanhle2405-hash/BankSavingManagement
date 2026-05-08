namespace BankSavingManagement.Models
{
    public class TransactionHistory
    {
        public int Id { get; set; }
        public int SavingBookId { get; set; }
        public string TransactionType { get; set; }
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; } = DateTime.Now;

        public SavingBook? SavingBook { get; set; }
    }
}