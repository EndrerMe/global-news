using NewsAPI.Constants;
using NewsAPI.Models;
using NewsApp.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsApp.BusinessLogic.Services
{
    public interface IEmailSubscriptionService
    {
        Task<List<Article>> GetLatestNewsInCategory(Categories category);
        Task<List<Subscription>> GetSubscroptionsByCategory(Categories category);
        Task SendNewsToSubscribers(List<Article> news, List<Subscription> subscriptions);
    }
}
