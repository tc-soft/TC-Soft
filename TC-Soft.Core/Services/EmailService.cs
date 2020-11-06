using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using SendGrid;
using SendGrid.Helpers.Mail;
using TC_Soft.Core.Models;
using TC_Soft.Core.Options;

namespace TC_Soft.Core.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailOptions _emailOptions;
        private readonly SendGridOptions _sendGridOptions;

        public EmailService(
            IOptions<EmailOptions> emailOptions,
            IOptions<SendGridOptions> sendGridOptions
            )
        {
            _emailOptions = emailOptions.Value;
            _sendGridOptions = sendGridOptions.Value;
        }

        public async Task SendAsync(MailRequest mailRequest)
        {
            try
            {
                var emailMessage = new MimeMessage();

                emailMessage.From.Add(new MailboxAddress(_emailOptions.FromName, _emailOptions.FromAddress));
                emailMessage.To.Add(new MailboxAddress("", mailRequest.ToEmail));
                emailMessage.Subject = mailRequest.Subject;

                var builder = new BodyBuilder();

                if (mailRequest.Attachments != null)
                {
                    byte[] fileBytes;
                    foreach (var file in mailRequest.Attachments)
                    {
                        if (file.Length > 0)
                        {
                            using (var ms = new MemoryStream())
                            {
                                file.CopyTo(ms);
                                fileBytes = ms.ToArray();
                            }
                            builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                        }
                    }
                }

                emailMessage.Body = mailRequest.Body.ToMessageBody();

                using SmtpClient client = new SmtpClient();

                await client.ConnectAsync(
                    _emailOptions.MailServerAddress,
                    _emailOptions.MailServerPort,
                    Enum.Parse<SecureSocketOptions>(_emailOptions.Encryption)
                    ).ConfigureAwait(false);

                client.AuthenticationMechanisms.Remove("XOAUTH2");

                await client.AuthenticateAsync(new NetworkCredential(_emailOptions.UserId, _emailOptions.UserPassword)).ConfigureAwait(false);
                await client.SendAsync(emailMessage).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task SendGridAsync(MailRequest mailRequest)
        {
            try
            {
                SendGridClient sendGridClient = new SendGridClient(_sendGridOptions.ApiKey);

                SendGridMessage sendGridMessage = new SendGridMessage()
                {
                    From = new EmailAddress(_sendGridOptions.SendFromAddress, _sendGridOptions.SendFromName),
                    Subject = mailRequest.Subject,
                    HtmlContent = mailRequest.Body.HtmlBody,
                    PlainTextContent = mailRequest.Body.TextBody
                };

                sendGridMessage.AddTo(new EmailAddress(mailRequest.ToEmail, ""));
                var response = await sendGridClient.SendEmailAsync(sendGridMessage).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public BodyBuilder CreateBody(WebContact webContact)
        {
            string pathToFile = Path.Combine(
                    Environment.CurrentDirectory,
                    "Templates",
                    webContact.EmailTemplate + ".html"
                );

            var builder = new BodyBuilder();
            using (StreamReader SourceReader = File.OpenText(pathToFile))
            {
                builder.HtmlBody = SourceReader.ReadToEnd();
            }

            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.Name}", webContact.Name);
            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.Email}", webContact.Email);
            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.Message}", webContact.Message);
            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.SingleDetails.Ip}", webContact.SingleDetails.Ip);
            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.SingleDetails.City}", webContact.SingleDetails.City);
            builder.HtmlBody = builder.HtmlBody.Replace("{webContact.SingleDetails.CountryName}", webContact.SingleDetails.CountryName);

            builder.TextBody =
                "&nbsp;&nbsp;&nbsp;&nbsp;Imię : <strong>" + webContact.Name + "</strong><br>" +
                "&nbsp;&nbsp;&nbsp;Email : " + webContact.Email + "<br>" +
                "&nbsp;&nbsp;&nbsp;Treść : " + webContact.Message + "<br><br>" +
                "Adres IP : <strong style=\"color:red\">" + webContact.SingleDetails.Ip + "</strong><br>" +
                "&nbsp;&nbsp;&nbsp;&nbsp;Kraj :" + webContact.SingleDetails.CountryName;

            return builder;
        }
    }
}
