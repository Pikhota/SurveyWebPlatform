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
		public int Id { get; set; }
		[Required]
		public string Text { get; set; }
		public string Comment { get; set; }
		public int? SurveyId { get; set; }
		public Survey Survey { get; set; }
		public string Answer1 { get; set; }
		public string Answer2 { get; set; }
		public string Answer3 { get; set; }
	}
}
