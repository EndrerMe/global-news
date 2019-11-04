using NewsApp.DataAccess.Interfaces;
using NewsApp.Entities;
using NewsApp.ViewModels;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace NewsApp.BusinessLogic.Services
{
    public class CityService : ICityService
    {
        #region Properties & Variables
        private readonly ICityRepository _cityRepository;
        #endregion Properties & Variables

        #region Constructors
        public CityService(ICityRepository cityRepository)
        {
            _cityRepository = cityRepository;
        }
        #endregion Constructors

        #region Public Methods
        public async Task<FindCityByNameCityViewModel> FindCityByNameAsync(string namefilter)
        {
            var result = new FindCityByNameCityViewModel();
            City searchResult = await _cityRepository.FindCityByNAmeAsync(namefilter);
            
            if(searchResult == default(City))
            {
                return result;
            }

            var cityModel = new FindCityByNameCityViewItem();

            cityModel.Name = searchResult.Name;
            cityModel.Country = searchResult.Country;

            result.Data = cityModel;
            return result;
        }

        public async Task InsertOrUpdateCiliesListAsync()
        {
            var cityList = new List<City>();
            using (var reader = new StreamReader("cities.json"))
            {
                string json = await reader.ReadToEndAsync();
                cityList = JsonConvert.DeserializeObject<List<City>>(json);
            }

            await _cityRepository.InsertRangeAsync(cityList);
        }
        #endregion Public Methods
    }
}
