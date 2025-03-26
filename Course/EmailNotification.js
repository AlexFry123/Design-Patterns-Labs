const { CourseCompletionObserver } = require("~/domains/Course");

/**
 * Concrete observer class that handles course completion notifications by sending an email.
 * (Simulates email functionality for demonstration purposes).
 */
class EmailNotification extends CourseCompletionObserver {
  constructor(email){
    this.sgAgent = new Sendgrid()
    this.email = email
  }

  async onCourseCompletion(course) {
    await this.sgAgent.sendMail({
      to: this.email,
      subject: `${course.title} course completed`,
      text: `Congratulations, you\'ve successfully finished course ${course.title}`
    })
  }
}

module.exports = EmailNotification;