const uuid = require("uuid");
const {CompletedState,NotStartedState} = require('./LessonState')

/**
 * Represents a learning module within a course.
 *
 * @class
 */
class Lesson {
  /**
   * Creates a new Lesson object.
   *
   * @constructor
   * @param {string} title - The title of the lesson.
   * @param {number} order - The sequential order of the lesson within the course.
   * @param {string|VideoContent|TextContent|QuizContent} [content] - Optional textual content for the lesson. Defaults to an empty string.
   * @param {string|null} [contentAssetId] - Optional foreign key referencing a content asset (e.g., PDF, video).
   * @param {string|null} [quizId] - Optional foreign key referencing a quiz associated with the lesson.
   * @param {LessonDeliveryStrategy|null} deliveryStrategy - The LessonDeliveryStrategy object defining the delivery method for this lesson.
   * @param {string|null} lessonId - The uniq identifier for the lesson
   */
  constructor(
    title,
    order,
    content = "",
    contentAssetId = null,
    quizId = null,
    deliveryStrategy = null,
    lessonId = null,
  ) {
    this._id = lessonId || uuid.v4();
    this.title = title;
    this.order = order;
    this.content = content;
    this.contentAssetId = contentAssetId;
    this.quizId = quizId || uuid.v4();
    this.deliveryStrategy = deliveryStrategy;
    this.state = new NotStartedState(); // Initial state
  }

  /**
   * Returns the title of the lesson.
   *
   * @returns {string} - The title of the lesson.
   */
  getTitle() {
    return this.title;
  }

  /**
   * Returns the content of the lesson.
   *
   * @returns {string} - The content of the lesson.
   */
  getContent() {
    return this.content;
  }

  /**
   * Returns the unique identifier of the lesson.
   *
   * @returns {string} - The unique identifier of the lesson.
   */
  getId() {
    return this._id;
  }

  /**
   * Sets the current state of the lesson.
   *
   * @param {LessonState} state - The new state object for the lesson.
   */
  setState(state) {
    this.state = state;
  }

  /**
   * Returns the current state of the lesson progress.
   *
   * @returns {LessonState} - The current state object of the lesson.
   */
  getState() {
    return this.state;
  }

  /**
   * Transitions the lesson state to the next state in the sequence.
   *
   * This method delegates the logic to the current state object through
   * the `next()` method of the current `LessonState`.
   */
  nextState() {
    this.state = this.state.next();
  }

  /**
   * Allows the user to mark the lesson as completed.
   *
   * This method delegates the logic to the current state object.
   */
  completeLesson() {
    if (this.state.getStateLabel() === LESSON_STATES.COMPLETED) return;
    this.setState(new CompletedState());
  }

  displayLesson() {
    this.deliveryStrategy.deliverLesson();
  }

  /**
   * Allows the user to mark the lesson as completed.
   *
   * This method delegates the logic to the current state object.
   */
  completeLesson() {
    if (this.state === LESSON_STATES.COMPLETED) return;
    this.setState(LESSON_STATES.COMPLETED);
  }

    /**
   * Accepts a ContentVisitor object and allows it to process the Lesson.
   *
   * This method calls the `visitLesson` method on the provided visitor, passing the current
   * Lesson object as an argument. This enables the visitor to interact with the specific details
   * and functionalities associated with a Lesson.
   *
   * @param {ContentVisitor} visitor - The visitor object that will process the lesson.
   */
    acceptVisitor(visitor) {
      visitor.visitLesson(this);
    }
}

module.exports = Lesson;