/**
 * Represents a template for generating content.
 *
 * This class follows the Template Method pattern, defining a
 * general structure for content generation while allowing subclasses
 * to provide specific steps.
 */
class Content {
    /**
     * Creates a new ContentTemplate instance.
     *
     * @param {string} name - The name of the content template.
     * @param {ContentTemplateStep[]} steps - An array of ContentTemplateStep objects
     *   defining the steps involved in generating the content.
     */
    constructor(name, steps) {
      this.name = name;
      this.steps = steps;
    }
  
    /**
     * Generates the content based on the defined steps.
     *
     * This method iterates through the `steps` array and calls the `execute`
     * method on each `ContentTemplateStep` object. The `execute` method
     * is responsible for performing the specific content generation logic.
     */
    generateContent() {
      for (const step of this.steps) {
        step.execute();
      }
    }
  }

module.exports = Content