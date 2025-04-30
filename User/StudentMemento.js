/**
 * A class representing a memento that captures a student's progress at a specific point in time.
 *
 * This class is used to implement the Memento pattern for restoring student progress in a course.
 */
class StudentMemento {
  /**
   * Creates a new StudentMemento object.
   *
   * @param {string} courseId - The ID of the course for which this memento represents progress.
   * @param {Lesson[]} completedLessons - An array of IDs representing the completed lessons at the time of memento creation.
   * @param {Date} lastAccessed - The date and time the student last accessed the course.
   */
  constructor(courseId, completedLessons, lastAccessed) {
    this.courseId = courseId;
    this.completedLessons = completedLessons; // Array of completed lesson IDs
    this.lastAccessed = lastAccessed; // Date/Time of last access
  }

  /**
   * Retrieves the course ID associated with this memento.
   *
   * @returns {string} The ID of the course.
   */
  getCourseId() {
    return this.courseId;
  }

  /**
   * Returns a copy of the completed lessons array to avoid unintended mutation.
   *
   * @returns {Lesson[]} A copy of the completed lessons array.
   */
  getCompletedLessons() {
    return [...this.completedLessons]; // Return a copy
  }

  /**
   * Returns a new Date object representing the last access time to avoid passing the original object by reference.
   *
   * @returns {Date} A new Date object representing the last access time.
   */
  getLastAccessed() {
    return new Date(this.lastAccessed.getTime()); // Return a new Date object
  }
}

module.exports = StudentMemento;
