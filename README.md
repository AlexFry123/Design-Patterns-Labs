# 🏨 Система для створення і проходження опитувань
## 📖 Опис
Цей додаток призначений для створення і проходження тестів-опитувальників на різноманітні теми

#### У системі має бути три різних типа користувачів із різними рівнями доступу:
- Звичайний користувач(Quizer)
- Публікувач опитувальників(Quiz publisher)
- Адміністратор(Administrator)
#### Адміністратор має мати змогу отримати доступ до форми створення користувача через адмін панель.
* Форма повинна вимагати наступну інформацію:
  - Ім'я користувача (унікальне)
  - Адреса електронної пошти (унікальна, перевірена на правильний формат)
  - Пароль (відповідає вимогам до складності, підтвердження пароля)
  - Ім'я
  - Прізвище
  - Роль (вибір зі списку: Quizer, Administrator, Quiz publisher)
* Адміністратор має мати змогу надіслати форму для створення нового облікового запису користувача.
* Після успішного створення система повинна відобразити повідомлення про підтвердження і, за бажанням, перенаправити адміністратора на сторінку управління користувачами.
* Має бути реалізоване оброблення помилок для некоректних або відсутніх даних (наприклад, дублікати імені користувача, неправильний формат електронної пошти, слабкий пароль).
#### Адміністратор має мати змогу видаляти облікові записи користувачів.
* Адміністратор має мати змогу отримати доступ до сторінки деталей користувача для конкретного користувача (як описано в "Читання користувача").
* Ця сторінка повинна надавати чітку опцію (наприклад, кнопку) для видалення облікового запису користувача.
* Натискання на опцію видалення повинно запитати у адміністратора підтвердження з чітким попередженням про незворотність цієї дії.
* Після підтвердження система повинна видалити обліковий запис користувача та всі пов'язані з ним дані (враховуючи політики очищення даних і нормативні вимоги).
* Адміністратор має отримати повідомлення про підтвердження після успішного видалення і бути перенаправлений назад на сторінку управління користувачами (відфільтровану, щоб виключити видаленого користувача).
#### Публікувач опитувальників має мати змогу створювати нові запитання для використання в уроках та вікторинах.
* Публікувач має мати змогу отримати доступ до форми створення запитань в інтерфейсі створення курсу.
* Форма повинна дозволяти викладачу вказати наступне:
  - Текст запитання (чіткий і лаконічний)
  - Тип запитання (вибір зі списку: Одиничний вибір, Множинний вибір, Перетягування, Відкрите питання)
  - Варіанти відповідей (текстові поля або завантаження для Перетягування) — застосовується для деяких типів запитань
  - Вибір правильної відповіді(ей) (залежно від типу запитання) — застосовується для деяких типів запитань
  - Рівень складності (вибір зі списку: Початковий, Середній, Просунутий)
