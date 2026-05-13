using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.Repositories.Interfaces;

namespace Backend.Repositories
{
    public class SavingBookRepository : ISavingBookRepository
    {
        private readonly AppDbContext _context;

        public SavingBookRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SavingBook>> GetAllAsync()
        {
            return await _context.SavingBooks.ToListAsync();
        }

        public async Task<SavingBook?> GetByIdAsync(int id)
        {
            return await _context.SavingBooks.FindAsync(id);
        }

        public async Task<SavingBook> CreateAsync(SavingBook savingBook)
        {
            await _context.SavingBooks.AddAsync(savingBook);
            await _context.SaveChangesAsync();

            return savingBook;
        }

        public async Task UpdateAsync(SavingBook savingBook)
        {
            _context.SavingBooks.Update(savingBook);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(SavingBook savingBook)
        {
            _context.SavingBooks.Remove(savingBook);
            await _context.SaveChangesAsync();
        }
    }
}