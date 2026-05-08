using BankSavingManagement.Data;
using BankSavingManagement.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BankSavingManagement.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SavingBookController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SavingBookController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.SavingBooks.ToList());
        }

        [HttpPost]
        public IActionResult Create(SavingBook model)
        {
            model.OpenDate = DateTime.Now;
            model.Status = "ACTIVE";

            _context.SavingBooks.Add(model);
            _context.SaveChanges();

            return Ok(model);
        }
    }
}