import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { googleAuthProvider } from "../firebase/firebase";

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Manager</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={startLoginWithGoogle}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLogin(googleAuthProvider)),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);