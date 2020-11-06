using IpStack.Models;

namespace TC_Soft.Core.Models
{
    public class WebContact
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public IpAddressDetails SingleDetails { get; set; }
        public string EmailTemplate { get; set; }
    }
}
