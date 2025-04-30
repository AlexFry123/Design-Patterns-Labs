const ROLES = {
  QUIZER: "quizer",
  QUIZ_PUBLISHER: "quiz-publisher",
  ADMINISTRATOR: "administrator"
};

// Базовий клас User
class User {
  constructor({ name, email, password, role, balance }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.balance = {
      [PAYMENT_TYPES.MASTER_CARD]: balance?.[PAYMENT_TYPES.MASTER_CARD] || 0,
      [PAYMENT_TYPES.PAY_PAL]: balance?.[PAYMENT_TYPES.PAY_PAL] || 0,
      [PAYMENT_TYPES.APPLE_PAY]: balance?.[PAYMENT_TYPES.APPLE_PAY] || 0,
      [PAYMENT_TYPES.GOOGLE_PAY]: balance?.[PAYMENT_TYPES.GOOGLE_PAY] || 0,
    };
  }

  getPermissions() {}

    /**
   * Returns the user's current balance.
   * @param {('MASTER_CARD'|'PAY_PAL'|'APPLE_PAY'|'GOOGLE_PAY')|undefined} paymentType - The user's role within the platform (e.g., "Student", "Teacher", "Administrator").
   * @returns {number} - The user's balance.
   */
    getBalance(paymentType) {
      if (!paymentType)
        return Object.keys(this.balance).reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0,
        );
  
      return this.balance?.[paymentType] || 0;
    }

    receiveMessage(message, from) {
      console.log(
        `${this.role} ${this.name} received message: ${message} (from ${from.role} ${from.name})`,
      );
    }
}

// Класи для кожної ролі
class Quizer extends User {
  constructor({ name, email, password, balance }) {
    super({ name, email, password, role: ROLES.EMPLOYEE, balance });
  }

  getPermissions() {
    return [
      "login",
      "logout",
      "view_quizes",
      "pass_quiz"
    ];
  }

  /**
   * Sets the current course for which the student is working. This is used for associating Mementos with specific courses.
   *
   * @param {string} courseId - The ID of the course the student is currently enrolled in.
   */
  setCurrentCourse(courseId) {
    this.currentCourse = courseId;
    this.mementos[courseId] = []; // Initialize Memento array for the course if not already present
  }

  /**
   * Creates a new memento object capturing the student's current progress in the current course.
   *
   * @returns {StudentMemento|null} A new StudentMemento object if successful, null otherwise (e.g., student not enrolled in a course).
   */
  createMemento() {
    if (!this.currentCourse) {
      console.error("Student is not enrolled in any course!");
      return null;
    }

    const completedLessons = [...this.getCompletedLessons(this.currentCourse)]; // Copy completed lessons
    const lastAccessed = new Date();
    const memento = new StudentMemento(
      this.currentCourse,
      completedLessons,
      lastAccessed,
    );
    this.mementos[this.currentCourse].push(memento);
    return memento;
  }

  /**
   * Attempts to restore the student's progress from the provided memento.
   *
   * @param {StudentMemento} memento - The memento object containing the student's progress to restore.
   */
  restoreFromMemento(memento) {
    if (!memento || memento.getCourseId() !== this.currentCourse) {
      console.error("Invalid memento or mismatch with current course!");
      return;
    }

    // Update student's progress based on memento data
    this.setCompletedLessons(
      memento.getCourseId(),
      memento.getCompletedLessons(),
    );
  }

    /**
   * Returns a copy of the completed lessons array to avoid unintended mutation.
   *
   * @param {string} courseId - unique identifier of Course
   * @returns {Lesson[]} A copy of the completed lessons array.
   */
    getCompletedLessons(courseId) {
      if (!courseId) {
        console.error("Invalid course ID provided to getCompletedLessons!");
        return [];
      }
  
      return this.completedLessons[courseId] || []; // Return an empty array if the Course not found
    }
  
    /**
     * Sets the completed lesson IDs for a specific course within the student's data.
     *
     * @param {string} courseId - The ID of the course for which to set the completed lessons.
     * @param {Lesson[]} completedLessons - An array of IDs representing the student's completed lessons.
     */
    setCompletedLessons(courseId, completedLessons) {
      if (!courseId || !completedLessons || !Array.isArray(completedLessons)) {
        console.error("Invalid arguments provided to setCompletedLessons!");
        return;
      }
  
      this.completedLessons[courseId] = completedLessons;
    }
  
    /**
     * Marks a lesson as completed for the student in the specified course.
  
     * @param {string} courseId - The ID of the course containing the completed lesson.
     * @param {Lesson} lesson - The ID of the lesson the student has completed.
     */
    completeLesson(courseId, lesson) {
      if (!courseId || !lesson) {
        console.error("Invalid arguments provided to completeLesson!");
        return;
      }
  
      lesson.completeLesson();
  
      const completedLessons = this.getCompletedLessons(courseId);
      completedLessons.push(lesson); // Update student's completed lessons
      this.setCompletedLessons(courseId, completedLessons);
  
      // Additional logic for persisting data (e.g., database update)
      console.log(
        `${this.getUserName()} has completed lesson ${
          lesson._id
        } in course ${courseId}`,
      );
    }
}

class QuizPublisher extends User {
  constructor({ name, email, password, balance }) {
    super({ name, email, password, role: ROLES.MANAGER, balance });
  }

  getPermissions() {
    return [
      "login",
      "logout",
      "create_quiz",
      "edit_quiz",
      "delete_quiz",
      "view_quizes"
    ];
  }
}

class Administrator extends User {
  constructor({ name, email, password, balance }) {
    super({ name, email, password, role: ROLES.CHAIN_LEVEL, balance });
  }

  getPermissions() {
    return [
        "login",
        "logout",
        "create_quiz",
        "edit_quiz",
        "delete_quiz",
        "view_quizes",
        "create_user",
        "edit_user",
        "delete_user"
      ];
  }
}

module.exports = { Administrator, QuizPublisher, Quizer, ROLES }