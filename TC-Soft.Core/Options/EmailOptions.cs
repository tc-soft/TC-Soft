namespace TC_Soft.Core.Options
{
    public class EmailOptions
    {
        public string FromName { get; set; }
        public string FromAddress { get; set; }

        public string MailServerAddress { get; set; }
        public int MailServerPort { get; set; }
        public string Encryption { get; set; }

        public string UserId { get; set; }
        public string UserPassword { get; set; }

        public string ToAddress { get; set; }
        public string Subject { get; set; }

        public string Template { get; set; }
    }
}
