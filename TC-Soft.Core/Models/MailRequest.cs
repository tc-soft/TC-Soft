using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using MimeKit;

namespace TC_Soft.Core.Models
{
    public class MailRequest
    {
        public string ToEmail { get; set; }
        public string Subject { get; set; }
        public BodyBuilder Body { get; set; }
        public List<IFormFile> Attachments { get; set; }
    }
}
