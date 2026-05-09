using BankSavingManagement.Data;
using BankSavingManagement.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            var data = _context.SavingBooks
                .Include(x => x.TransactionHistories)
                .ToList();

            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var savingBook = await _context.SavingBooks
                .Include(x => x.TransactionHistories)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (savingBook == null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy sổ tiết kiệm"
                });
            }

            return Ok(savingBook);
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SavingBook model)
        {
            model.OpenDate = DateTime.Now;
            model.Status = "ACTIVE";

            _context.SavingBooks.Add(model);

            await _context.SaveChangesAsync();

            return Ok(model);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] SavingBook updatedModel)
        {
            var savingBook = await _context.SavingBooks.FindAsync(id);

            if (savingBook == null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy sổ tiết kiệm"
                });
            }

            savingBook.CustomerId = updatedModel.CustomerId;
            savingBook.BookNumber = updatedModel.BookNumber;
            savingBook.Balance = updatedModel.Balance;
            savingBook.InterestRate = updatedModel.InterestRate;
            savingBook.TermMonth = updatedModel.TermMonth;
            savingBook.Status = updatedModel.Status;

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Cập nhật sổ tiết kiệm thành công",
                data = savingBook
            });
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var savingBook = await _context.SavingBooks.FindAsync(id);

            if (savingBook == null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy sổ tiết kiệm"
                });
            }

            _context.SavingBooks.Remove(savingBook);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Xóa sổ tiết kiệm thành công"
            });
        }
    }
}