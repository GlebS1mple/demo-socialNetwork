import React from "react";
import Header from "./Header";
import { logout } from './../../redux/auth-reducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )

    }

}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);