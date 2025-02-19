const {
  Quizer,
  QuizPublisher,
  Administrator,
  ROLES,
} = require("./User");

class AuthRecordFactory {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  create() {}
}

class QuizerFactory extends AuthRecordFactory {
  constructor({ name, email, password }) {
    super({ name, email, password });
  }

  create() {
    return new Quizer({
      name: this.name,
      email: this.email,
      password: this.password,
      role: ROLES.QUIZER,
    });
  }
}

class QuizPublisherFactory extends AuthRecordFactory {
  constructor({ name, email, password }) {
    super({ name, email, password });
  }

  create() {
    return new QuizPublisher({
      name: this.name,
      email: this.email,
      password: this.password,
      role: ROLES.QUIZ_PUBLISHER,
    });
  }
}

class AdministratorFactory extends AuthRecordFactory {
  constructor({ name, email, password }) {
    super({ name, email, password });
  }

  create() {
    return new Administrator({
      name: this.name,
      email: this.email,
      password: this.password,
      role: ROLES.ADMINISTRATOR,
    });
  }
}

module.exports = {
  AdministratorFactory,
  QuizPublisherFactory,
  QuizerFactory
};
