using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewsApp.BusinessLogic.Services;
using NewsApp.ViewModels;

namespace NewsApp.WEB.Controller
{
    [ApiController]
    public class CityController : BaseController
    {
        private ICityService _cityService;

        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [HttpGet]
        [Route("/searchCity")]
        public async Task<ActionResult> FindCityByName(string name)
        {
            FindCityByNameCityViewModel result = await _cityService.FindCityByNameAsync(name);
            return Ok(result);
        }
    }
}