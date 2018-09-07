import selectExpensesTotal from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if empty expneses", () => {
    expect(selectExpensesTotal([])).toBe(0);
});

test("should correctly add up a single expnese", () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(195);
})

test("should correctly add up multiple expenses", () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195); 
});