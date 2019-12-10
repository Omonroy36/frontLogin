import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import injectContext from "../src/store/appContext";
import history from '../src/views/history';
import LoginScreen from "../src/views/LoginScreen";
import SignIn from "./views/SignInScreen";
import HomeScreen from "./views/HomeScreen";

class Layout extends React.Component{
    render(){
        return(
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/register" component={SignIn}/>
            <Route path="/login" component={LoginScreen}/>
        </Switch>
    </Router>
        );
    }
}


export default injectContext(Layout);