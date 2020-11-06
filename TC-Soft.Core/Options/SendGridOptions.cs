namespace TC_Soft.Core.Options
{
    public class SendGridOptions
    {
        public string ApiKey { get; set; }
        public string SendFromName { get; set; }
        public string SendFromAddress { get; set; }
        public string SendToAddress { get; set; }
    }
}
