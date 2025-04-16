const express = require("express");
const {
  AdministratorFactory,
  QuizPublisherFactory,
  QuizerFactory,
} = require("./Auth/AuthFactory");
const { ROLES } = require("./Auth/User");
const { QUESTION_TYPES } = require("./Quiz/Questions/Question");
const {
  QuestionFactoryManager,
  DragAndDropQuestionFactory,
  FreeAnswerQuestionFactory,
  MultipleChoiceQuestionFactory,
  SingleChoiceQuestionFactory,
} = require("./Quiz/QuestionAbstractFactory");
const app = express();
const PORT = 5050;
const CourseBuilder = require("./Course/CourseBuilder");
const CoursePrototype = require("./Course/CoursePrototype");
const createCourseTemplate = require("./Course/createCourseTemplate");
const COURSE_CATEGORY_TYPES = {
  ACADEMIC: "ACADEMIC",
  PERSONAL_DEVELOPMENT: "PERSONAL_PERSONAL_DEVELOPMENT",
  BUSINESS_AND_PROFESSIONAL: "BUSINESS_AND_PROFESSIONAL",
  ART_AND_DESIGN: "ART_AND_DESIGN",
  TECHNOLOGY: "TECHNOLOGY",
  LIFE_STYLE: "LIFE_STYLE",
};
const Lesson = require("./Lesson/Lesson");
const VideoLectureStrategy = require("./Lesson/VideoLectureStrategy");
const InteractiveExerciseStrategy = require("./Lesson/InteractiveExerciseStrategy");
const TextContentStrategy = require("./Lesson/TextContentStrategy");
const {
  AddAssessmentStep,
  CreateContentStep,
  DefineLearningObjectivesStep,
} = require("./Content/ContentTemplateStep");
const Content = require("./Content/Content");
const Course = require("./Course/Course");
const {
  ApplePay,
  GooglePay,
  MasterCard,
  PayPal,
  PAYMENT_TYPES,
} = require("./Payment/PaymentMethods");

app.use(express.json()); // Для обробки JSON-запитів

// POST ендпоінт
app.post("/users", (req, res) => {
  const { email, name, password, role } = req.body;
  let factory = null;
  switch (role) {
    case ROLES.QUIZER:
      factory = new QuizerFactory({ name, email, password });
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

  const newUser = factory.create();

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
      quizQuestion = new QuestionFactoryManager(
        new DragAndDropQuestionFactory({ question, answers })
      );
      break;
    case QUESTION_TYPES.FREE_ANSWER:
      quizQuestion = new QuestionFactoryManager(
        new FreeAnswerQuestionFactory({ question, answers })
      );
      break;
    case QUESTION_TYPES.MULTIPLE:
      quizQuestion = new QuestionFactoryManager(
        new MultipleChoiceQuestionFactory({ question, answers })
      );
      break;
    case QUESTION_TYPES.SINGLE:
      quizQuestion = new QuestionFactoryManager(
        new SingleChoiceQuestionFactory({ question, answers })
      );
      break;
    default:
      return res
        .status(500)
        .send({ message: "Невідомий тип питання", data: null });
  }

  res.status(200).send({
    message: "Успішно додано нове запитання",
    data: {
      question: quizQuestion.question,
      answerKey: quizQuestion.answerKey,
    },
  });
});

app.post("/courses", (req, res) => {
  const { courseName, description, instructorId, lessons } = req.body;
  const lessonTemplates1 = lessons.map(
    (name, index) => new Lesson(name, index)
  );
  const prototype1 = new CoursePrototype(
    courseName,
    description,
    instructorId,
    COURSE_CATEGORY_TYPES.LIFE_STYLE,
    lessonTemplates1
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  createCourseTemplate(courseBuilder);

  res.status(200).send({
    message: "Успішно створено нового користувача",
    data: { email, name, password, role, rights: newUser.getPermissions() },
  });
});

app.get("/lessons", async (req, res) => {
  // Example usage
  const videoLectureStrategy = new VideoLectureStrategy();
  const interactiveExerciseStrategy = new InteractiveExerciseStrategy();
  const textContentStrategy = new TextContentStrategy();

  const lesson1 = new Lesson(
    "Introduction",
    1,
    "Introduction text",
    null,
    uuid.v4(),
    videoLectureStrategy
  );

  const lesson2 = new Lesson(
    "Interactive Activity",
    2,
    "",
    null,
    uuid.v4(),
    interactiveExerciseStrategy
  );

  const lesson3 = new Lesson(
    "Conclusion",
    3,
    "",
    null,
    uuid.v4(),
    textContentStrategy
  );

  await lesson1.displayLesson(); // Calls VideoLectureStrategy.deliverLesson()
  await lesson2.displayLesson(); // Calls InteractiveExerciseStrategy.deliverLesson()
  await lesson3.displayLesson(); // Calls TextContentStrategy.deliverLesson() (assuming lessonContent is set)

  res.status(200).send({
    message: "Успішно показано уроки",
  });
});

app.put("/course/:id", (req, res) => {
  const lessonTemplates1 = [new Lesson("Conclusion", 2)];
  const prototype1 = new CoursePrototype(
    "Basic Course",
    "A fundamental course...",
    "instructor123",
    LIFE_STYLE,
    lessonTemplates1
  );

  // Example usage: Build a course with some functionalities
  const courseBuilder = new CourseBuilder(prototype1);
  courseBuilder.addLesson("Introduction", 1);

  const course = courseBuilder.getCourse();

  const newLesson = new Lesson("JavaScript for beginners", 3);
  const addLessonCommand = new AddLessonCommand(courseBuilder, newLesson);
  course.setActionsCommand(addLessonCommand);
  course.executeActionsCommand();

  console.log("addLessonCommand", course);

  const deleteLessonCommand = new DeleteLessonCommand(
    courseBuilder,
    newLesson.title
  );
  course.setActionsCommand(deleteLessonCommand);
  course.executeActionsCommand();

  console.log("deleteLessonCommand", course);

  res.status(200).send({
    message: "Успішно змінено курс",
  });
});

app.put("/content/:id", (req, res) => {
  // Define a content template with specific steps
  const myTemplate = new Content("Interactive Lecture", [
    new DefineLearningObjectivesStep(),
    new CreateContentStep(),
    new AddAssessmentStep(),
  ]);

  // Generate the content using the template
  myTemplate.generateContent();
});

app.post("/payment/:id", (req, res) => {
  const user = new QuizerFactory({
    name: "john_doe",
    email: "john.doe@example.com",
    password: uuid.v4(),
    balance: {
      [PAYMENT_TYPES.MASTER_CARD]: 25,
      [PAYMENT_TYPES.APPLE_PAY]: 50,
      [PAYMENT_TYPES.GOOGLE_PAY]: 75,
      [PAYMENT_TYPES.PAY_PAL]: 110,
    },
  }).create();
  const course = new Course(
    "JavaScript Fundamentals",
    "JavaScript for beginners",
    uuid.v4(),
    undefined,
    100
  );

  const masterCard = new MasterCard(user.getBalance(PAYMENT_TYPES.MASTER_CARD));
  const applePay = new ApplePay(user.getBalance(PAYMENT_TYPES.APPLE_PAY));
  const googlePay = new GooglePay(user.getBalance(PAYMENT_TYPES.GOOGLE_PAY));
  const payPal = new PayPal(user.getBalance(PAYMENT_TYPES.PAY_PAL));

  masterCard.setNext(googlePay);
  googlePay.setNext(applePay);
  applePay.setNext(payPal);

  masterCard.pay(course.getPrice());

  masterCard.show();
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
