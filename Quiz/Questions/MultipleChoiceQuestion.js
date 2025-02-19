const { Question, QUESTION_TYPES } = require("./Question");

/**
 * Represents a Multiple Choice question type.
 *
 * @extends Question
 */
class MultipleChoiceQuestion extends Question {
  /**
   * Creates a new MultipleChoiceQuestion.
   *
   * @param {object} data - Question data.
   * @param {string} data.question - The question text.
   * @param {string[]} data.options - An array of answer choices.
   * @param {number[]} data.answerKey - An array of indices of the correct answers in the options array.
   */
  constructor(data) {
    super(QUESTION_TYPES.MULTIPLE); // Call the parent constructor with the type
    this.question = data.question; // Question text
    this.options = data.options; // Array of answer choices
    this.answerKey = data.answerKey; // Array of indices of correct answers
  }

  /**
   * Gets the question text.
   *
   * @returns {string} The question text.
   */
  getQuestion() {
    return this.question;
  }

  /**
   * Gets the correct answers for the multiple choice question.
   *
   * @throws {Error} If any answer key index is invalid.
   * @returns {string[]} An array of correct answers from the options array.
   */
  getAnswerKey() {
    const correctAnswers = [];
    for (const key of this.answerKey) {
      if (key >= 0 && key < this.options.length) {
        correctAnswers.push(this.options[key]);
      } else {
        throw new Error("Invalid answer key index");
      }
    }
    return correctAnswers; // Return an array of correct answers
  }
}

module.exports = MultipleChoiceQuestion;