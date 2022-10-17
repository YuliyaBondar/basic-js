const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(order) {
    if (order == undefined) {
      this.direct = true;
    } else {
      this.direct = order;
    }
    this.alphabet = this.createTable();
    this.column = this.getColumn();
    this.row = this.alphabet[0];
  }

  createTable() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let tableArray = [];

    for (let i = 0; i < alphabet.length; i++) {
      tableArray.push([]);
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j + i]) {
          tableArray[i].push(alphabet[j + i]);
        } else {
          tableArray[i].push(alphabet[j - (alphabet.length - i)]);
        }
      }
    }
    return tableArray;
  }

  getColumn() {
    return this.alphabet.map(currentValue => currentValue[0]);
  }

  encrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (string == undefined || key == undefined)
      throw new Error("Incorrect arguments!");

    key = key.toUpperCase();

    const key2 = key.padEnd(string.length, key);
    let strCrypt = '';
    let alphabetNo = 0;

    for (let index = 0; index < string.length; index++) {
      if (this.row.indexOf(string[index].toUpperCase()) != -1) {
        const i = this.row.indexOf(string[index].toUpperCase());
        const j = this.column.indexOf(key2[index - alphabetNo]);

        strCrypt += this.alphabet[i][j];
      } else {
        strCrypt += string[index];
        alphabetNo++;
      }
    }

    if (!this.direct) {
      strCrypt = strCrypt.split("").reverse().join("");
    }
    return strCrypt;
  }
  decrypt(strCrypt, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (strCrypt === undefined || key === undefined)
    throw new Error("Incorrect arguments!");

    key = key.toUpperCase();

    const key2 = key.padEnd(strCrypt.length, key);
    let strDecrypt = '';
    let alphabetNo = 0;

    for (let index = 0; index < strCrypt.length; index++) {
      const j = this.column.indexOf(key2[index - alphabetNo]);
      const i = this.alphabet[j].indexOf(strCrypt[index].toUpperCase());

      if (i != -1) {
        strDecrypt += this.row[i];
      } else {
        strDecrypt += strCrypt[index];
        alphabetNo++;
      }
    }
    if (!this.direct) {
      strDecrypt = strDecrypt.split('').reverse().join('');
    }
    return strDecrypt;
  }
}

module.exports = {
  VigenereCipheringMachine
};
