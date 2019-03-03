using Microsoft.EntityFrameworkCore.Migrations;

namespace SurveyWebPlatform.Migrations
{
    public partial class addnullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Surveys_SurveyId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Variants_Questions_QuestionId",
                table: "Variants");

            migrationBuilder.AlterColumn<int>(
                name: "VoteAmount",
                table: "Variants",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "QuestionId",
                table: "Variants",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "SurveyId",
                table: "Questions",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Surveys_SurveyId",
                table: "Questions",
                column: "SurveyId",
                principalTable: "Surveys",
                principalColumn: "SurveyId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Variants_Questions_QuestionId",
                table: "Variants",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Surveys_SurveyId",
                table: "Questions");

            migrationBuilder.DropForeignKey(
                name: "FK_Variants_Questions_QuestionId",
                table: "Variants");

            migrationBuilder.AlterColumn<int>(
                name: "VoteAmount",
                table: "Variants",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "QuestionId",
                table: "Variants",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SurveyId",
                table: "Questions",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Surveys_SurveyId",
                table: "Questions",
                column: "SurveyId",
                principalTable: "Surveys",
                principalColumn: "SurveyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Variants_Questions_QuestionId",
                table: "Variants",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "QuestionId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
