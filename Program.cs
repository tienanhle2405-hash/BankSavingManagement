using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using BankSavingManagement.API.Helpers;
using BankSavingManagement.API.Repositories;
using BankSavingManagement.API.Repositories.Interfaces;
using BankSavingManagement.API.Services;
using Backend.Services.Interfaces;
using Backend.Services;
using Backend.Data;
using Backend.Repositories.Interfaces;
using Backend.Repositories;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:5150")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddScoped<IAuthRepository, AuthRepository>();


builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddScoped<ICustomerService, CustomerService>();

builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();

builder.Services.AddScoped<ISavingBookService, SavingBookService>();

builder.Services.AddScoped<ISavingBookRepository, SavingBookRepository>();

builder.Services.AddScoped<ITransactionHistoryService, TransactionHistoryService>();

builder.Services.AddScoped<ITransactionHistoryRepository, TransactionHistoryRepository>();

builder.Services.AddScoped<JwtHelper>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters =
            new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],

                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(
                        builder.Configuration["Jwt:Key"]
                    )
                )
            };
    });

builder.Services.AddAuthorization();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();

app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();