/**
 * Abstract class representing a visitor for processing course content elements.
 *
 * This class defines the core structure for visitors that can traverse and interact with
 * different types of course content. Subclasses should implement the specific behavior for
 * visiting each content type.
 */
class ContentVisitor {
    /**
     * Visits a Course object.
     *
     * Subclasses should implement the specific logic for processing a Course. This might
     * involve actions like displaying course information or initiating further traversal of
     * its child content elements (lessons).
     *
     * @param {Course} course - The Course object to visit.
     */
    visitCourse(course) {}
  
    /**
     * Visits a Lesson object.
     *
     * Subclasses should implement the specific logic for processing a Lesson. This might
     * involve actions like tracking completion status, retrieving content details, or performing
     * adjustments based on the visitor's purpose.
     *
     * @param {Lesson} lesson - The Lesson object to visit.
     */
    visitLesson(lesson) {}
  }
  
  module.exports = ContentVisitor;