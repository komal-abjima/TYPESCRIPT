//Bank account Balance
class BankAccount {
    private _balance:number = 0;
    constructor( public name: String, public accNumber: number){
       
    }

    public set balance(newBalance: number){
        if(newBalance < 0){
            throw new Error('this balance is not valid');
        }
    
        this._balance = newBalance;
    }
    public get balance(): number{

        if(this._balance === undefined){
            throw new Error('balance is not defined.');
        }
        return this._balance;

    }
    
}
const user1: BankAccount = new BankAccount("komal", 124512);
user1.balance = 1000;
console.log(user1);
console.log(user1.balance);
