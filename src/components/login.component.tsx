import React, { Component } from "react";
import { Api } from '../api/api';
import { Role } from '../models/roles.enum';
import { appInitialiser } from '../services/app-initialiser.service';

class LoginForm extends Component {
  api: Api;

  constructor(props: any){
    super(props);
    appInitialiser();
    this.api = new Api();
  }

  createAccount() {
    const displayName = (document.getElementById('displayName') as HTMLInputElement).value;
    const role = (document.querySelector('#role option:checked') as HTMLOptionElement).value as Role;
    const email = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.api.createUser({ email, password, displayName, role }).subscribe(
      (user) => { console.log(user) },
      (error) => { console.log(error) }
    );
  }

  login() {
    const email = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    this.api.authenticateUser({ email, password }).subscribe(
      (user) => { console.log(user) },
      (error) => { console.log(error) }
    );
  }

  getUserList() {
    this.api.getUserList().subscribe((users) => {
      console.log(users);
    },
    (error) => { console.log(error)})
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="displayName">Name</label>
          <input type="text" id="displayName"/>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password"/>
        </div>
        <div>
          <select id="role">
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={this.login.bind(this)}>Login</button>
          <button type="button" onClick={this.createAccount.bind(this)}>Create account</button>
          <button type="button" onClick={this.getUserList.bind(this)}>get user list</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;