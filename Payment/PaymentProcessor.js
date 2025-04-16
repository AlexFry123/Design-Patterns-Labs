const Payment = require("./Payment");

/**
 * This class represents a payment processor with the ability to delegate payments
 * to another account if insufficient funds are available.
 */
class PaymentProcessor extends Payment {
  /**
   * Attempts to pay the specified order price using this processor.
   *
   * @param {number} orderPrice - The total price of the order.
   */
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
      // Simulate actual payment processing logic here (e.g., API calls)
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log("Unfortunately, not enough money");
    }
  }

  /**
   * Checks if the processor has sufficient balance to cover the specified amount.
   *
   * @param {number} amount - The amount to be checked against the processor's balance.
   * @returns {boolean} - True if the processor has enough balance, false otherwise.
   */
  canPay(amount) {
    return this.balance >= amount;
  }

  /**
   * Sets the next payment processor in the chain to delegate payments to if this
   * processor has insufficient funds.
   *
   * @param {Payment} account - The next processor to handle payments.
   */
  setNext(account) {
    this.incomer = account;
  }

  /**
   * This method can be implemented by subclasses to show the actual payment
   *
   */
  show() {
    console.log(JSON.stringify(this, null, 2));
  }
}

module.exports = PaymentProcessor;