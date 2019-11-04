using NewsApp.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsApp.DataAccess.Interfaces
{
    public interface ICityRepository : IBaseRepository<City>
    {
        Task<List<City>> FindListCitiesByNameAsync(string namefilter);
        Task<City> FindCityByNAmeAsync(string nameFilter);
    }
}
