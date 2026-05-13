using BankSavingManagement.API.DTOs.Auth;
namespace Backend.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponse> LoginAsync(LoginRequests request);

        Task<string> RegisterAsync(RegisterRequest request);
    }
}