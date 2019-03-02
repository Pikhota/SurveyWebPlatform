using Microsoft.EntityFrameworkCore;

namespace SurveyWebPlatform.Models
{
	public class SurveyContext : DbContext
	{
		public DbSet<Survey> Surveys { get; set; }
		public DbSet<Question> Questions { get; set; }
		public DbSet<Variant> Variants { get; set; }
		public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
		{

		}
	}
}
