import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, []);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const deleteExpense = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    };

    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className="app">
            <h1>Учет Расходов</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <h2>Итого: {totalAmount} руб.</h2>
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
    );
};

export default App;