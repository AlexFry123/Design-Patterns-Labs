const CONTENT_TYPES = {
    VIDEO: "VIDEO",
    TEXT: "TEXT",
    QUIZ: "QUIZ",
  };

class Content {
    /**
     * Creates a new Content object.
     *
     * @param {string} title - The title of the content piece.
     * @param {string} type - The type of content (e.g., "lecture", "quiz", "assignment").
     * @param {*} content - The actual content data (format depends on the type).
     */
    constructor(title, type, content) {
      // Abstract content type
      this.title = title;
      this.type = type;
      this.content = content;
    }
  }

  class QuizContent extends Content {
    /**
     * Creates a new QuizContent object.
     *
     * @param {string} title - The title of the quiz.
     * @param {Question[]} questions - An array of question objects with specific structure
     *                             (replace 'array' with the actual question structure).
     */
    constructor(title, questions) {
      super(title, CONTENT_TYPES.QUIZ, questions);
    }
  }
  class TextContent extends Content {
    /**
     * Creates a new TextContent object.
     *
     * @param {string} title - The title of the text content.
     * @param {string} text - The actual text content.
     */
    constructor(title, text) {
      super(title, CONTENT_TYPES.TEXT, text);
    }
  }
  class VideoContent extends Content {
    /**
     * Creates a new VideoContent object.
     *
     * @param {string} title - The title of the video content.
     * @param {string} videoUrl - The URL of the video.
     */
    constructor(title, videoUrl) {
      super(title, CONTENT_TYPES.VIDEO, videoUrl);
    }
  }

  module.exports = {
    VideoContent, QuizContent, TextContent, Content, CONTENT_TYPES
  }