* Після успішного створення система повинна відобразити повідомлення про підтвердження і, за бажанням, перенаправити викладача до списку запитань для курсу.
* Має бути реалізоване оброблення помилок для відсутніх або некоректних даних (наприклад, порожній текст запитання, неправильний вибір відповідей для типів запитань).
#### Публікувач опитувальників має мати змогу створювати курси і уроки до яких будуть привязані опитувальники.
*Форма курсу повинна вимагати наступну інформацію:
  - Назва курсу (чітка та лаконічна)
  - Опис курсу (детальний огляд змісту курсу)
  - Цільовий рівень (випадний список: Початковий, Середній, Просунутий)
  - Фокус на навички (випадний список з різними сферами навичок, такими як граматика, словниковий запас тощо)
  - Вартість зарахування (необов'язково, поле для введення числа)
  - Зображення курсу (функціонал для завантаження)
* Викладач повинен мати змогу вказати порядок уроків в курсі під час створення (необов'язково).
* Система повинна дозволяти викладачеві попередньо переглянути деталі курсу перед публікацією.
* Після успішного створення курс за замовчуванням буде позначений як непублікований.
* Викладач повинен отримати повідомлення про підтвердження і бути перенаправленим на сторінку керування курсами.
* Повинна бути реалізована обробка помилок для відсутніх або некоректних даних (наприклад, порожній заголовок, некоректний формат вартості).
#### Користувач має мати змогу переглядати список пройдених/непройдених тестів.
Цей розділ повинен містити список всіх тестів, які користувач пройшов/не пройшов.
Натискання на тест у списку повинно перенаправити студента на сторінку деталей тесту.
Сторінка деталей курсу повинна надавати огляд результату тесту(якщо пройдений) або короткий опис з можливістю розпочати тест(якщо не пройдений).
#### Як викладач (автор курсу), я хочу мати можливість обирати метод подачі матеріалу (наприклад, відеолекція, інтерактивна вправа) для кожного уроку мого курсу, щоб адаптувати контент до різних стилів навчання та типів матеріалів.
* Як студент, я хочу бачити зміст уроку відповідно до вибраної стратегії, щоб ефективно навчатися.
* Як викладач, я хочу мати можливість розширювати систему новими стратегіями подачі матеріалу (наприклад, симуляції, кейс-стаді), щоб пропонувати ширший спектр навчального досвіду.
#### Як адміністратор, я хочу отримувати сповіщення, коли студент завершує мій курс, щоб бути в курсі подій і, за потреби, надавати додаткову підтримку.
#### Як адміністратор, я хочу, щоб система сповіщень про завершення курсу була гнучкою та розширюваною, щоб у майбутньому можна було додавати нові методи сповіщень (наприклад, SMS, push-сповіщення).
#### Як адміністратор, я хочу мати контроль над отриманням сповіщень про завершення курсу, щоб обирати, які саме сповіщення я хочу отримувати.
#### Як адміністратор, я хочу додавати нові уроки до своїх курсів, щоб розширювати тематику і надавати більше навчального матеріалу.
#### Як адміністратор, я хочу видаляти зайві уроки зі своїх курсів, щоб зберігати контент сфокусованим і не перевантажувати студентів.

## Лабораторна 1(Factory, Abstract Factory)
#### Задачу "Створення механізму додавання нових користувачів" можна реалізувати за допомогою патерну Factory Method:
- Є абстрактний клас User, і підкласи Quizer, QuizPublisher, Administrator з різною реалізацією методу getPermissions
- Є AuthRecordFactory клас, у якого є абстрактний метод create і дочірні класи QuizerFactory, QuizPublisherFactory, AdministratorFactory, кожен з яких вміє створювати відповідного користувача.
- Для створення різних користувачів потрібно створити відповідну фабрику
    * factory = new QuizerFactory({ name, email, password })
- і викликати метод create() що поверне нам користувача відповідного типу
    * const newUser = factory.create()
#### Підзадачу «Створення запитань до опитувальника» можна реалізувати за допомогою паттерну AbstractFactory
- Є абстрактний клас Question і дочірні класи MultipleChoiceQuestion, FreeAnswerQuestion, DragAndDropQuestion і SingleChoiceQuestion.
- Є QuestionFactory – абстрактний клас, що надає метод createQuestion реалізація котрого в SingleChoiceQuestionFactory, MultipleChoiceQuestionFactory, FreeAnswerQuestionFactory, DragAndDropQuestionFactory повертатиме екземпляри відповідних класів «питань».
- Є клас-клієнт, котрий отримуватиме в конструкторі якусь з фабрик і створюватиме відповідне «питання»(Question)
- Далі для створення питання знадобиться лише викликати конструктор відповідної фабрики з його необхідними параметрами передавши цей виклик в конструктор класа-клієнта
    * quizQuestion = new QuestionFactoryManager(new DragAndDropQuestionFactory({question, answers}))
- і ми зможемо взаємодіяти з об’єктом quizQuestion як з відповідним об’єктом питання.

## Лабораторна 2 (Builder, Prototype)
### Задачу "Створення та керування структурою та змістом онлайн-курсів у зручний та ефективний спосіб. Це включає визначення структури курсу, додавання уроків, призначення контентних матеріалів та налаштування опитувальників." можна реалізувати за допомогою патернів Builder і Prototype

#### Визначення моделі курсу: Клас Course буде представляти загальну структуру та метадані курсу. Він повинен включати такі атрибути:
- title (рядок): основна назва курсу.
- description (рядок): детальний опис змісту курсу та цілей навчання.
- instructor_id (рядок): зовнішній ключ, що посилається на таблицю User (ідентифікує автора курсу).
- category (рядок): необов'язкове поле для категоризації курсу за темою або фокусом навички.
- lessons (список): спочатку порожній список, який буде заповнюватися об'єктами Lesson під час створення курсу. 

#### Визначення моделі уроку: Цей клас Lesson буде представляти окремі навчальні модулі в межах курсу. Він повинен включати такі атрибути:
- title (рядок): назва конкретного уроку.
- order (число): послідовний порядок уроку в межах курсу.
- content (рядок): необов'язкове поле для зберігання базового текстового контенту для уроку.
- content_asset_id (рядок): необов'язковий зовнішній ключ, що посилається на таблицю Content Asset (для зв'язування з зовнішніми ресурсами).
- quiz_id (рядок): необов'язковий зовнішній ключ, що посилається на таблицю Quiz (для зв'язування тесту з уроком).

