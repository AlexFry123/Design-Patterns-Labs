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