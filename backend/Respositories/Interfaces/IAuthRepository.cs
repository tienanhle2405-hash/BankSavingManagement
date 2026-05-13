using Backend.Models;

namespace BankSavingManagement.API.Repositories.Interfaces
{
    public interface IAuthRepository
    {
        Task<Users> GetByUsernameAsync(string username);

        Task<Users> RegisterAsync(Users user);
    }
}