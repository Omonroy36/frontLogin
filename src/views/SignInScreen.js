import React from 'react';
import { Context } from '../store/appContext';


const SignIn = (props) => {
  return (
    <Context.Consumer>
      { ({store, actions}) => { 
        return( 
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align teal lighten-1">Register Form</h1>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={(e) => actions.submitRegistration(e)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstname" type="text" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastname" type="text" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" onChange={e => actions.handleChangeRegistration(e)}/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
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

export default SignIn;

