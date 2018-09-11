import authReducer from "../../reducers/auth";

test("should set default state", () => {
    const state = authReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({});
});

test("should set uid at login", () => {
    const uid = "13r13fav"
    const state = authReducer({}, { type: "LOGIN", uid });
    expect(state.uid).toBe(uid);
});

test("should clear uid at logout", () => {
    const state = authReducer({ uid: "1241sfaknv" }, { type: "LOGOUT" });
    expect(state).toEqual({});
})