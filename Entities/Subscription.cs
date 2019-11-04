using NewsAPI.Constants;

namespace NewsApp.Entities
{
    public class Subscription : BaseEntity
    {
        public string Email { get; set; }
        public Categories Category { get; set; }
        public bool SubscribeAll { get; set; }
    }
}
