using System.Threading.Tasks;
using TC_Soft.Core.Models;
using MimeKit;

namespace TC_Soft.Core.Services
{
    public interface IEmailService
    {
        Task SendAsync(MailRequest mailRequest);
        Task SendGridAsync(MailRequest mailRequest);
        BodyBuilder CreateBody(WebContact webContact);
    }
}
