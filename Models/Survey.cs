using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SurveyWebPlatform.Models
{
	public class Survey
	{
		[Key]
		public int SurveyId { get; set; }
		[Required]
		public string SurveyTitle { get; set; }
		[Required]
		public string CreatedBy { get; set; }
		[Required]
		public string CreationDate { get; set; }
		public List<Question> Questions { get; set; }
	}
}
