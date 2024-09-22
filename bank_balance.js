// Task 1: 
let balance = 3000; 


function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log("Deposit successful. New balance: $" + balance);
    } else {
        console.log("Invalid deposit amount.");
    }
}

// Task 2: 
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log("Withdrawal successful. New balance: $" + balance);
    } else if (amount > balance) {
        console.log("Insufficient funds. Your current balance is: $" + balance);
    } else {
        console.log("Invalid withdrawal amount.");
    }
}

// Task 3:
function checkBalance() {
    console.log("Your current balance is: $" + balance);
}

// testing 
 deposit(500);
    withdraw(200);
    checkBalance();
    console.log(balance);

