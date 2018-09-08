using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp
{
    public class MyDbContext : DbContext
    {
        public MyDbContext() { }

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        public DbSet<SessionRec> SessionRecs { get; set; }

        public DbSet<SpeakerRec> SpeakerRecs { get; set; }

    }
}
