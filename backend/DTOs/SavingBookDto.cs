namespace Backend.DTOs
{
    public class SavingBookDTO
    {
        public int CustomerId { get; set; }

        public string BookNumber { get; set; } = string.Empty;

        public decimal Balance { get; set; }

        public float InterestRate { get; set; }

        public int TermMonth { get; set; }

        public DateTime OpenDate { get; set; }

        public string Status { get; set; } = "Active";
    }
}