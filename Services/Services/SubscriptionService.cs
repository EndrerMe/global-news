using Models;
using NewsApp.BusinessLogic.Services;
using NewsApp.DataAccess.Interfaces;
using NewsApp.Entities;
using System;
using System.Threading.Tasks;

namespace NewsApp.BusinessLogic
{
    public class SubscriptionService : ISubscriptionService
    {
        private readonly ISubscriptionRepository _subscriptionRepository;

        public SubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        public async Task<bool> AddSubscription(SubcsriptionViewModel model)
        {
            var subscribtion = new Subscription();

            subscribtion.Email = model.Email;
            subscribtion.Category = model.Category;
            subscribtion.SubscribeAll = model.SubscribeAll;
            subscribtion.Created = DateTime.UtcNow;

            bool result = await _subscriptionRepository.InsertSubscriptionAsync(subscribtion);

            return result;
        }
    }
}
