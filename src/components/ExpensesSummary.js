import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpensesTotal from "../selectors/expense-total";
import selectTotalFiltered from "../selectors/expense-total-filtered";
import selectExpenses from "../selectors/expenses";

const formattedExpense = (expensesTotal) => (
    numeral(expensesTotal / 100).format("$0,0.00"))

const expenseWording = (count) => count === 1 ? "expense" : "expenses";

export const ExpensesSummary = ({ expenseCount, expenseFilteredCount, expensesTotal, expenseFilteredTotal}) => {
    const expenseWord = expenseWording(expenseCount)
    const filteredWord = expenseWording(expenseFilteredCount)
    const formattedExpensesTotal = formattedExpense(expensesTotal);
    const formattedFilteredExpensesTotal = formattedExpense(expenseFilteredTotal);
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <h3 className="page-header__title">Filtered <span>{expenseFilteredCount}</span> {filteredWord} totalling <span>{formattedFilteredExpensesTotal}</span></h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapToStateProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const unvisibleExpenses = selectTotalFiltered(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseFilteredCount: unvisibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expenseFilteredTotal: selectExpensesTotal(unvisibleExpenses)
    }
};

export default connect(mapToStateProps)(ExpensesSummary);