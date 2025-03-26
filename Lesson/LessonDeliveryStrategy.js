/**
 * Abstract base class defining the contract for lesson delivery strategies.
 * Concrete subclasses must implement the `deliverLesson()` method for specific delivery logic.
 */

class LessonDeliveryStrategy {
    /**
     * Abstract method that concrete subclasses must implement to deliver the lesson content
     * according to their specific delivery method (e.g., video lecture, interactive exercise).
     */
    deliverLesson() {} // Abstract method for specific delivery logic
}
  
module.exports = LessonDeliveryStrategy;