const { Question, QUESTION_TYPES } = require("./Question");

/**
 * Represents a Single Choice question type.
 *
 * @extends Question
 */
class SingleChoiceQuestion extends Question {
  /**
   * Creates a new SingleChoiceQuestion.
   *
   * @param {object} data - Question data.
   * @param {string} data.question - The question text.
   * @param {string[]} data.options - An array of answer choices.
   * @param {number} data.answerKey - The index of the correct answer in the options array.
   */
  constructor(data) {
    super(QUESTION_TYPES.SINGLE); // Call the parent constructor with the type
    this.question = data.question; // Question text
    this.options = data.options; // Array of answer choices
    this.answerKey = data.answerKey; // Index of the correct answer in options
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
   * Gets the correct answer for the single choice question.
   *
   * @throws {Error} If the answer key index is invalid.
   * @returns {string} The correct answer from the options array.
   */
  getAnswerKey() {
    if (this.answerKey >= 0 && this.answerKey < this.options.length) {
      return this.options[this.answerKey]; // Return the correct answer
    } else {
      throw new Error("Invalid answer key index");
    }
  }
}

module.exports = SingleChoiceQuestion;