using Backend.Models;

namespace Backend.Repositories.Interfaces
{
    public interface ISavingBookRepository
    {
        Task<IEnumerable<SavingBook>> GetAllAsync();

        Task<SavingBook?> GetByIdAsync(int id);

        Task<SavingBook> CreateAsync(SavingBook savingBook);

        Task UpdateAsync(SavingBook savingBook);

        Task DeleteAsync(SavingBook savingBook);
    }
}