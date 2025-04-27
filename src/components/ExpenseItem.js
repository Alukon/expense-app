import React from 'react';

const ExpenseItem = ({ expense, onDeleteExpense }) => {
    return (
        <li>
            {expense.description}: {expense.amount} руб.
            <button onClick={() => onDeleteExpense(expense.id)}>Удалить</button>
        </li>
    );
};

export default ExpenseItem;