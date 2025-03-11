const createCourseTemplate = (courseBuilder) => {
  courseBuilder
    .addLesson("Introduction", 1)
    .addLesson("Lesson 1 Content", 2, "This is the lesson content.")
    .linkContentAsset(1, " someContentAssetId ") // Link content asset to lesson 2

  const finalCourse = courseBuilder.getCourse();
  console.log(finalCourse); // Display the final course structure
  console.log(finalCourse.getTotalLessons()); // Display the final course structure
  return finalCourse
};

module.exports = createCourseTemplate;