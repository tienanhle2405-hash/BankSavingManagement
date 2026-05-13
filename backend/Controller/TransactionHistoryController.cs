using Backend.DTOs.TransactionHistory;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionHistoryController : ControllerBase
    {
        private readonly ITransactionHistoryService _service;

        public TransactionHistoryController(
            ITransactionHistoryService service
        )
        {
            _service = service;
        }

        // GET ALL
        // api/TransactionHistory
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _service.GetAllAsync();

            return Ok(data);
        }

        // GET BY ID
        // api/TransactionHistory/1
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var transaction = await _service.GetByIdAsync(id);

            if (transaction == null)
            {
                return NotFound(new
                {
                    message = "Transaction not found"
                });
            }

            return Ok(transaction);
        }

        // GET BY SAVING BOOK ID
        // api/TransactionHistory/savingbook/1
        [HttpGet("savingbook/{savingBookId}")]
        public async Task<IActionResult> GetBySavingBookId(int savingBookId)
        {
            var data = await _service.GetBySavingBookIdAsync(savingBookId);

            return Ok(data);
        }

        // CREATE
        // api/TransactionHistory
        [HttpPost]
        public async Task<IActionResult> Create(
            [FromBody] CreateTransactionHistoryDto dto
        )
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var created = await _service.CreateAsync(dto);

                return CreatedAtAction(
                    nameof(GetById),
                    new { id = created.Id },
                    created
                );
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = ex.Message
                });
            }
        }

        // UPDATE
        // api/TransactionHistory/1
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(
            int id,
            [FromBody] UpdateTransactionHistoryDto dto
        )
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var updated = await _service.UpdateAsync(id, dto);

                if (updated == null)
                {
                    return NotFound(new
                    {
                        message = "Transaction not found"
                    });
                }

                return Ok(updated);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = ex.Message
                });
            }
        }

        // DELETE
        // api/TransactionHistory/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);

            if (!deleted)
            {
                return NotFound(new
                {
                    message = "Transaction not found"
                });
            }

            return Ok(new
            {
                message = "Delete success"
            });
        }
    }
}