using Backend.DTOs.Customer;

namespace Backend.Services.Interfaces
{
    public interface ICustomerService
    {
        Task<List<CustomerResponseDto>> GetAllAsync();

        Task<CustomerResponseDto?> GetByIdAsync(int id);

        Task<CustomerResponseDto> CreateAsync(CreateCustomerDto dto);

        Task<CustomerResponseDto?> UpdateAsync(int id, UpdateCustomerDto dto);

        Task<bool> DeleteAsync(int id);
    }
}