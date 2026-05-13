namespace Backend.DTOs.TransactionHistory
{
    public class TransactionHistoryResponseDto
    {
        public int Id { get; set; }

        public int SavingBookId { get; set; }

        public string TransactionType { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public DateTime TransactionDate { get; set; }
    }
}