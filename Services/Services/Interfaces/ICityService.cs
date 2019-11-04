using NewsApp.ViewModels;
using System.Threading.Tasks;

namespace NewsApp.BusinessLogic.Services
{
    public interface ICityService
    {
        Task<FindCityByNameCityViewModel> FindCityByNameAsync(string namefilter);
    }
}
