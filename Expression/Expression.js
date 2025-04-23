/**
 * Interface for an expression used in learning path conditions.
 */
class Expression {
    /**
     * Evaluates the expression based on the provided context (e.g., user performance data).
     *
     * @param {object} context The context object containing user data.
     * @returns {boolean} The evaluation result (true if the expression is met, false otherwise).
     */
    evaluate(context) {}
  }
  
  module.exports = Expression;