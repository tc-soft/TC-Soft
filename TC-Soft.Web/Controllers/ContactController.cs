using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using TC_Soft.Core.Models;
using TC_Soft.Core.Services;
using IpStack;
using IpStack.Models;

namespace TC_Soft.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailSerivce;

        public ContactController(IEmailService emailSerivce)
        {
            _emailSerivce = emailSerivce;
        }

        // POST api/Values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] WebContact webContact)
        {
            
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();
            await _emailSerivce.SendEmailAsync("office@tc-soft.pl", "TC-Soft WEB Service", webContact.Message);
            
            await Task.Delay(1);
            return BadRequest();
        }
    }
}
