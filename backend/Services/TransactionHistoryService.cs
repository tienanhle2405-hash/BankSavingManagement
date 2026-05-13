using Backend.Data;
using Backend.DTOs.TransactionHistory;
using Backend.Models;
using Backend.Repositories.Interfaces;
using Backend.Services.Interfaces;

namespace Backend.Services
{
    public class TransactionHistoryService : ITransactionHistoryService
    {
        private readonly ITransactionHistoryRepository _repository;
        private readonly AppDbContext _context;

        public TransactionHistoryService(
            ITransactionHistoryRepository repository,
            AppDbContext context
        )
        {
            _repository = repository;
            _context = context;
        }

        // GET ALL
        public async Task<List<TransactionHistoryResponseDto>> GetAllAsync()
        {
            var data = await _repository.GetAllAsync();

            return data.Select(MapToDto).ToList();
        }

        // GET BY ID
        public async Task<TransactionHistoryResponseDto?> GetByIdAsync(int id)
        {
            var transaction = await _repository.GetByIdAsync(id);

            if (transaction == null)
            {
                return null;
            }

            return MapToDto(transaction);
        }

        // GET BY SAVING BOOK ID
        public async Task<List<TransactionHistoryResponseDto>>
            GetBySavingBookIdAsync(int savingBookId)
        {
            var data = await _repository.GetBySavingBookIdAsync(savingBookId);

            return data.Select(MapToDto).ToList();
        }

        // CREATE
        public async Task<TransactionHistoryResponseDto> CreateAsync(
            CreateTransactionHistoryDto dto
        )
        {
            // Check saving book exists
            var savingBook = await _context.SavingBooks.FindAsync(dto.SavingBookId);

            if (savingBook == null)
            {
                throw new Exception("SavingBook not found");
            }

            // Business Logic
            if (dto.TransactionType == "Deposit")
            {
                savingBook.Balance += dto.Amount;
            }
            else if (dto.TransactionType == "Withdraw")
            {
                if (savingBook.Balance < dto.Amount)
                {
                    throw new Exception("Insufficient balance");
                }

                savingBook.Balance -= dto.Amount;
            }

            // Create transaction
            var transaction = new TransactionHistory
            {
                SavingBookId = dto.SavingBookId,
                TransactionType = dto.TransactionType,
                Amount = dto.Amount,
                TransactionDate = DateTime.UtcNow
            };

            var created = await _repository.CreateAsync(transaction);

            // Save balance update
            await _context.SaveChangesAsync();

            return MapToDto(created);
        }

        // UPDATE
        public async Task<TransactionHistoryResponseDto?> UpdateAsync(
            int id,
            UpdateTransactionHistoryDto dto
        )
        {
            var transaction = new TransactionHistory
            {
                Id = id,
                TransactionType = dto.TransactionType,
                Amount = dto.Amount
            };

            var updated = await _repository.UpdateAsync(transaction);

            if (updated == null)
            {
                return null;
            }

            return MapToDto(updated);
        }

        // DELETE
        public async Task<bool> DeleteAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }

        // MAP DTO
        private TransactionHistoryResponseDto MapToDto(TransactionHistory x)
        {
            return new TransactionHistoryResponseDto
            {
                Id = x.Id,
                SavingBookId = x.SavingBookId,
                TransactionType = x.TransactionType,
                Amount = x.Amount,
                TransactionDate = x.TransactionDate
            };
        }
    }
}