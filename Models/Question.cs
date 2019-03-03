using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyWebPlatform.Models
{
	public class Question
	{
		[Key]
		public int QuestionId { get; set; }
		[Required]
		public string QuestionText { get; set; }
		public string QuestionComment { get; set; }
		public int? SurveyId { get; set; }
		public Survey Survey { get; set; }
		public List<Variant> Variants { get; set; }
	}
}
