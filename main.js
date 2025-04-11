class BankAccount {

    constructor(balance) {
        this.balance = balance;

    }

    getBalance() {
        return this.balance;
    }

    withdraw(money) {
        if (money <= 0) {
            console.log("Money must be positive value");
            return;
        }
        if (this.balance < money) {
            console.log("You can't withdraw more than have");
            return;
        }
        this.balance -= money;
    }

    deposit(money) {
        if (money <= 0) {
            console.log("Deposit amount must be greater than zero");
            return;
        }
        this.balance += money;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());