using BankSavingManagement.Data;
using BankSavingManagement.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BankSavingManagement.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("deposit")]
        public IActionResult Deposit(int bookId, decimal amount)
        {
            var book = _context.SavingBooks.Find(bookId);

            if (book == null)
                return NotFound();

            book.Balance += amount;

            _context.TransactionHistories.Add(new TransactionHistory
            {
                SavingBookId = bookId,
                Amount = amount,
                TransactionType = "DEPOSIT"
            });

            _context.SaveChanges();

            return Ok(book);
        }

        [HttpPost("withdraw")]
        public IActionResult Withdraw(int bookId, decimal amount)
        {
            var book = _context.SavingBooks.Find(bookId);

            if (book == null)
                return NotFound();

            if (book.Balance < amount)
                return BadRequest("Số dư không đủ");

            book.Balance -= amount;

            _context.TransactionHistories.Add(new TransactionHistory
            {
                SavingBookId = bookId,
                Amount = amount,
                TransactionType = "WITHDRAW"
            });

            _context.SaveChanges();

            return Ok(book);
        }
    }
}