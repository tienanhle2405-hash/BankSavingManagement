using Backend.DTOs.Customer;
using Backend.Models;
using Backend.Repositories.Interfaces;
using Backend.Services.Interfaces;

namespace Backend.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _repository;

        public CustomerService(ICustomerRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<CustomerResponseDto>> GetAllAsync()
        {
            var customers = await _repository.GetAllAsync();

            return customers.Select(c => new CustomerResponseDto
            {
                Id = c.Id,
                FullName = c.FullName,
                CCCD = c.CCCD,
                Phone = c.Phone,
                Address = c.Address
            }).ToList();
        }

        public async Task<CustomerResponseDto?> GetByIdAsync(int id)
        {
            var customer = await _repository.GetByIdAsync(id);

            if (customer == null)
                return null;

            return new CustomerResponseDto
            {
                Id = customer.Id,
                FullName = customer.FullName,
                CCCD = customer.CCCD,
                Phone = customer.Phone,
                Address = customer.Address
            };
        }

        public async Task<CustomerResponseDto> CreateAsync(CreateCustomerDto dto)
        {
            var customer = new Customer
            {
                FullName = dto.FullName,
                CCCD = dto.CCCD,
                Phone = dto.Phone,
                Address = dto.Address
            };

            var createdCustomer = await _repository.CreateAsync(customer);

            return new CustomerResponseDto
            {
                Id = createdCustomer.Id,
                FullName = createdCustomer.FullName,
                CCCD = createdCustomer.CCCD,
                Phone = createdCustomer.Phone,
                Address = createdCustomer.Address
            };
        }

        public async Task<CustomerResponseDto?> UpdateAsync(int id, UpdateCustomerDto dto)
        {
            var customer = new Customer
            {
                Id = id,
                FullName = dto.FullName,
                CCCD = dto.CCCD,
                Phone = dto.Phone,
                Address = dto.Address
            };

            var updatedCustomer = await _repository.UpdateAsync(customer);

            if (updatedCustomer == null)
                return null;

            return new CustomerResponseDto
            {
                Id = updatedCustomer.Id,
                FullName = updatedCustomer.FullName,
                CCCD = updatedCustomer.CCCD,
                Phone = updatedCustomer.Phone,
                Address = updatedCustomer.Address
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}