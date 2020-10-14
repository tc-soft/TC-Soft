using System.Threading.Tasks;

namespace TC_Soft.Core.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
