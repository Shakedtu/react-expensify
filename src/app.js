import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import GetVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss"
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4000 }));
store.dispatch(addExpense({ description: "Gas bill" , createdAt: 1000}));
store.dispatch(addExpense({ description: "rent", amount: 109500 }));

const state = store.getState();
console.log(GetVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app")); 