using BankSavingManagement.Data;
using BankSavingManagement.DTOs;
using BankSavingManagement.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace BankSavingManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtHelper _jwtHelper;

        public AuthController(AppDbContext context, JwtHelper jwtHelper)
        {
            _context = context;
            _jwtHelper = jwtHelper;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDTO dto)
        {
            var user = _context.Users.FirstOrDefault(x =>
                x.Username == dto.Username &&
                x.PasswordHash == dto.Password);

            if (user == null)
                return Unauthorized("Sai tài khoản hoặc mật khẩu");

            var token = _jwtHelper.GenerateToken(user);

            return Ok(new
            {
                Token = token,
                Role = user.Role
            });
        }
    }
}