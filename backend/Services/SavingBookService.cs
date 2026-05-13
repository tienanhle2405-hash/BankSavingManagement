using Backend.Data;
using Backend.DTOs;
using Backend.DTOs.TransactionHistory;
using Backend.Models;
using Backend.Repositories.Interfaces;
using Backend.Services.Interfaces;

namespace Backend.Services
{
    public class SavingBookService : ISavingBookService
    {
        private readonly ISavingBookRepository _repository;

        public SavingBookService(ISavingBookRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<SavingBook>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<SavingBook?> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<SavingBook> CreateAsync(SavingBookDTO dto)
        {
            var savingBook = new SavingBook
            {
                CustomerId = dto.CustomerId,
                BookNumber = dto.BookNumber,
                Balance = dto.Balance,
                InterestRate = dto.InterestRate,
                TermMonth = dto.TermMonth,
                OpenDate = dto.OpenDate,
                Status = dto.Status
            };

            return await _repository.CreateAsync(savingBook);
        }

        public async Task<bool> UpdateAsync(int id, SavingBookDTO dto)
        {
            var existing = await _repository.GetByIdAsync(id);

            if (existing == null)
                return false;

            existing.CustomerId = dto.CustomerId;
            existing.BookNumber = dto.BookNumber;
            existing.Balance = dto.Balance;
            existing.InterestRate = dto.InterestRate;
            existing.TermMonth = dto.TermMonth;
            existing.OpenDate = dto.OpenDate;
            existing.Status = dto.Status;

            await _repository.UpdateAsync(existing);

            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var existing = await _repository.GetByIdAsync(id);

            if (existing == null)
                return false;

            await _repository.DeleteAsync(existing);

            return true;
        }
    }
}