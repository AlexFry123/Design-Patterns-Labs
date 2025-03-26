/**
 * Interface defining an observer for course completion notifications.
 */
class CourseCompletionObserver {
    /**
     * Method called when a course is completed, allowing the observer to handle the notification.
     *
     * @param course - The Course object that has been completed.
     */
    onCourseCompletion(course) {}
}
  
module.exports = CourseCompletionObserver;