#### CoursePrototype
Мета: цей компонент буде служити для створення клону об'єкта курсу. 
Функціональність:
- Надати попередньо визначені структури курсів з прикладами планів уроків (необов'язково).
- Дозволити викладачам налаштовувати прототип, додаючи, видаляючи або змінюючи порядок уроків.
- Надати можливість зв'язувати існуючі контентні матеріали (наприклад, PDF, відео) з конкретними уроками.
- Дозволити створювати нові уроки в межах структури прототипу.

#### CourseBuilder
Мета: цей компонент буде основним інтерфейсом для викладачів для створення своїх курсів.
Функціональність:
- Дозволити викладачам доступати та керувати існуючими проектами CoursePrototype або створювати нові курси з нуля.
- Сприяти додаванню уроків, включаючи визначення назв, порядку та змісту.
- Інтегруватися з системою управління контентними матеріалами для безперешкодного зв'язування ресурсів з уроками.
- Надати функціональність для налаштування тестів у межах уроків або як окремих оцінок курсу (зв'язок з системою управління тестами).
- Дозволити попередній перегляд структури курсу та змісту перед завершенням і публікацією.

#### Переваги використання CoursePrototype та CourseBuilder:
- Спрощене створення курсу: забезпечує структурований підхід до створення курсів, що підвищує ефективність.
- Гнучкість: викладачі можуть використовувати попередньо визначені прототипи або налаштовувати власні структури.
- Організація контенту: дозволяє легко організовувати уроки, контентні матеріали та тести в межах курсу.
- Зручний інтерфейс: спрощує процес створення курсу для викладачів.

## Лабораторна 3(Strategy, Observer, Command)
#### Задачу "Як викладач (автор курсу), я хочу мати можливість обирати метод подачі матеріалу (наприклад, відеолекція, інтерактивна вправа) для кожного уроку мого курсу, щоб адаптувати контент до різних стилів навчання та типів матеріалів." можна виконати за допомогою патерну Strategy
* Створити інтерфейсний елемент для викладачів, який дозволить обирати метод подачі матеріалу під час створення або редагування курсу. Це може бути випадаюче меню, перемикачі (radio buttons) або інший відповідний UI-компонент.
* Реалізувати логіку заповнення варіантів вибору доступними стратегіями подачі (наприклад, VideoLectureStrategy, InteractiveExerciseStrategy, TextContentStrategy).
* Оновити конструктор класу Lesson, щоб він приймав параметр deliveryStrategy, який відповідає вибраному методу подачі.
* Модифікувати логіку відображення або подачі курсу для отримання призначеної deliveryStrategy з поточного об'єкта уроку.
* В залежності від отриманого типу стратегії викликати відповідний метод deliverLesson() у відповідному об'єкті стратегії. Це гарантує виконання конкретної логіки для відеолекцій, інтерактивних вправ або текстового контенту.
* Оновити інтерфейс користувача, щоб він відображав вибраний метод подачі (наприклад, відеоплеєр для відеолекцій, інтерактивні елементи для вправ або відформатований текст для текстового контенту).
* Підтримувати абстрактний базовий клас LessonDeliveryStrategy з методом deliverLesson().
* Створювати нові підкласи стратегії для кожного додаткового методу подачі (наприклад, SimulationStrategy, CaseStudyStrategy). Ці класи повинні наслідувати LessonDeliveryStrategy та реалізовувати свою специфічну логіку deliverLesson().
* Забезпечити можливість динамічного виявлення та використання нових класів стратегій на основі їхніх назв або конфігураційних налаштувань.
#### Задачі "Як адміністратор, я хочу отримувати сповіщення, коли студент завершує мій курс, щоб бути в курсі подій і, за потреби, надавати додаткову підтримку.", "Як адміністратор, я хочу, щоб система сповіщень про завершення курсу була гнучкою та розширюваною, щоб у майбутньому можна було додавати нові методи сповіщень (наприклад, SMS, push-сповіщення)." та "Як адміністратор, я хочу мати контроль над отриманням сповіщень про завершення курсу, щоб обирати, які саме сповіщення я хочу отримувати." можна виконати за допомогою патерну Observer.
* Реалізувати інтерфейс CourseCompletionObserver з методом для обробки сповіщень про завершення курсу.
* Модифікувати клас Course, щоб він зберігав зареєстрованих спостерігачів (обсерверів) і надавав методи для їх додавання, видалення та сповіщення.
* Розробити конкретні класи-спостерігачі для різних методів сповіщення (наприклад, EmailNotification, SMSNotification).
* Забезпечити, щоб клас Course взаємодіяв зі спостерігачами через загальний інтерфейс CourseCompletionObserver, що дозволить легко додавати нові типи сповіщень.
* Реалізувати функціональність для викладачів (адміністраторів) з можливістю реєстрації та скасування підписки на сповіщення про завершення курсу в інтерфейсі керування курсом.
* Оновити методи реєстрації та скасування реєстрації спостерігачів у класі Course, щоб вони враховували дії інструкторів.
#### Задачі "Як адміністратор, я хочу додавати нові уроки до своїх курсів, щоб розширювати тематику і надавати більше навчального матеріалу." та "Як адміністратор, я хочу видаляти зайві уроки зі своїх курсів, щоб зберігати контент сфокусованим і не перевантажувати студентів." можна виконати за допомогою патерну Command
* Створити клас AddLessonCommand, який приймає ID курсу та об'єкт уроку як аргументи.
* Реалізувати метод execute() у AddLessonCommand, який:
  - Знаходить курс за ID.
  - Додає переданий урок до списку уроків курсу.
  - (Симулює) збереження оновлених даних курсу.
* Використовувати методи setEditCommand і executeEditCommand з User Story 1 для додавання уроків.
* Оновити інтерфейс редагування курсу, щоб викладачі могли створювати нові уроки та викликати executeEditCommand з об'єктом AddLessonCommand для їх додавання. 
* Створити клас DeleteLessonCommand, який приймає ID курсу та ID уроку як аргументи.
* Реалізувати метод execute() у DeleteLessonCommand, який:
  - Знаходить курс за ID.
  - Визначає урок із переданим ID у списку уроків курсу.
  - Видаляє знайдений урок із курсу.
  - (Симулює) збереження оновлених даних курсу.
* Використовувати методи setEditCommand і executeEditCommand з User Story 1 для видалення уроків.
* Оновити інтерфейс редагування курсу, щоб викладачі могли вибирати уроки та викликати executeEditCommand з об'єктом DeleteLessonCommand для їх видалення.

## Лабораторна 4 (Template, Macrocommand)
#### Як викладач, я хочу створювати різні типи навчального контенту (лекції, тести тощо) за допомогою заздалегідь визначених шаблонів, щоб забезпечити послідовність та дотримання найкращих практик.

Кроки реалізації:

* Створити абстрактний клас Content з методом generateContent.
* Визначити інтерфейс ContentTemplateStep з абстрактним методом execute.
* Створити конкретні підкласи ContentTemplate (наприклад, LectureTemplate, QuizTemplate).
* Реалізувати метод generateContent у кожному підкласі шаблону. Цей метод буде шаблонним і визначатиме загальний порядок виконання.
* Усередині generateContent викликати об'єкти ContentTemplateStep у визначеній послідовності згідно з типом контенту (наприклад, DefineLearningObjectivesStep, CreateContentStep, AddAssessmentStep).
* Створити конкретні реалізації ContentTemplateStep для кожного кроку у робочому процесі (наприклад, DefineLearningObjectivesStepImpl, CreateContentStepImpl, AddAssessmentStepImpl).
* Реалізувати метод execute у кожній реалізації кроку, інкапсулюючи специфічну логіку для цього кроку (наприклад, запит користувача на визначення цілей, створення розділів контенту, додавання тестів).

#### Як автор курсів, я хочу змінювати різні UI-компоненти свого курсу (наприклад, кнопки, поля введення, картки) на основі стандартного шаблону, щоб забезпечити різноманітну стилістику для різних курсів

* Дозволити конкретним підкласам шаблонів перевизначати окремі кроки в межах методу generateContent. Це дає змогу налаштовувати робочий процес для певних типів контенту.
* Надати авторам контенту можливість додавати або видаляти кроки з попередньо визначеного робочого процесу в межах обраного шаблону.

## Лабораторна 5 (State, Iterator, Chain of responsibility)
### Iterator
#### Як студент, я хочу мати доступ до списку всіх уроків у курсі в порядку їх подання.
Ця користувацька історія безпосередньо пов'язана з ітерацією через уроки у порядку, в якому вони подані в навчальному плані курсу. Для цього можна використати LessonIterator, який просто проходиться по масиву уроків у класі Course.

#### Як студент, я хочу мати можливість переходити між окремими уроками курсу — від поточного уроку до наступного або попереднього.
Ця користувацька історія потребує більшого контролю над процесом ітерації. Можна створити підклас ітератора або розширити наявний, додавши специфічні методи, такі як currentLesson() чи goToNextLesson().

#### Як адміністратор, я хочу мати можливість легко додавати нові уроки до курсу без впливу на доступ студентів до вже існуючих уроків.
Шаблон «Ітератор» сприяє слабкому зв’язуванню, що гарантує відсутність необхідності змінювати код, який використовує клас Course, при додаванні нових уроків. Метод getLessons() просто повертатиме ітератор, який включає нові уроки.

#### Як адміністратор, я хочу мати можливість змінювати порядок уроків у курсі, щоб налаштувати навчальний процес.
Ця користувацька історія передбачає оновлення внутрішнього порядку масиву уроків у класі Course. Будь-який ітератор, отриманий через getLessons(), надалі відображатиме новий порядок.

#### (Необов’язково) Як адміністратор, я хочу мати можливість обмежити доступ до окремих уроків курсу залежно від прогресу студента чи інших критеріїв.
Ця користувацька історія передбачає фільтрацію уроків, які будуть показані студенту. Можна створити спеціальний ітератор, що фільтрує масив уроків відповідно до правил доступу перед його поверненням клієнтському коду.

### State
#### Як студент, я хочу бачити поточний прогрес уроку, на який я записаний.
Ця користувацька історія безпосередньо пов’язана з отриманням поточного стану уроку за допомогою методу getState() у класі Lesson. Інтерфейс користувача може відображати мітку стану (наприклад, "Не розпочато", "У процесі", "Завершено") на основі повернутого об'єкта стану.

#### Як студент, я хочу мати можливість позначити урок як завершений після його проходження.
Ця користувацька історія передбачає виклик методу completeLesson() для об’єкта Lesson. Цей метод делегує логіку відповідному об’єкту стану, забезпечуючи коректну поведінку відповідно до поточного етапу прогресу.

#### Як студент, якщо я повторно відкриваю завершений урок, я не повинен мати змоги випадково знову позначити його як завершений.
Ця користувацька історія підкреслює переваги використання різних об'єктів стану. Реалізація CompletedState методу completeLesson() може обробити цей сценарій, показавши повідомлення або нічого не виконуючи, запобігаючи випадковому повторному завершенню.

#### (Необов’язково) Як викладач, я хочу мати можливість відстежувати загальний прогрес студентів, записаних на мій курс.
Ця користувацька історія потребує додаткового функціоналу поза межами поточної реалізації шаблону «Стан». Може знадобитися окремий механізм для відстеження прогресу кожного студента та його агрегування для всього курсу. Інформація про стан уроків може слугувати основою для цієї функціональності.

### Chain of responsibility
#### Як студент, я хочу зареєструватися на курс, використовуючи свій бажаний спосіб оплати (Mastercard, PayPal, Google Pay, Apple Pay), щоб отримати доступ до навчальних матеріалів.
* Система повинна відображати список доступних способів оплати.
* Студент повинен мати можливість вибрати бажаний спосіб оплати.
* Система повинна спробувати обробити платіж за допомогою обраного способу.
* Якщо на вибраному способі оплати недостатньо коштів, система повинна спробувати використати резервний спосіб, якщо він налаштований (ланцюжок відповідальностей).
* Система повинна надавати студенту чіткий зворотний зв’язок про статус оплати (успіх, помилка, недостатньо коштів).
* Після успішної оплати студент повинен бути зарахований на курс.

#### Як адміністратор, я хочу мати можливість налаштовувати порядок, у якому пробуються способи оплати під час реєстрації, щоб пріоритезувати бажані методи.
* Система повинна дозволяти адміністраторам визначати порядок, у якому використовуються способи оплати під час реєстрації (наприклад, спочатку Mastercard, потім PayPal).
* Адміністратор повинен мати можливість переглянути поточно налаштований порядок способів оплати.

#### Як розробник, я хочу мати змогу легко інтегрувати нові способи оплати в систему, використовуючи шаблон "ланцюжок відповідальностей", щоб система могла адаптуватися до нових платіжних технологій.
* Код має бути добре структурованим і використовувати шаблон "ланцюжок відповідальностей" для обробки платежів.
* Додавання нового класу платіжного методу повинно вимагати мінімальних змін у наявному коді.
* Новий клас платіжного методу повинен наслідувати базовий клас PaymentProcessor і реалізовувати необхідні методи.



