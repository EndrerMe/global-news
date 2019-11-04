using System;
using System.Collections.Generic;
using System.Text;

namespace NewsApp.Shared.Configuration
{
    public class AppConfiguration
    {
        public SmtpOptions SMTPOptions { get; set; }
        public NewsClient NewsClient { get; set; }
    }

    public class SmtpOptions
    {
        public string Server { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }

    public class NewsClient
    {
        public string Id { get; set; }
    }
}
