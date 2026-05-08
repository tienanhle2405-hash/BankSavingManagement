using BankSavingManagement.Data;
using BankSavingManagement.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BankSavingManagement.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CustomerController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Customers.ToList());
        }

       [HttpPost]
public async Task<IActionResult> Create([FromBody] Customer customer)
{
    _context.Customers.Add(customer);

    await _context.SaveChangesAsync();

    return Ok(customer);
}
    }
}