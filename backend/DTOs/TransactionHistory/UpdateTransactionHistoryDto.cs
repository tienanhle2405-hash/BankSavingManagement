using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs.TransactionHistory
{
    public class UpdateTransactionHistoryDto
    {
        [Required]
        public string TransactionType { get; set; } = string.Empty;

        [Required]
        public decimal Amount { get; set; }
    }
}