const { Question, QUESTION_TYPES } = require("./Question");

/**
 * Represents a Drag and Drop question type.
 *
 * @extends Question
 */
class DragAndDropQuestion extends Question {
  /**
   * Creates a new DragAndDropQuestion.
   *
   * @param {object} data - Question data.
   * @param {string} data.question - The question text.
   * @param {string[]} data.items - An array of draggable items.
   * @param {object} data.answerKey - An object mapping items to their target positions.
   */
  constructor(data) {
    super(QUESTION_TYPES.DRAG_AND_DROP);
    this.question = data.question;
    this.items = data.items; // Array of draggable items
    this.answerKey = data.answerKey; // Object mapping items to their target positions
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
   * Gets the answer key for the Drag and Drop question.
   *
   * @throws {Error} If the answer key is invalid.
   * @returns {object} An object mapping draggable items to their target positions.
   */
  getAnswerKey() {
    const keys = Object.keys(this.answerKey);
    if (keys.length !== this.items.length) {
      throw new Error("Invalid answer key length");
    }
    for (const key of keys) {
      if (!this.items.includes(key) || !Number.isInteger(this.answerKey[key])) {
        throw new Error("Invalid item or target position");
      }
    }
    return this.answerKey; // Return object mapping draggable items to their target positions
  }
}

module.exports = DragAndDropQuestion;
