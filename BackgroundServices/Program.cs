using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using NewsApp.BusinessLogic.Services;
using NewsApp.DataAccess;
using NewsApp.DataAccess.Interfaces;

namespace NewsApp.BackgroundServices
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureServices((hostContext, services) =>
                {
                    services.AddDbContext<NewsAppContext>(options =>
                    {
                        options.UseLazyLoadingProxies();
                        options.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=Test1;Integrated Security=True");
                    });

                    services.AddScoped<IEmailSubscriptionService, EmailSubscriptionService>();
                    services.AddScoped<ISubscriptionRepository, SubscriptionRepository>();

                    services.AddHostedService<BackgroundEmailNewsSender>();
                });
    }
}
