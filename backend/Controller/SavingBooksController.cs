using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using Backend.Services.Interfaces;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavingBooksController : ControllerBase
    {
        private readonly ISavingBookService _service;

        public SavingBooksController(ISavingBookService service)
        {
            _service = service;
        }

        // GET: api/savingbooks
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var savingBooks = await _service.GetAllAsync();

            return Ok(savingBooks);
        }

        // GET: api/savingbooks/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var savingBook = await _service.GetByIdAsync(id);

            if (savingBook == null)
                return NotFound(new
                {
                    message = "SavingBook not found"
                });

            return Ok(savingBook);
        }

        // POST: api/savingbooks
        [HttpPost]
        public async Task<IActionResult> Create(SavingBookDTO dto)
        {
            var created = await _service.CreateAsync(dto);

            return Ok(created);
        }

        // PUT: api/savingbooks/1
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, SavingBookDTO dto)
        {
            var updated = await _service.UpdateAsync(id, dto);

            if (!updated)
                return NotFound(new
                {
                    message = "SavingBook not found"
                });

            return Ok(new
            {
                message = "Update successful"
            });
        }

        // DELETE: api/savingbooks/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);

            if (!deleted)
                return NotFound(new
                {
                    message = "SavingBook not found"
                });

            return Ok(new
            {
                message = "Delete successful"
            });
        }
    }
}