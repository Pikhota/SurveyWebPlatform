using Microsoft.EntityFrameworkCore;

namespace SurveyWebPlatform.Models
{
	public class SurveyContext : DbContext
	{
		DbSet<Survey> Surveys { get; set; }
		DbSet<Question> Questions { get; set; }
		DbSet<Variant> Variants { get; set; }
		public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
		{

		}
	}
}
