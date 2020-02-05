import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import injectContext from "../src/store/appContext";
import history from '../src/views/history';
import LoginScreen from "../src/views/LoginScreen";
import SignIn from "./views/SignInScreen";
import HomeScreen from "./views/HomeScreen";
import ProfileScreen from "./views/ProfileScreen";
import Auth from "./helpers/auth";

class Layout extends React.Component{
    render(){
        return(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/1" component={SignIn}/>
            <Route path="/2" component={LoginScreen}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route default render={() => <h1>Not found</h1>} />
        </Switch>
    </Router>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
    Auth.getAuth() ? (
    <Component {...props} />
    ) : (
    <Redirect
    to={{
    pathname: "/login"
    }}
    />
    )
    }
    />
    );

export default injectContext(Layout);