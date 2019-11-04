using NewsApp.DataAccess.Interfaces;
using NewsApp.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using System;

namespace NewsApp.DataAccess
{
    public abstract class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        #region Properties
        protected readonly NewsAppContext _context;
        protected readonly DbSet<TEntity> _dbSet;
        #endregion Properties

        #region Constructors
        public BaseRepository(NewsAppContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }
        #endregion Constructors

        #region Public Methods
        public async Task DeleteAsync(TEntity requestedItem)
        {
            if (requestedItem is null)
            {
                return;
            }

            TEntity item = await _dbSet.FindAsync(requestedItem);

            if (item is null)
            {
                return;
            }

            var dbEntry = _context.Entry(item);
            dbEntry.State = EntityState.Deleted;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            if (id.Equals(default(Guid)))
            {
                return;
            }

            TEntity item = await _dbSet.FindAsync(id);

            if (item is null)
            {
                return;
            }

            var dbEntry = _context.Entry(item);
            dbEntry.State = EntityState.Deleted;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteRangeAsync(List<TEntity> list)
        {
            if (list is null || !list.Any())
            {
                return;
            }

            _dbSet.RemoveRange(list);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteRangeAsync(List<Guid> idList)
        {
            if (idList is null || !idList.Any())
            {
                return;
            }

            List<TEntity> removeItemsList = await _dbSet.Where(item => idList.Contains(item.Id)).ToListAsync();

            _dbSet.RemoveRange(removeItemsList);

            await _context.SaveChangesAsync();
        }

        public async Task<TEntity> FindByIdAsync(Guid id)
        {
            TEntity item = await _dbSet.FindAsync(id);

            return item;
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            IEnumerable<TEntity> items = await _dbSet.ToListAsync();

            return items;
        }

        public async Task<int> GetCountAsync()
        {
            int result = await _dbSet.CountAsync();

            return result;
        }

        public async Task InsertAsync(TEntity item)
        {
            if (item is null)
            {
                return;
            }

            await _dbSet.AddAsync(item);

            await _context.SaveChangesAsync();
        }

        public async Task<Guid> InsertAndReturnIdAsync(TEntity item)
        {
            if (item is null)
            {
                return default(Guid);
            }

            await _dbSet.AddAsync(item);

            await _context.SaveChangesAsync();
            return item.Id;
        }

        public async Task InsertRangeAsync(List<TEntity> list)
        {
            if (list is null)
            {
                return;
            }

            await _dbSet.AddRangeAsync(list);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(TEntity item)
        {
            if (item is null)
            {
                return;
            }

           _dbSet.Update(item);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateRangeAsync(List<TEntity> list)
        {
            if (list is null || !list.Any())
            {
                return;
            }

            _dbSet.UpdateRange(list);

            await _context.SaveChangesAsync();
        }
        #endregion Public Methods
    }
}
