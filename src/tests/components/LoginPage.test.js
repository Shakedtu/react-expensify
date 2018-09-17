import React from "react";
import { LoginPage } from "../../components/LoginPage";
import { shallow } from "enzyme";

test("should render login correctly", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLoginWithGoogle on button click", () => {
    const startLoginWithGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle} />);
    wrapper.find("button").simulate("click");
    expect(startLoginWithGoogle).toHaveBeenCalled();
});