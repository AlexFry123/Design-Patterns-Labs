const PAYMENT_TYPES = {
    PAY_PAL: "PAY_PAL",
    MASTER_CARD: "MASTER_CARD",
    GOOGLE_PAY: "GOOGLE_PAY",
    APPLE_PAY: "APPLE_PAY",
};

/**
 * Inherits from the base PaymentProcessor class and represents an Apple Pay payment processor.
 */
class ApplePay extends PaymentProcessor {
  /**
   * Creates a new Apple Pay processor instance.
   *
   * @param {number} balance - The initial balance available in the Apple Pay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.APPLE_PAY;
    this.balance = balance;
  }
}

/**
 * Inherits from the base PaymentProcessor class and represents a GooglePay payment processor.
 */
class GooglePay extends PaymentProcessor {
  /**
   * Creates a new GooglePay processor instance.
   *
   * @param {number} balance - The initial balance available in the GooglePay account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.GOOGLE_PAY;
    this.balance = balance;
  }
}

/**
 * Inherits from the base PaymentProcessor class and represents a Mastercard payment processor.
 */
class MasterCard extends PaymentProcessor {
  /**
   * Creates a new MasterCard processor instance.
   *
   * @param {number} balance - The initial balance available in the Mastercard account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.MASTER_CARD;
    this.balance = balance;
  }
}

/**
 * Inherits from the base PaymentProcessor class and represents a PayPal payment processor.
 */
class PayPal extends PaymentProcessor {
  /**
   * Creates a new PayPal processor instance.
   *
   * @param {number} balance - The initial balance available in the PayPal account.
   */
  constructor(balance) {
    super();
    this.name = PAYMENT_TYPES.PAY_PAL;
    this.balance = balance;
  }
}

module.exports = { ApplePay, PayPal, GooglePay, MasterCard, PAYMENT_TYPES };
