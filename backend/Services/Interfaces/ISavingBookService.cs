using Backend.DTOs;
using Backend.Models;

namespace Backend.Services.Interfaces
{
    public interface ISavingBookService
    {
        Task<IEnumerable<SavingBook>> GetAllAsync();

        Task<SavingBook?> GetByIdAsync(int id);

        Task<SavingBook> CreateAsync(SavingBookDTO dto);

        Task<bool> UpdateAsync(int id, SavingBookDTO dto);

        Task<bool> DeleteAsync(int id);
    }
}