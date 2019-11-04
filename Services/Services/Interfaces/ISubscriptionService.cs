using Models;
using System.Threading.Tasks;

namespace NewsApp.BusinessLogic.Services
{
    public interface ISubscriptionService
    {
        Task<bool> AddSubscription(SubcsriptionViewModel model);
    }
}
