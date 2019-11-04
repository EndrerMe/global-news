using Microsoft.EntityFrameworkCore;
using NewsAPI.Constants;
using NewsApp.DataAccess.Interfaces;
using NewsApp.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApp.DataAccess
{
    public class SubscriptionRepository : BaseRepository<Subscription>, ISubscriptionRepository
    {
        #region Constructors
        public SubscriptionRepository(NewsAppContext context) : base(context)
        {
        }
        #endregion Constructors

        public async Task<bool> InsertSubscriptionAsync(Subscription subscription)
        {

            Subscription oldRecord = await _dbSet.FirstOrDefaultAsync(x => x.Email == subscription.Email && x.Category == subscription.Category);
            if (oldRecord != null)
            {
                return false;
            }

            var result = await _dbSet.AddAsync(subscription);

            if (result.State == EntityState.Added)
            {
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<List<Subscription>> GetSubscriptionsByCategoryAsync(Categories category)
        {
            List<Subscription> result = await _dbSet.Where(x => x.Category == category).ToListAsync();
            return result;
        }
    }
}
