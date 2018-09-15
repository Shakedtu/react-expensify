import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startRemoveExpense, startEditExpense } from "../actions/expenses";
import RemoveExpenseModal from "./RemoveExpenseModal";

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };

    onClickYes = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };

    onClickNo = () => {
        this.setState(() => ({ isOpen: false }));
    };

    onClickRemove = () => {
        this.setState(() => ({ isOpen: true }));
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClickRemove}>
                        Remove Expense
                    </button>
                </div>
                <RemoveExpenseModal
                    onClickYes={this.onClickYes}
                    onClickNo={this.onClickNo}
                    isOpen={this.state.isOpen}
                />
            </div>
        );
    }

}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);