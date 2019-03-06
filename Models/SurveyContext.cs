using Microsoft.EntityFrameworkCore;

namespace SurveyWebPlatform.Models
{
	public class SurveyContext : DbContext
	{
		public DbSet<Survey> Surveys { get; set; }
		public DbSet<Question> Questions { get; set; }
		public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
		{
			Database.Migrate();
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Survey>()
				.HasMany(e => e.Questions).WithOne(e => e.Survey).HasForeignKey(key => key.SurveyId).OnDelete(DeleteBehavior.Cascade);
		}
	}
}
