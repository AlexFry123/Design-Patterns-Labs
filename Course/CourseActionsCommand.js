class CourseActionsCommand {
    execute() {}; // Method to execute the specific course editing action
    undo() {}
}

class AddLessonCommand extends CourseActionsCommand {
    constructor(courseBuilder,lesson) {
        this.courseBuilder = courseBuilder
        this.lesson = lesson
    }
  
    execute() {
        this.courseBuilder.addLesson(this.lesson.title, this.lesson.order, this.lesson?.content = "", this.lesson?.contentAssetId = "", this.lesson?.quizId = "");
        this.executed = true
    }

    undo() {
        if(this.executed)
            this.courseBuilder.deleteLesson(this.lesson.title)
        else console.log('No command executed yet')
    }
}

class DeleteLessonCommand extends CourseActionsCommand {
    constructor(courseBuilder,lessonTitle) {
        this.courseBuilder = courseBuilder
        this.lessonTitle = lessonTitle
    }
  
    execute() {
        this.deletedLesson = this.courseBuilder.deleteLesson(lessonTitle)
    }

    undo() {
        if(this.deletedLesson)
            this.courseBuilder.addLesson(this.deletedLesson.title, this.deletedLesson.order, this.deletedLesson?.content = "", this.deletedLesson?.contentAssetId = "", this.deletedLesson?.quizId = "")
        else console.log('No command executed yet')
    }
}