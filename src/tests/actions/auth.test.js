import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
    const uid = "wiugisdjvi"
    const action = login(uid);
    expect(action).toEqual({ type: "LOGIN", uid });
});

test("should generate login action object", () =>
    expect(logout()).toEqual({ type: "LOGOUT" }));