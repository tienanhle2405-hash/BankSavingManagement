using Backend.Models;

namespace Backend.Repositories.Interfaces
{
    public interface ITransactionHistoryRepository
    {
        Task<List<TransactionHistory>> GetAllAsync();

        Task<TransactionHistory?> GetByIdAsync(int id);

        Task<List<TransactionHistory>> GetBySavingBookIdAsync(int savingBookId);

        Task<TransactionHistory> CreateAsync(TransactionHistory transaction);

        Task<TransactionHistory?> UpdateAsync(TransactionHistory transaction);

        Task<bool> DeleteAsync(int id);
    }
}