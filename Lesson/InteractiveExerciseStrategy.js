const LessonDeliveryStrategy = require("../Lesson/LessonDeliveryStrategy");

/**
 * Concrete strategy class for delivering lessons via interactive exercises (quizzes, simulations).
 * This class implements the `deliverLesson()` method to handle presenting an interactive element
 * and managing user interactions within the lesson content.
 */
class InteractiveExerciseStrategy extends LessonDeliveryStrategy {
  /**
   * Delivers the lesson content using an interactive exercise format.
   * This method is expected to:
   *   - Depending on the specific exercise type (quiz, simulation):
   *     - Prepare the exercise content (e.g., questions, answer choices, simulation parameters).
   *     - Display the interactive element on the user interface.
   *     - Handle user interactions like answering questions or manipulating simulation elements.
   *     - Provide feedback or scoring mechanisms based on user interaction (implementation not shown here).
   */
  async deliverLesson() {
    console.log("Delivering lesson via interactive exercise...");
    // (Simulate presenting the exercise and user interactions)

    const interactiveLessonContent = await fetch()

    interactiveLessonContent.forEach((content) => {
      content.show()
      sleep(5000)
    })
  }
}

module.exports = InteractiveExerciseStrategy;