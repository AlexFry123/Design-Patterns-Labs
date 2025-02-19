const QUESTION_TYPES = {
  SINGLE: "SINGLE",
  MULTIPLE: "MULTIPLE",
  DRAG_AND_DROP: "DRAG_AND_DROP",
  FREE_ANSWER: "FREE_ANSWER",
};

/**
 * Abstract Class Question.
 *
 * @class Question
 */
class Question {
  constructor(type) {
    if (this.constructor === Question) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.type = type;
  }

  /**
   * Gets the question from the source.
   *
   * @return {string} the question
   */
  getQuestion() {}

  /**
   * Retrieves the answer key based on the question type.
   *
   * @return {type} The answer key in a format that varies based on the question type.
   */
  getAnswerKey() {} // Answer format varies based on question type.
}

module.exports = { Question, QUESTION_TYPES };
