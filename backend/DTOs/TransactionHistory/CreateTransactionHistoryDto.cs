using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs.TransactionHistory
{
    public class CreateTransactionHistoryDto
    {
        [Required]
        public int SavingBookId { get; set; }

        [Required]
        public string TransactionType { get; set; } = string.Empty;

        [Required]
        public decimal Amount { get; set; }
    }
}