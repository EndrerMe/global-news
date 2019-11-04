using System.Collections.Generic;
using System.Linq;
using NewsAPI;
using NewsAPI.Models;
using NewsAPI.Constants;
using System.Threading.Tasks;
using System;
using MimeKit;
using MailKit.Net.Smtp;
using System.IO;
using NewsApp.DataAccess.Interfaces;
using NewsApp.Entities;
using Microsoft.Extensions.Options;
using NewsApp.Shared.Configuration;

namespace NewsApp.BusinessLogic.Services
{
    public class EmailSubscriptionService : IEmailSubscriptionService
    {
        #region Properties & Variables
        private readonly string _smptServer;
        private readonly string _smptpLogin;
        private readonly string _smtpPassword;

        private readonly string _newsApiClient;

        private readonly ISubscriptionRepository _subscriptionRepository;
        #endregion Properties & Variables

        #region Constructors
        public EmailSubscriptionService(ISubscriptionRepository subscriptionRepository, 
                                        IOptions<AppConfiguration> configurationOptions)
        {
            _subscriptionRepository = subscriptionRepository;

            _smptServer = configurationOptions.Value.SMTPOptions.Server;
            _smptpLogin = configurationOptions.Value.SMTPOptions.Login;
            _smtpPassword = configurationOptions.Value.SMTPOptions.Password;

            _newsApiClient = configurationOptions.Value.NewsClient.Id;
        }
        #endregion Constructors

        #region Public Methods
        public async Task<List<Article>> GetLatestNewsInCategory(Categories category)
        {
            var newsArticles = new List<Article>();
            bool isChecked = default(bool);
            int pageCount = 1;

            do
            {
                var result = await GetLatestNewsFromApi(category, pageCount);
                newsArticles.AddRange(result.Articles);
                pageCount++;

                isChecked = newsArticles.Last().PublishedAt < DateTime.Today.AddDays(-1);
            }
            while (!isChecked);

            return newsArticles;
        }

        public async Task<List<Subscription>> GetSubscroptionsByCategory(Categories category)
        {
            List<Subscription> result = await _subscriptionRepository.GetSubscriptionsByCategoryAsync(category);
            return result;
        }

        public async Task SendNewsToSubscribers(List<Article> news, List<Subscription> subscriptions)
        {
            try
            {
                var emailMessage = await PrepareEmailMessage(news);

                foreach (Subscription sub in subscriptions)
                {
                    using (var client = new SmtpClient())
                    {
                        await client.ConnectAsync(_smptServer, 465, true);
                        await client.AuthenticateAsync(_smptpLogin, _smtpPassword);
                        emailMessage.To.Add(new MailboxAddress(string.Empty, sub.Email));

                        await client.SendAsync(emailMessage);
                        await client.DisconnectAsync(true);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
        #endregion Public Methods

        #region Private Methods
        private async Task<ArticlesResult> GetLatestNewsFromApi(Categories category, int page = 1)
        {
            var newsApiClient = new NewsApiClient(_newsApiClient);
            const int pageSize = 10;

            ArticlesResult newsResponse = await newsApiClient.GetTopHeadlinesAsync(new TopHeadlinesRequest
            {
                Category = category,
                Page = page,
                PageSize = pageSize,
                Country = Countries.US
            });

            return newsResponse;
        }

        private async Task<MimeMessage> PrepareEmailMessage(List<Article> news)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("News for you!", "noreply@plz.2me"));
            emailMessage.Subject = "We got some news for you!";
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = await BuildEmailText(news)
            };

            return emailMessage;
        }

        private async Task<string> BuildEmailText(List<Article> news)
        {
            string emailBoby = String.Empty;
            string newsWrapper = String.Empty;
            string content = String.Empty;

            using (StreamReader reader = new StreamReader("../email-template/news.html"))
            {
                newsWrapper = await reader.ReadToEndAsync();
            }

            foreach (Article article in news)
            {
                string articleContent = newsWrapper;
                articleContent = articleContent.Replace("{Title}", article.Title);
                articleContent = articleContent.Replace("{ImageUrl}", article.UrlToImage);
                articleContent = articleContent.Replace("{Url}", article.Url);

                content += articleContent;
            }

            using (StreamReader reader = new StreamReader("../email-template/index.html"))
            {
                emailBoby = await reader.ReadToEndAsync();
            }

            emailBoby = emailBoby.Replace("{News}", content);

            return emailBoby;
        }
        #endregion Private Methods

    }
}
