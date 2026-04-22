const balanceValue = document.getElementById('balance-value');
const incomeValue = document.getElementById('income-value');
const expenseValue = document.getElementById('expense-value');

const inputDescription = document.getElementById('description-input');
const inputAmount = document.getElementById('amount-input');

const addBtn = document.getElementById('add-button');

let Balance = 5000.00;
let income = 0;
let expense = 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const formatAmount = (num) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

balanceValue.innerText = `$${formatAmount(Balance)}`;
incomeValue.innerText = `$${formatAmount(income)}`;
expenseValue.innerText = `$${formatAmount(expense)}`;

const saveToLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

addBtn.addEventListener('click', () => {
    if (inputDescription.value != "" && inputAmount.value != "") {
        if (/^[a-zA-Z\s]+$/.test(inputDescription.value) && !isNaN(inputAmount.value)) {
            addTransaction();
            inputDescription.value = "";
            inputAmount.value = "";
        } else if (!/^[a-zA-Z\s]+$/.test(inputDescription.value) && !isNaN(inputAmount.value)) {
            alert('Wrong input type for description')
            inputDescription.value = "";
        } else if (/^[a-zA-Z\s]+$/.test(inputDescription.value) && isNaN(inputAmount.value)) {
            alert('Wrong input type for amount')
            inputAmount.value = "";
        } else {
            inputDescription.value = "";
            inputAmount.value = "";
            alert('Wrong input type')
        }
    } else {
        alert('Input fields empty')
    }
})

const addTransaction = (transaction = null) => {
    const amount = transaction ? transaction.amount : parseFloat(inputAmount.value);
    const description = transaction ? transaction.description : inputDescription.value;

    if (!transaction) {
        transactions.push({ description, amount });
        saveToLocalStorage();
    }

    const newCard = document.createElement('div')
    newCard.classList.add("transaction-card")

    const descriptionEl = document.createElement('p');
    descriptionEl.innerText = description;

    const rightSide = document.createElement('div')

    const value = document.createElement('p');
    value.innerText = `$${formatAmount(amount)}`;

    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add("fa-solid", "fa-xmark")

    rightSide.append(value, deleteBtn)
    newCard.append(descriptionEl, rightSide)

    document.getElementById('transaction-lists').append(newCard);

    Balance = Balance + amount;
    balanceValue.innerText = `$${formatAmount(Balance)}`;

    deleteBtn.addEventListener('click', () => {
        newCard.remove();
        transactions = transactions.filter(t => t.description !== description || t.amount !== amount);
        saveToLocalStorage();

        Balance = Balance - amount;
        balanceValue.innerText = `$${formatAmount(Balance)}`;

        if (amount > 0) {
            income = income - amount;
            incomeValue.innerText = `$${formatAmount(income)}`;
        } else {
            expense = expense + Math.abs(amount);
            expenseValue.innerText = `$${formatAmount(expense)}`;
        }
    })

    if (amount > 0) {
        income = income + amount;
        incomeValue.innerText = `$${formatAmount(income)}`;
        newCard.classList.add("income")
    } else {
        expense = expense - Math.abs(amount);
        expenseValue.innerText = `$${formatAmount(expense)}`;
        newCard.classList.add("expenses")
    }
}

// Load transactions from localStorage on page load
transactions.forEach(transaction => addTransaction(transaction));