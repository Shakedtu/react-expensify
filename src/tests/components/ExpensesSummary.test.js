import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should correcly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={950}/>);
    expect(wrapper).toMatchSnapshot();

});

test("should correcly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={1100}/>);
    expect(wrapper).toMatchSnapshot();
});