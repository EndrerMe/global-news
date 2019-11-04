using NewsApp.Entities;
using NewsAPI.Constants;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsApp.DataAccess.Interfaces
{
    public interface ISubscriptionRepository : IBaseRepository<Subscription>
    {
        Task<bool> InsertSubscriptionAsync(Subscription subscription);
        Task<List<Subscription>> GetSubscriptionsByCategoryAsync(Categories category);
    }
}
