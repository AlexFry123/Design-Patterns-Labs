const uuid = require("uuid");
const COURSE_CATEGORY_TYPES = {
    ACADEMIC: "ACADEMIC",
    PERSONAL_DEVELOPMENT: "PERSONAL_PERSONAL_DEVELOPMENT",
    BUSINESS_AND_PROFESSIONAL: "BUSINESS_AND_PROFESSIONAL",
    ART_AND_DESIGN: "ART_AND_DESIGN",
    TECHNOLOGY: "TECHNOLOGY",
    LIFE_STYLE: "LIFE_STYLE",
  };
  const { Lesson } = require("~/domains/Lesson");

/**
 * Represents a course model within the online learning platform.
 *
 * @class
 */
class Course {
  /**
   * Creates a new Course object.
   *
   * @constructor
   * @param {string} title - The title of the course.
   * @param {string} description - A detailed description of the course content and objectives.
   * @param {string} instructorId - The ID of the instructor who created the course.
   * @param {string} [category] - An optional category to classify the course by subject or skill.
   * @param {number} price - Price of the course.
   */
  constructor(title, description, instructorId, category, price) {
    this._id = uuid.v4();
    this.title = title || "Default title";
    this.description = description || "Default title";
    this.instructorId = instructorId || uuid.v4();
    this.category = category || COURSE_CATEGORY_TYPES.LIFE_STYLE;
    this.price = price || 0;
    /**
     * @type {Lesson[]}
     * @public
     */
    this.lessons = []; // Array to store Lesson objects
  }

  /**
   * Calculates and returns the total number of lessons currently in the course.
   *
   * @method
   * @returns {number} - The total number of lessons in the course.
   */
  getTotalLessons() {
    return this.lessons.length;
  }

  /**
   * Get the price.
   *
   * @return {number} - The price of the course
   */
  getPrice() {
    return this.price;
  }
}

module.exports = Course;