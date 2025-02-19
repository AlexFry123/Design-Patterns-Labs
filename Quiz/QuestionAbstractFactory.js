const DragAndDropQuestion = require("./Questions/DragAndDropQuestion");
const FreeAnswerQuestion = require("./Questions/FreeAnswerQuestion");
const MultipleChoiceQuestion = require("./Questions/MultipleChoiceQuestion");
const SingleChoiceQuestion = require("./Questions/SingleChoiceQuestion");
const { QUESTION_TYPES } = require("./Questions/Question");

/**
 * A factory class for creating different question objects based on their type.
 */
class QuestionFactory {
    /**
     * Creates a new question object of the specified type.
     *
     * @throws {Error} If an invalid question type is provided.
     * @returns {Question} A question object of the specified type.
     */
    createQuestion() {}
  }

  /**
   * A factory for creating SingleChoiceQuestion objects.
   */
  class SingleChoiceQuestionFactory extends QuestionFactory {

    /**
     * 
     * @param {object} data - Data used to construct the question object.
     */
    constructor(data) {
        this.data = data
    }

    /**
     * Creates a new SingleChoiceQuestion object.
     *
     * @throws {Error} If an invalid question type is provided.
     * @returns {SingleChoiceQuestion} A newly created SingleChoiceQuestion object.
     */
    createQuestion() {
        return new SingleChoiceQuestion(this.data);
    }
  }
  
  /**
   * A factory for creating MultipleChoiceQuestion objects.
   */
  class MultipleChoiceQuestionFactory extends QuestionFactory {

    /**
     * 
     * @param {object} data - Data used to construct the question object.
     */
        constructor(data) {
            this.data = data
        }
    /**
     * Creates a new MultipleChoiceQuestion object.
     *
     * @throws {Error} If an invalid question type is provided.
     * @returns {MultipleChoiceQuestion} A newly created MultipleChoiceQuestion object.
     */
    createQuestion() {
        return new MultipleChoiceQuestion(this.data);
    }
  }
  
  /**
   * A factory for creating FreeAnswerQuestion objects.
   */
  class FreeAnswerQuestionFactory extends QuestionFactory {

        /**
     * 
     * @param {object} data - Data used to construct the question object.
     */
        constructor(data) {
            this.data = data
        }
    /**
     * Creates a new FreeAnswerQuestion object.
     *
     * @throws {Error} If an invalid question type is provided.
     * @returns {FreeAnswerQuestion} A newly created FreeAnswerQuestion object.
     */
    createQuestion() {
        return new FreeAnswerQuestion(this.data);
    }
  }
  
  /**
   * A factory for creating DragAndDropQuestion objects.
   */
  class DragAndDropQuestionFactory extends QuestionFactory {

            /**
     * 
     * @param {object} data - Data used to construct the question object.
     */
            constructor(data) {
                this.data = data
            }
    /**
     * Creates a new DragAndDropQuestion object.
     *
     * @throws {Error} If an invalid question type is provided.
     * @returns {DragAndDropQuestion} A newly created DragAndDropQuestion object.
     */
    createQuestion() {
        return new DragAndDropQuestion(this.data);
    }
  }
  
  /**
   * A manager class that handles creating and retrieving specific question factories based on question types.
   */
  class QuestionFactoryManager {

    /**
     * 
     * @param {QuestionFactory} questionFactory 
     */
    constructor(questionFactory) {
        const questionObject = questionFactory.createQuestion()
        this.question = questionObject.getQuestion()
        this.answerKey = questionObject.getAnswerKey()
    }

  }
  
  module.exports = {
    QuestionFactoryManager,
    SingleChoiceQuestionFactory,
    MultipleChoiceQuestionFactory,
    FreeAnswerQuestionFactory,
    DragAndDropQuestionFactory,
  };