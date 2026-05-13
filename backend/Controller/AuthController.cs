using Microsoft.AspNetCore.Mvc;
using BankSavingManagement.API.DTOs.Auth;
using Backend.Services.Interfaces;

namespace BankSavingManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(
            RegisterRequest request
        )
        {
            var result = await _service.RegisterAsync(request);

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(
            LoginRequests request
        )
        {
            var result = await _service.LoginAsync(request);

            return Ok(result);
        }
    }
}