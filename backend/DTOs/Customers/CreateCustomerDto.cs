namespace Backend.DTOs.Customer
{
    public class CreateCustomerDto
    {
        public string FullName { get; set; }

        public string CCCD { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }
    }
}