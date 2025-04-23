// Conditional element that evaluates a condition and displays content based on the result
const LearningPathInterpreter = require("./LearningPathInterpreter");
const Expression = require("./Expression");

/**
 * Represents a conditional expression used in content evaluation.
 * This expression evaluates a condition and displays different content based on the result.
 */
class ConditionalExpression extends Expression {
  /**
   * The condition to be evaluated.
   * @type {string}
   */
  condition;

  /**
   * The content to be displayed if the condition evaluates to true.
   * @type {Expression}
   */
  trueContent;

  /**
   * The content to be displayed if the condition evaluates to false.
   * @type {Expression}
   */
  falseContent;

  /**
   * Creates a new ConditionalExpression instance.
   *
   * @param {string} condition The condition string to be evaluated.
   * @param {Expression} trueContent The content to display if the condition is true.
   * @param {Expression} falseContent The content to display if the condition is false.
   */
  constructor(condition, trueContent, falseContent) {
    super();
    this.condition = condition;
    this.trueContent = trueContent;
    this.falseContent = falseContent;
  }

  /**
   * Evaluates the conditional expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} The evaluated content (content from trueContent or falseContent).
   */
  evaluate(context) {
    const interpreter = new LearningPathInterpreter(); // Reuse existing interpreter logic
    return interpreter.evaluate(this.condition, context)
      ? this.trueContent.evaluate(context)
      : this.falseContent.evaluate(context);
  }
}

module.exports = ConditionalExpression;