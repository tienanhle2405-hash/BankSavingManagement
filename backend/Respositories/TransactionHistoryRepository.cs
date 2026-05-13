using Backend.Data;
using Backend.Models;
using Backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class TransactionHistoryRepository : ITransactionHistoryRepository
    {
        private readonly AppDbContext _context;

        public TransactionHistoryRepository(AppDbContext context)
        {
            _context = context;
        }

        // GET ALL
        public async Task<List<TransactionHistory>> GetAllAsync()
        {
            return await _context.TransactionHistories
                .Include(x => x.SavingBook)
                .OrderByDescending(x => x.TransactionDate)
                .ToListAsync();
        }

        // GET BY ID
        public async Task<TransactionHistory?> GetByIdAsync(int id)
        {
            return await _context.TransactionHistories
                .Include(x => x.SavingBook)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        // GET BY SAVING BOOK ID
        public async Task<List<TransactionHistory>> GetBySavingBookIdAsync(int savingBookId)
        {
            return await _context.TransactionHistories
                .Where(x => x.SavingBookId == savingBookId)
                .OrderByDescending(x => x.TransactionDate)
                .ToListAsync();
        }

        // CREATE
        public async Task<TransactionHistory> CreateAsync(TransactionHistory transaction)
        {
            _context.TransactionHistories.Add(transaction);

            await _context.SaveChangesAsync();

            return transaction;
        }

        // UPDATE
        public async Task<TransactionHistory?> UpdateAsync(TransactionHistory transaction)
        {
            var existing = await _context.TransactionHistories
                .FirstOrDefaultAsync(x => x.Id == transaction.Id);

            if (existing == null)
            {
                return null;
            }

            existing.TransactionType = transaction.TransactionType;
            existing.Amount = transaction.Amount;

            await _context.SaveChangesAsync();

            return existing;
        }

        // DELETE
        public async Task<bool> DeleteAsync(int id)
        {
            var transaction = await _context.TransactionHistories
                .FirstOrDefaultAsync(x => x.Id == id);

            if (transaction == null)
            {
                return false;
            }

            _context.TransactionHistories.Remove(transaction);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}