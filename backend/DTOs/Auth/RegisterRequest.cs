namespace BankSavingManagement.API.DTOs.Auth
{
    public class RegisterRequest
    {
        public string FullName { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}