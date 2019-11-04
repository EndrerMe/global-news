using EFCore.BulkExtensions;
using Microsoft.EntityFrameworkCore;
using NewsApp.Entities;
using NewsApp.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApp.DataAccess
{
    public class CityRepository : BaseRepository<City>, ICityRepository
    {
        #region Constructors
        public CityRepository(NewsAppContext context) : base(context)
        {
        }
        #endregion Constructors

        #region Public Methods
        public async Task<List<City>> FindListCitiesByNameAsync(string namefilter)
        {
            List<City> result = await _dbSet.Where(x => x.Name.ToLower().Contains(namefilter.ToLower())).ToListAsync();
            return result;
        }

        public async Task<City> FindCityByNAmeAsync(string nameFilter)
        {
            City result = await _dbSet.FirstOrDefaultAsync(item => item.Name.ToLower().Contains(nameFilter.ToLower()));

            return result;
        }
        #endregion Public Methods
    }
}
