using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SurveyWebPlatform.Models
{
	public class Survey
	{
		[Key]
		public int Id { get; set; }
		[Required]
		[Column(TypeName ="nvarchar(50)")]
		public string Title { get; set; }
		[Required]
		[Column(TypeName ="nvarchar(50)")]
		public string CreatedBy { get; set; }
		[Required]
		public string CreationDate { get; set; }
		[Required]
		[Column(TypeName ="nvarchar(300)")]
		public string InfoText { get; set; }
		public List<Question> Questions { get; set; }
	}
}
