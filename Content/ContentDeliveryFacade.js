const { CONTENT_TYPES } = require("~/__constants__");
const {
  VideoContent,
  TextContent,
  QuizContent,
} = require("./Content");
const { Question } = require("../Quiz/Questions/Question");

/**
 *  A facade class that simplifies access to and delivery of course content.
 */
class ContentDeliveryFacade {
  /**
   * Creates a new ContentDeliveryFacade instance associated with a specific course.
   *
   * @param {Course} course - The course object for which to provide content delivery.
   */
  constructor(course) {
    this.course = course;
  }

  /**
   * Retrieves and prepares the course content for delivery, considering user enrollment and permissions.
   *
   * @returns {Content[]} - An array of formatted Content objects representing the course content.
   */
  getCourseContent() {
    const courseContent = this.course.getCourseContent();
    // Filter content based on user enrollment and permissions (replace with your logic)
    const filteredContent = courseContent.map((lesson) => {
      if (
        Array.isArray(lesson.content) &&
        lesson.content.every((item) => item instanceof Question)
      ) {
        return { ...lesson, type: CONTENT_TYPES.QUIZ };
      }

      if (
        typeof lesson.content === "string" &&
        lesson.content.startsWith("https://")
      ) {
        return { ...lesson, type: CONTENT_TYPES.VIDEO };
      }

      if (typeof lesson.content === "string") {
        return { ...lesson, type: CONTENT_TYPES.TEXT };
      }
    });

    return this.prepareContentForDelivery(filteredContent);
  }

  /**
   * Prepares the provided course content for delivery by converting it into appropriate Content objects.
   *
   * @param {Lesson[]} content - An array of lesson objects (structure may vary).
   * @returns {Content[]} - An array of formatted Content objects.
   */
  prepareContentForDelivery(content) {
    const formattedContent = [];
    for (const item of content) {
      switch (item.type) {
        case CONTENT_TYPES.VIDEO:
          formattedContent.push(new VideoContent(item.title, item.content)); // Assuming content is a video URL
          break;
        case CONTENT_TYPES.TEXT:
          formattedContent.push(new TextContent(item.title, item.content));
          break;
        case CONTENT_TYPES.QUIZ:
          formattedContent.push(new QuizContent(item.title, item.content)); // Assuming content has quiz questions
          break;
        default:
          console.warn(`Unsupported content type: ${item.type}`);
      }
    }
    return formattedContent;
  }
}

module.exports = ContentDeliveryFacade