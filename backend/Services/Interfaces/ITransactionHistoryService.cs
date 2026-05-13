using Backend.DTOs.TransactionHistory;

namespace Backend.Services.Interfaces
{
    public interface ITransactionHistoryService 
    {
        Task<List<TransactionHistoryResponseDto>> GetAllAsync();

        Task<TransactionHistoryResponseDto?> GetByIdAsync(int id);

        Task<List<TransactionHistoryResponseDto>> GetBySavingBookIdAsync(int savingBookId);

        Task<TransactionHistoryResponseDto> CreateAsync(CreateTransactionHistoryDto dto);

        Task<TransactionHistoryResponseDto?> UpdateAsync(int id, UpdateTransactionHistoryDto dto);

        Task<bool> DeleteAsync(int id);
    }
}