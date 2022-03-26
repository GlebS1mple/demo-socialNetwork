import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import Sidebar from '../src/components/Sidebar/Sidebar.jsx';
import { Route, Routes } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from "react-router-dom";
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

const MessengerContainer = React.lazy(() => import('./components/Messenger/MessengerContainer'));
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'));




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div>
        <HeaderContainer />
        <div className="flex">
          <Sidebar />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/Messenger/*' element={<MessengerContainer />} />
              <Route path="/Main/:userId" element={<MainContainer />} />
              <Route path='/Users/*' element={<UsersContainer />} />
              <Route path='/Login' element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }
}
//contacts={props.store.getState().main.contacts} posts={props.store.getState().main.posts} events={props.store.getState().main.events} walls={props.store.getState().main.walls} whos={props.store.getState().main.who} dispatch={props.dispatch} newPostText={props.store.getState().main.newPostText}
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

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
let AppContainer = compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);

let MainApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
//store={store} dispatch={store.dispatch.bind(store)}

export default MainApp;
