using System.ComponentModel.DataAnnotations;

namespace SurveyWebPlatform.Models
{
	public class Variant
	{
		[Key]
		public int VariantId { get; set; }
		[Required]
		public string VariantText { get; set; }
		public int? VoteAmount { get; set; }
		public int? QuestionId { get; set; }
		public Question Question { get; set; }
	}
}
