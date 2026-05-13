using BankSavingManagement.API.DTOs.Auth;
using BankSavingManagement.API.Helpers;
using Backend.Models;
using BankSavingManagement.API.Repositories.Interfaces;
using Backend.Services.Interfaces;
namespace BankSavingManagement.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _repository;

        private readonly JwtHelper _jwtHelper;

        public AuthService(
            IAuthRepository repository,
            JwtHelper jwtHelper
        )
        {
            _repository = repository;
            _jwtHelper = jwtHelper;
        }

        public async Task<AuthResponse> LoginAsync(LoginRequests request)
        {
            var user = await _repository
                .GetByUsernameAsync(request.Username);

            if (user == null)
            {
                throw new Exception("User not found");
            }

         bool checkPassword =   request.Password == user.PasswordHash;

            if (!checkPassword)
            {
                throw new Exception("Wrong password");
            }

            var token = _jwtHelper.GenerateToken(user);

            return new AuthResponse
            {
                Token = token,
                Username = user.Username,
                Role = user.Role
            };
        }

        public async Task<string> RegisterAsync(RegisterRequest request)
        {
            var exist = await _repository
                .GetByUsernameAsync(request.Username);

            if (exist != null)
            {
                throw new Exception("Username already exists");
            }

            var user = new Users
            {
                FullName = request.FullName,
                Username = request.Username,
                PasswordHash = request.Password,
                Role = "User"
            };

            await _repository.RegisterAsync(user);

            return "Register success";
        }
    }
}