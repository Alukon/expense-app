import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
        <div>
            <h2>Список Расходов</h2>
            <ul>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;