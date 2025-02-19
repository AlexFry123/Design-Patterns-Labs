const { Question, QUESTION_TYPES } = require("./Question");

/**
 * Represents a Free Answer question type.
 *
 * @extends Question
 */
class FreeAnswerQuestion extends Question {
  /**
   * Creates a new FreeAnswerQuestion.
   *
   * @param {object} data - Question data.
   * @param {string} data.question - The question text.
   */
  constructor(data) {
    super(QUESTION_TYPES.FREE_ANSWER);
    this.question = data.question;
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
   * Free answer questions don't have predefined answer keys and always return null.
   *
   * @returns {null} Always null.
   */
  getAnswerKey() {
    // Free answer questions don't have predefined answer keys.
    return null;
  }
}

module.exports = FreeAnswerQuestion;