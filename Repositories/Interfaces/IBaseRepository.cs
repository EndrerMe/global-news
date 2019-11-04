using NewsApp.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsApp.DataAccess.Interfaces
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task<TEntity> FindByIdAsync(Guid id);
        Task<IEnumerable<TEntity>> GetAllAsync();

        Task<int> GetCountAsync();

        Task DeleteAsync(TEntity item);
        Task DeleteRangeAsync(List<TEntity> list);
        Task DeleteAsync(Guid id);
        Task DeleteRangeAsync(List<Guid> idList);

        Task UpdateAsync(TEntity item);
        Task UpdateRangeAsync(List<TEntity> list);

        Task InsertAsync(TEntity item);
        Task InsertRangeAsync(List<TEntity> list);

        Task<Guid> InsertAndReturnIdAsync(TEntity item);
    }
}
