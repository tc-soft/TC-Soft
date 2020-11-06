using IpStack;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using TC_Soft.Core.Models;
using TC_Soft.Core.Options;
using TC_Soft.Core.Services;

namespace TC_Soft.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly EmailOptions _emailOptions;
        private readonly IpStackOptions _ipStackOptions;
        private readonly IEmailService _emailService;


        public ContactController(
            IOptions<EmailOptions> emailOptions,
            IOptions<IpStackOptions> ipStackOptions,
            IEmailService emailSerivce
            )
        {
            _emailOptions = emailOptions.Value;
            _ipStackOptions = ipStackOptions.Value;
            _emailService = emailSerivce;
        }

        // POST api/Values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] WebContact webContact)
        {
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();
            //<YOUR_API_KEY>

            IpStackClient client = new IpStackClient(_ipStackOptions.Key);
            webContact.SingleDetails = client.GetIpAddressDetails(ip);
            webContact.EmailTemplate = _emailOptions.Template;

            MailRequest request = new MailRequest
            {
                ToEmail = _emailOptions.ToAddress,
                Subject = _emailOptions.Subject,
                Body = _emailService.CreateBody(webContact)
            };

            //await _emailService.SendAsync(request);
            //await _emailService.SendGridAsync(request);

            //https://www.pragimtech.com/blog/blazor/post-in-aspnet-core-rest-api/

            return StatusCode(StatusCodes.Status200OK, "Success");
        }
    }
}
