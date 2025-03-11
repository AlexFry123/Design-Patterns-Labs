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
const CourseBuilder = require("./Course/CourseBuilder");
const CoursePrototype = require('./Course/CoursePrototype')
const createCourseTemplate = require('./Course/createCourseTemplate')
const COURSE_CATEGORY_TYPES = {
    ACADEMIC: "ACADEMIC",
    PERSONAL_DEVELOPMENT: "PERSONAL_PERSONAL_DEVELOPMENT",
    BUSINESS_AND_PROFESSIONAL: "BUSINESS_AND_PROFESSIONAL",
    ART_AND_DESIGN: "ART_AND_DESIGN",
    TECHNOLOGY: "TECHNOLOGY",
    LIFE_STYLE: "LIFE_STYLE",
  };
const Lesson = require("./Lesson/Lesson");

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

app.post("/courses", (req, res) => {
  const { courseName, description, instructorId, lessons } = req.body;
  const lessonTemplates1 = lessons.map((name,index) => new Lesson(name, index));
  const prototype1 = new CoursePrototype(
    courseName,
    description,
    instructorId,
    COURSE_CATEGORY_TYPES.LIFE_STYLE,
    lessonTemplates1,
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  createCourseTemplate(courseBuilder)

  res.status(200).send({
    message: "Успішно створено нового користувача",
    data: { email, name, password, role, rights: newUser.getPermissions() },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
