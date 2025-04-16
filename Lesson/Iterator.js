/**
 * This class provides a basic structure for an iterator.
 *
 * It's intended to be extended by specific iterator implementations
 * that define how to iterate over a particular collection of elements.
 *
 * While JavaScript doesn't have a built-in `Iterator` class, this
 * can be used as a base class to implement custom iterators.
 */
class Iterator {
    /**
     * Creates a new Iterator instance.
     *
     * Subclasses should typically not override this constructor.
     */
    constructor() {}
  
    /**
     * Abstract method that must be implemented by subclasses.
     *
     * This method returns the next element in the iteration or `undefined`
     * if there are no more elements.
     *
     * @returns {any} - The next element in the iteration or `undefined`.
     */
    next() {
      throw new Error("next() method must be implemented by subclasses");
    }
  
    // Optional methods (useful for some use cases)
  
    /**
     * Optional method that checks if there are more elements remaining in the iteration.
     *
     * Subclasses can implement this method to provide additional information about
     * the iteration state.
     *
     * @returns {boolean} - True if there are more elements, false otherwise.
     */
    hasNext() {}
  
    /**
     * Optional method that resets the iterator to the beginning of the iteration.
     *
     * Subclasses can implement this method to allow restarting the iteration.
     */
    reset() {}
  }