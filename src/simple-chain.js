const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.values.length;
  },
  addLink(value = '') {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.values) {
      this.values = [];
    }
    this.values.push(String(value));
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position != 'number' || position > this.values.length || position-1 < 0) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.values.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.values.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const result = '( ' + this.values.join(' )~~( ') + ' )';
    this.values = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
