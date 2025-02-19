const express = require("express");
const {
  AdministratorFactory,
  QuizPublisherFactory,
  QuizerFactory,
} = require("./Auth/AuthFactory");
const { ROLES } = require("./Auth/User");
const { QUESTION_TYPES } = require("./Quiz/Questions/Question");
const { QuestionFactoryManager, DragAndDropQuestionFactory, FreeAnswerQuestionFactory, MultipleChoiceQuestionFactory, SingleChoiceQuestionFactory } = require("./Quiz/QuestionAbstractFactory");
const app = express();
const PORT = 5050;

app.use(express.json()); // Для обробки JSON-запитів

// POST ендпоінт
app.post("/users", (req, res) => {
  const { email, name, password, role } = req.body;
  let factory = null;
  switch (role) {
    case ROLES.QUIZER:
        factory = new QuizerFactory({ name, email, password })
      break;
    case ROLES.QUIZ_PUBLISHER:
        factory = new QuizPublisherFactory({ name, email, password });
      break;
    case ROLES.ADMINISTRATOR:
        factory = new AdministratorFactory({ name, email, password });
      break;
    default:
      return res
        .status(500)
        .send({ message: "Невідома роль користувача", data: null });
  }
  //TODO Add real auth record create in Firebase Auth

  const newUser = factory.create()

  res.status(200).send({
    message: "Успішно створено нового користувача",
    data: { email, name, password, role, rights: newUser.getPermissions() },
  });
});


app.post("/quizes/:quizId/questions", (req, res) => {
  const { question, answers, questionType } = req.body;
  let quizQuestion = null;
  switch (questionType) {
    case QUESTION_TYPES.DRAG_AND_DROP:
      quizQuestion = new QuestionFactoryManager(new DragAndDropQuestionFactory({question, answers}))
      break;
    case QUESTION_TYPES.FREE_ANSWER:
      quizQuestion = new QuestionFactoryManager(new FreeAnswerQuestionFactory({question, answers}))
      break;
    case QUESTION_TYPES.MULTIPLE:
      quizQuestion = new QuestionFactoryManager(new MultipleChoiceQuestionFactory({question, answers}))
      break;
      case QUESTION_TYPES.SINGLE:
        quizQuestion = new QuestionFactoryManager(new SingleChoiceQuestionFactory({question, answers}))
      break;
    default:
      return res
        .status(500)
        .send({ message: "Невідомий тип питання", data: null });
  }

  res.status(200).send({
    message: "Успішно додано нове запитання",
    data: { question: quizQuestion.question, answerKey: quizQuestion.answerKey },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
