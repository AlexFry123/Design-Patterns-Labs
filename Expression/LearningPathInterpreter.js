// Interpreter class responsible for parsing and evaluating learning path conditions
const {VariableExpression, AndExpression,ComparisonExpression,LiteralExpression,OrExpression} = require("./ExpressionSubClasses");

/**
 * Interpreter class responsible for parsing and evaluating learning path conditions.
 */
class LearningPathInterpreter {
  /**
   * @typedef {Object.<string, function(Expression, Expression): Expression>} OperatorMap
   */
  /**
   * Map of operators to functions that create the corresponding expression objects.
   * @type {OperatorMap}
   */
  operators = {};

  /**
   * Creates a new LearningPathInterpreter instance.
   */
  constructor() {
    this.operators = {
      "&&": (left, right) => new AndExpression(left, right),
      "||": (left, right) => new OrExpression(left, right),
      "==": (variableName, value) =>
        new ComparisonExpression(variableName, "===", value),
      "!=": (variableName, value) =>
        new ComparisonExpression(variableName, "!==", value),
      ">=": (variableName, value) =>
        new ComparisonExpression(variableName, ">=", value),
      "<=": (variableName, value) =>
        new ComparisonExpression(variableName, "<=", value),
      ">": (variableName, value) =>
        new ComparisonExpression(variableName, ">", value),
      "<": (variableName, value) =>
        new ComparisonExpression(variableName, "<", value),
    };
  }

  /**
   * Parses a string representing a learning path condition into an Expression object.
   *
   * @param {string} condition The learning path condition string.
   * @returns {Expression} The parsed Expression object.
   */
  parse(condition) {
    const tokens = condition.split(" "); // Split on whitespace
    const stack = [];

    for (const token of tokens) {
      if (this.operators[token]) {
        const right = stack.pop();
        const left = stack.pop();
        const operator = this.operators[token];
        if (typeof right === "string" && typeof left === "string") {
          // Handle variable names for comparison expressions
          stack.push(operator(left, right));
        } else {
          // Handle other operator combinations (e.g., literal values)
          stack.push(operator(left, right));
        }
      } else {
        // Assume variables or literals
        stack.push(
          isNaN(token)
            ? new VariableExpression(token)
            : new LiteralExpression(token * 1), // Convert string number to actual number
        );
      }
    }

    return stack.pop();
  }

  /**
   * Evaluates a learning path condition based on the provided context (e.g., user performance data).
   *
   * @param {string} condition The learning path condition string.
   * @param {object} context The context object containing user data.
   * @returns {boolean} The evaluation result (true if the condition is met, false otherwise).
   */
  evaluate(condition, context) {
    return this.parse(condition).evaluate(context);
  }
}

module.exports = LearningPathInterpreter;