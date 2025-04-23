/**
 * Represents a mediator that facilitates communication between users in a course context.
 *
 * @class
 */
class CourseMediator {
    /**
     * An array of registered users within the course (teachers and students).
     * @type {User[]}
     */
    users = [];
  
    /**
     * Creates a new CourseMediator instance.
     */
    constructor() {}
  
    /**
     * Registers a user with the mediator.
     *
     * @param {User} user - The user to be registered.
     */
    registerUser(user) {
      this.users.push(user);
    }
  
    /**
     * Sends a message from one user to another or broadcasts to all registered users.
     *
     * @param {string} message - The message content.
     * @param {User} from - The user sending the message.
     * @param {User} [to] - The username of the recipient user (optional for broadcast messages).
     */
    relayMessage(message, from, to) {
      if (to) {
        const recipient = this.users.find((user) => user._id === to._id);
        if (recipient) {
          recipient.receiveMessage(message, from);
        } else {
          console.error(`Recipient "${to}" not found`);
        }
      } else {
        for (const user of this.users) {
          if (user !== from) {
            user.receiveMessage(message, from);
          }
        }
      }
    }
  }
  
  module.exports = CourseMediator;