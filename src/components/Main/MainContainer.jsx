import React from "react";
import Main from "./Main";
import { getUserProfile, getStatus, updateStatus } from './../../redux/main-reducer';
import { connect } from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuth";
import { compose } from "redux";





class MainContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/Login")
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return (

            <Main contacts={this.props.contacts} posts={this.props.posts} events={this.props.events} walls={this.props.walls} whos={this.props.whos} {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.main.profile,
        status: state.main.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        contacts: state.main.contacts,
        posts: state.main.posts,
        events: state.main.events,
        walls: state.main.walls,
        whos: state.main.who,
    }
}
function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}
export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    WithAuthRedirect
)(MainContainer);

/*let AuthRedirectComponent = WithAuthRedirect(MainContainer);

let WithRouterUrlComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithRouterUrlComponent);*/
