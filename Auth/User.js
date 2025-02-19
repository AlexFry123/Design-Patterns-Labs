const ROLES = {
  QUIZER: "quizer",
  QUIZ_PUBLISHER: "quiz-publisher",
  ADMINISTRATOR: "administrator"
};

// Базовий клас User
class User {
  constructor({ name, email, password, role }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getPermissions() {}
}

// Класи для кожної ролі
class Quizer extends User {
  constructor({ name, email, password }) {
    super({ name, email, password, role: ROLES.EMPLOYEE });
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
  constructor({ name, email, password }) {
    super({ name, email, password, role: ROLES.MANAGER });
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
  constructor({ name, email, password }) {
    super({ name, email, password, role: ROLES.CHAIN_LEVEL });
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