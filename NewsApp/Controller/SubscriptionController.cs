using Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewsApp.BusinessLogic.Services;

namespace NewsApp.WEB.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : BaseController
    {
        private ISubscriptionService _subscriptionService;

        public SubscriptionController(ISubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        [Route("/addSubscription")]
        [HttpPost]
        public async Task<ActionResult> AddSubsctiption(SubcsriptionViewModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Email))
            {
                return BadRequest("You shuold provide valid email");
            }

            bool result = await _subscriptionService.AddSubscription(model);

            if (result)
            {
                return Ok("You subscribed to news!");
            }

            return BadRequest("Something went wrong!");
        }
    }
}