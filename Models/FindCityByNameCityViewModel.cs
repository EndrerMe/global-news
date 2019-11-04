using System.Collections.Generic;

namespace NewsApp.ViewModels
{
    public class FindCityByNameCityViewModel
    {
        public FindCityByNameCityViewItem Data { get; set; }
        public bool IsError { get; set; }
        public string ErrorMessage { get; set; }
    }

    public class FindCityByNameCityViewItem
    {
        public string Name { get; set; }
        public string Country { get; set; }
    }
}
