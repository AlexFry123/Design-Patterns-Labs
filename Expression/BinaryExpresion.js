// Base class for representing a binary expression (e.g., AND, OR)
const Expression = require("./Expression");

/**
 * Base class for representing binary expressions used in learning path conditions.
 * These expressions combine two other expressions using operators (e.g., AND, OR).
 */
class BinaryExpression extends Expression {
  /**
   * The left operand of the binary expression.
   * @type {Expression}
   */
  left;

  /**
   * The right operand of the binary expression.
   * @type {Expression}
   */
  right;

  /**
   * Creates a new BinaryExpression instance.
   *
   * @param {Expression} left The left operand of the expression.
   * @param {Expression} right The right operand of the expression.
   */
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  /**
   * This method should be implemented by subclasses to define how the binary expression is evaluated.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} The evaluation result (true or false based on the operator and operands).
   */
  evaluate(context) {}
}

module.exports = BinaryExpression;