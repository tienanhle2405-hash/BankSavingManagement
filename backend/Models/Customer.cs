namespace Backend.Models
{
    public class Customer
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }
        public ICollection<SavingBook> SavingBooks { get; set; }
            = new List<SavingBook>();

    }
}