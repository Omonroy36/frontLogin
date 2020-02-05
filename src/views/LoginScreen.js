import React from "react";
import { Context } from "../store/appContext";



export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <h1 className="center-align teal lighten-1">Login</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <form className="col s12" onSubmit={(e) => actions.submitLogin(e)}>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input id="email" type="text" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
                                                <label htmlFor="icon_prefix">Email</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">vpn_key</i>
                                                <input id="password" type="password" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
                                                <label htmlFor="icon_telephone">Password</label>
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Log In
                                        <i className="material-icons right">send</i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        );
                    }
                }
            </Context.Consumer>
        );
    }
}