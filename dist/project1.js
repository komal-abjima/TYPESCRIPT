"use strict";
//Bank account Balance
class BankAccount {
    name;
    accNumber;
    _balance = 0;
    constructor(name, accNumber) {
        this.name = name;
        this.accNumber = accNumber;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error('this balance is not valid');
        }
        this._balance = newBalance;
    }
    get balance() {
        if (this._balance === undefined) {
            throw new Error('balance is not defined.');
        }
        return this._balance;
    }
}
const user1 = new BankAccount("komal", 124512);
user1.balance = 1000;
console.log(user1);
console.log(user1.balance);
