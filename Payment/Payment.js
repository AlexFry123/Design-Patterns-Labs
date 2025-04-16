/**
 * This abstract class represents a base payment method. Subclasses should implement the
 * specific logic for each payment type.
 */
class Payment {
    /**
     * Creates a new Payment object.
     */
    constructor() {
      /** (Optional) Stores the name of the payment method (e.g., "Mastercard", "PayPal"). */
      this.name = undefined;
  
      /** (Optional) Stores the current balance available in the payment method (if applicable). */
      this.balance = undefined;
    }
  
    /**
     * This method must be implemented by subclasses to determine if the payment method has
     * sufficient funds to cover a specific amount.
     * @throws {Error} - An error is thrown if this method is not implemented by a subclass.
     * @returns {boolean} - True if the payment method has enough balance, false otherwise.
     */
    canPay() {
      throw new Error("canPay() method must be implemented by subclasses");
    }
  
    /**
     * (Optional) This method can be implemented by subclasses to perform the actual payment
     * processing logic (e.g., API calls).
     */
    pay() {}
  
    /**
     * (Optional) This method can be implemented by subclasses to support a chain of responsibility
     * pattern, allowing the delegation of payment attempts to another payment processor if this
     * one fails.
     *
     * @param {Payment} nextPayment - The next payment processor in the chain.
     */
    setNext(nextPayment) {}
  
    /**
     * (Optional) This method can be implemented by subclasses to show the actual payment
     */
    show() {}
  }
  
  module.exports = Payment;