const Course = require("./Course");
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
   * Represents a blueprint or template for course creation using the Prototype design pattern.
   *
   * @class
   */
  class CoursePrototype extends Course {
    /**
     * Creates a new CoursePrototype object.
     *
     * @constructor
     * @param {string} title - The title of the course prototype.
     * @param {string} description - A detailed description of the course content and objectives.
     * @param {string} instructorId - The ID of the instructor who created the course.
     * @param {string} [category] - An optional category to classify the course by subject or skill.
     * @param {Lesson[]} lessonTemplates - An array of Lesson objects representing the lesson structure.
     */
    constructor(title, description, instructorId, category, lessonTemplates) {
      super(title,description,instructorId,category || COURSE_CATEGORY_TYPES.LIFE_STYLE)
      this.lessonTemplates = lessonTemplates.map((lesson) => {
        return new Lesson(
          lesson.title,
          lesson.order,
          lesson.content,
          lesson.contentAssetId,
          lesson.quizId,
        );
      });
    }
  
    /**
     * Creates a new Course object based on the current CoursePrototype.
     *
     * @method
     * @returns {Course} - A new Course object with a copy of the lesson structure.
     */
    clone() {
      return new CoursePrototype();
    }
  }
  
  module.exports = CoursePrototype;