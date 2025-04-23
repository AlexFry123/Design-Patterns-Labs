// Represents an OR expression in a learning path condition (either side can be true)
const BinaryExpression = require("./BinaryExpresion");
const Expression = require("./Expression");

class VariableExpression extends Expression {
  /**
   * The name of the variable to be retrieved from the context.
   * @type {string}
   */
  variable;
  /**
   * Creates a new VariableExpression instance.
   *
   * @param {string} variableName The name of the variable to be retrieved.
   */
  constructor(variableName) {
    super();
    this.variableName = variableName;
  }

  /**
   * Evaluates the variable expression by retrieving the value from the context.
   *
   * @param {object} context The context object containing user data.
   * @returns {any} The value of the variable from the context (or false if the variable is missing).
   */
  evaluate(context) {}
}

/**
 * Represents an OR expression in learning path conditions (either side can be true).
 */
class OrExpression extends BinaryExpression {
  /**
   * Evaluates the OR expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if either left or right operand evaluates to true, false otherwise.
   */
  evaluate(context) {
    return this.left.evaluate(context) || this.right.evaluate(context);
  }
}

/**
 * Represents a literal value expression used in learning path conditions.
 */
class LiteralExpression extends Expression {
  /**
   * The literal value.
   * @type {any}
   */
  value = undefined;

  /**
   * Creates a new LiteralExpression instance.
   *
   * @param {any} value The literal value.
   */
  constructor(value) {
    super();
    this.value = value;
  }

  /**
   * Evaluates the literal expression (simply returns the value).
   *
   * @param {object} context The context object (unused for literal expressions).
   * @returns {any} The literal value.
   */
  evaluate(context) {
    return this.value;
  }
}

/**
 * Represents a comparison expression used in learning path conditions.
 * This expression compares a variable value with an expected value using an operator.
 */
class ComparisonExpression extends Expression {
  /**
   * The comparison operator (e.g., ===, !==, >=, <=, >, <).
   * @type {string}
   */
  operator;

  /**
   * The expected value for the comparison.
   * @type {any}
   */
  expectedValue;

  /**
   * Creates a new ComparisonExpression instance.
   *
   * @param {string} operator The comparison operator.
   * @param {any} expectedValue The expected value for the comparison.
   */
  constructor(operator, expectedValue) {
    super();
    this.operator = operator;
    this.expectedValue = expectedValue;
  }

  /**
   * Evaluates the comparison expression based on the provided context.
   *
   * @param {object} context The context object containing user data.
   * @returns {boolean} The comparison result (true if the condition holds, false otherwise).
   */
  evaluate(context) {
    const variableValue = context[this.variableName] || 0; // Handle missing variables with default (e.g., 0 for numbers)
    switch (this.operator) {
      case "===":
        return variableValue === this.expectedValue;
      case "!==":
        return variableValue !== this.expectedValue;
      case ">=":
        return variableValue >= this.expectedValue;
      case "<=":
        return variableValue <= this.expectedValue;
      case ">":
        return variableValue > this.expectedValue;
      case "<":
        return variableValue < this.expectedValue;
      default:
        throw new Error(`Unsupported comparison operator: ${this.operator}`);
    }
  }
}

/**
 * Represents an AND expression in learning path conditions (both sides must be true).
 */
class AndExpression extends BinaryExpression {
  /**
   * Evaluates the AND expression based on the provided context.
   *
   * @param {object} context The context object containing data for evaluation.
   * @returns {boolean} True if both left and right operands evaluate to true, false otherwise.
   */
  evaluate(context) {
    return this.left.evaluate(context) && this.right.evaluate(context);
  }
}

module.exports = {
  AndExpression,
  ComparisonExpression,
  LiteralExpression,
  OrExpression,
  VariableExpression,
};
