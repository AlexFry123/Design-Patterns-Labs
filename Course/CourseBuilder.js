const Course = require("./Course");

/**
 * Facilitates course creation by allowing the addition, editing, reordering, and linking of lessons.
 *
 * @class CourseBuilder
 */
class CourseBuilder {
  /**
   * Creates a CourseBuilder instance with a reference to an existing Course object (optional).
   * If no course is provided, a new Course object will be created.
   *
   * @constructor
   * @param {Course} [course] - An optional Course object to serve as the foundation for course creation.
   */
  /**
   * Creates a CourseBuilder instance with a reference to the base CoursePrototype.
   *
   * @constructor
   * @param {CoursePrototype} coursePrototype - The CoursePrototype object serving as the foundation for course creation.
   */
  constructor(coursePrototype) {
    this.course = coursePrototype.clone(); // Create a working copy of the course structure
  }

  /**
   * Adds a new Lesson object to the course with specified properties.
   *
   * @method
   * @param {string} title - The title of the new lesson.
   * @param {number} order - The sequential order of the lesson within the course.
   * @param {string} [content] - Optional textual content for the lesson. Defaults to an empty string.
   * @param {string} [contentAssetId] - Optional foreign key referencing a content asset (e.g., PDF, video).
   * @param {string} [quizId] - Optional foreign key referencing a quiz associated with the lesson.
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
      // TODO Uncomment when Lesson class is added
//   addLesson(title, order, content = "", contentAssetId = "", quizId = "") {

//     const lesson = new Lesson(title, order, content, contentAssetId, quizId);
//     this.course.lessons.push(lesson);
//     return this; // Allow method chaining for better readability
//   }

  /**
   * Edits an existing lesson within the course structure by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to be edited.
   * @param {string} newTitle - The new title for the lesson (optional, defaults to the existing title).
   * @param {string} [newContent] - Optional new content for the lesson (defaults to the existing content).
   * @param {string} [newContentAssetId] - Optional new content asset ID (defaults to the existing ID).
   * @param {string} [newQuizId] - Optional new quiz ID (defaults to the existing ID).
   * @param {string|undefined} [state] - Optional new state (defaults to the state).
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index is provided.
   */
  // TODO Uncomment when Lesson class is added
//   editLesson(
//     lessonIndex,
//     newTitle,
//     newContent = "",
//     newContentAssetId = null,
//     newQuizId = null,
//     state,
//   ) {
//     if (lessonIndex >= 0 && lessonIndex < this.course.lessons.length) {
//       /**
//        * The left operand of the binary expression.
//        * @type {Lesson}
//        */
//       const lesson = this.course.lessons[lessonIndex];

//       lesson.title = newTitle || lesson.title;
//       lesson.content = newContent || lesson.content;
//       lesson.contentAssetId = newContentAssetId || lesson.contentAssetId;
//       lesson.quizId = newQuizId || lesson.quizId;

//       if (state) {
//         lesson.setState(state);
//       }
//     } else {
//       throw new Error("Invalid lesson index provided");
//     }
//     return this; // Allow method chaining
//   }

  /**
   * Reorders existing lessons within the course by swapping their positions.
   * Throws an error if invalid lesson indices are provided.
   *
   * @method
   *  @param {number} fromIndex - The original index of the lesson to be moved.
   *  @param {number} toIndex - The target index where the lesson should be placed.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If invalid lesson index provided for reordering
   */
  // TODO Uncomment when Lesson class is added
//   reorderLessons(fromIndex, toIndex) {
//     if (
//       fromIndex >= 0 &&
//       fromIndex < this.course.lessons.length &&
//       toIndex >= 0 &&
//       toIndex < this.course.lessons.length &&
//       fromIndex !== toIndex
//     ) {
//       const lesson = this.course.lessons.splice(fromIndex, 1)[0];
//       this.course.lessons.splice(toIndex, 0, lesson);
//     } else {
//       throw new Error("Invalid lesson index provided for reordering");
//     }
//     return this; // Allow method
//   }
  /**
   * Links a content asset (e.g., PDF, video) to a specific lesson by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to link the content asset to.
   * @param {string} contentAssetId - The foreign key referencing the content asset.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index provided for linking content asset
   */
  // TODO Uncomment when Lesson class is added
//   linkContentAsset(lessonIndex, contentAssetId) {
//     if (lessonIndex >= 0 && lessonIndex < this.course.lessons.length) {
//       this.course.lessons[lessonIndex].contentAssetId = contentAssetId;
//     } else {
//       throw new Error(
//         "Invalid lesson index provided for linking content asset",
//       );
//     }
//     return this; // Allow method chaining
//   }

  /**
   * Links a quiz to a specific lesson by index.
   * Throws an error if an invalid lesson index is provided.
   *
   * @method
   * @param {number} lessonIndex - The index of the lesson to link the quiz to.
   * @param {string} quizId - The foreign key referencing the quiz.
   * @returns {CourseBuilder} - This object instance for method chaining.
   * @throws {Error} - If an invalid lesson index provided for linking quiz
   */
  linkQuiz(lessonIndex, quizId) {
    if (lessonIndex >= 0 && lessonIndex < this.course.lessons.length) {
      this.course.lessons[lessonIndex].quizId = quizId;
    } else {
      throw new Error("Invalid lesson index provided for linking quiz");
    }
    return this; // Allow method chaining
  }

  /**
   * Retrieves the final course object after all customizations are complete.
   *
   * @method
   * @returns {Course} - The final Course object with the instructor-defined structure.
   */
  getCourse() {
    return this.course;
  }

  /**
   * Resets the course builder to its initial state.
   *
   * @method
   * @param {string} price - The price of the course
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
  setCoursePrice(price) {
    this.course.price = price;
    return this;
  }

  /**
   * Resets the course builder to its initial state.
   *
   * @method
   * @returns {CourseBuilder} - This object instance for method chaining.
   */
  reset() {
    this.course = new Course();
    return this;
  }
}

module.exports = CourseBuilder;