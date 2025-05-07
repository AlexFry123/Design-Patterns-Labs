const ContentVisitor = require("./ContentVisitor");
const LESSON_STATES = {
    NOT_STARTED: "NOT_STARTED",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
  };

/**
 * Concrete subclass of ContentVisitor that tracks course content completion progress.
 *
 * This visitor specifically focuses on calculating the overall progress of a course by visiting
 * its lessons and tracking their completion status. It inherits from the abstract `ContentVisitor`
 * class and implements the `visitCourse` and `visitLesson` methods to achieve progress tracking.
 */
class ContentProgressVisitor extends ContentVisitor {
  /**
   * The number of completed lessons within the course.
   * @private
   */
  completedLessons = 0;

  /**
   * The total number of lessons in the course.
   * @private
   */
  totalLessons = 0;

  /**
   * The  number of in progress lessons within the course.
   * @private
   */
  inProgressLessons = 0;

  /**
   * The ID of the course being tracked (assuming the `Course` object has an `_id` property).
   * @private
   */
  courseId = null;

  /**
   * The title of the course being tracked (assuming the `Course` object has a `title` property).
   * @private
   */
  courseTitle = null;

  /**
   * The category of the course being tracked (assuming the `Course` object has a `category` property).
   * @private
   */
  courseCategory = null;

  /**
   * The price of the course being tracked (assuming the `Course` object has a `getPrice` method).
   * @private
   */
  coursePrice = null;

  /**
   * Creates a new ContentProgressVisitor instance.
   *
   * @param {Course} course - The Course object for which to track progress.
   * @throws {TypeError} - If the provided argument is not a Course object.
   */
  constructor(course) {
    super();
    this.totalLessons = course.getTotalLessons();
  }

  /**
   * Visits a Course object.
   *
   * This method can be overridden to implement specific logic for handling Course objects
   * during the visitor's traversal. By default, it does nothing.
   *
   * @param {Course} course - The Course object being visited.
   */
  visitCourse(course) {
    this.courseId = course._id; // Assuming `_id` exists in Course
    this.courseTitle = course.title;
    this.coursePrice = course.getPrice(); // Assuming `getPrice` method exists in Course
    this.courseCategory = course.category;
  }

  /**
   * Visits a Lesson object and updates the completion progress.
   *
   * This method checks the completion status of the provided Lesson object. If the lesson
   * is marked as completed, it increments the `completedLessons` counter. This allows the
   * visitor to track the overall progress based on the completion of individual lessons.
   *
   * @param {Lesson} lesson - The Lesson object being visited.
   */
  visitLesson(lesson) {
    this.completedLessons +=
      lesson.getState().getStateLabel() === LESSON_STATES.COMPLETED ? 1 : 0;
    this.inProgressLessons +=
      lesson.getState().getStateLabel() === LESSON_STATES.IN_PROGRESS ? 1 : 0;
  }

  /**
   * Calculates and returns a comprehensive object representing the overall course progress and additional course details.
   *
   * This method goes beyond a simple progress string. It calculates the course progress percentage
   * using the tracked `completedLessons` and `totalLessons`. Additionally, it leverages the potentially
   * available properties of the provided `Course` object (e.g., `_id`, `title`, `category`, `getPrice`)
   * to construct a detailed course information object. The method then returns an object containing
   * the following properties:
   *
   *  - `course`: An object containing details about the course, including its ID, price, title, category,
   *              and a flag indicating if it's free (based on the `coursePrice`).
   *  - `inProgressLessons`: The number of lessons currently marked as "in progress".
   *  - `completedLessons`: The number of completed lessons.
   *  - `totalLessons`: The total number of lessons in the course.
   *  - `progress`: A string representation of the overall course progress, similar to the previous version.
   *
   * @returns {object} - An object containing comprehensive course progress information.
   */
  getOverallProgress() {
    const progressPercentage = Math.floor(
      (this.completedLessons / this.totalLessons) * 100,
    );
    return {
      course: {
        _id: this.courseId,
        price: this.coursePrice,
        title: this.courseTitle,
        category: this.courseCategory,
        isFree: this.coursePrice === 0,
      },
      inProgressLessons: this.inProgressLessons,
      completedLessons: this.completedLessons,
      totalLessons: this.totalLessons,
      progress: `Course Progress: ${progressPercentage}% (${this.completedLessons} out of ${this.totalLessons} lessons completed)`,
    };
  }
}

module.exports = ContentProgressVisitor;