using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using TC_Soft.Web.Models;

namespace TC_Soft.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        // POST api/Values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] WebContact webContact)
        {
            await Task.Delay(100);
            return BadRequest();
        }
    }
}
