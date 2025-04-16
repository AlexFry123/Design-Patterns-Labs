const Iterator = require("./Iterator");

/**
 * Iterator class for iterating over lessons in a course.
 *
 * This class implements the Iterator interface, allowing clients to
 * use a for...of loop or other iteration mechanisms to access lessons
 * sequentially.
 */
class LessonIterator extends Iterator {
  /**
   * Creates a new LessonIterator instance.
   *
   * @param {Lesson[]} lessons - Array of Lesson objects representing the lessons
   *   in the course.
   */
  constructor(lessons) {
    super();
    /**
     * Current index pointing to the next lesson in the iteration.
     */
    this._currentIdx = 0;
    /**
     * Array containing all lessons in the course.
     */
    this._lessons = lessons;
  }

  /**
   * Implements the `next()` method of the Iterator interface.
   *
   * Returns the next lesson object in the iteration or `undefined`
   * if there are no more lessons.
   *
   * @returns {IteratorResult<Lesson, any>} - An object with properties
   *   `done` (boolean) indicating if iteration is complete and `value`
   *   (Lesson | undefined) containing the next lesson or `undefined`
   */
  next() {
    if (this._currentIdx < this._lessons.length) {
      return {
        done: false,
        value: this._lessons[this._currentIdx++],
      };
    } else {
      return { done: true, value: undefined };
    }
  }

  // Optional methods (useful for some use cases)
  /**
   * Checks if there are more lessons remaining in the iteration.
   *
   * @returns {boolean} - True if there are more lessons, false otherwise.
   */
  hasNext() {
    return this._currentIdx < this._lessons.length;
  }

  /**
   * Resets the iterator to the beginning of the lesson array.
   */
  reset() {
    this._currentIdx = 0;
  }
}

module.exports = LessonIterator;