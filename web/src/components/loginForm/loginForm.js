import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './loginForm.css'
import AuthService from "services/auth.service";
import {navigate} from "@reach/router";
import PageLayout from "layouts/page"


const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password)
          .then(
              () => {
                navigate("/").then(() => window.location.reload());
              },
              error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                  loading: false,
                  message: resMessage
                });
              }
          );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
        <PageLayout>
          <div className="wrapper">
            <div id="formContent">
              <div className="card card-login-form card-block">
                <div className="card-body card-body-form form-login form">
                  <div className="card-title mb-3"><h4>Login</h4>
                  </div>
                  <Form
                      onSubmit={this.handleLogin}
                      ref={c => {
                        this.form = c;
                      }}
                  >
                    <div className="form-group">
                      <Input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          validations={[required]}/>
                    </div>
                    <div className="form-group">
                      <Input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validations={[required]}
                      />
                    </div>

                    <div className="form-group">
                      <button
                          className="btn btn-info btn-block"
                          disabled={this.state.loading}
                      >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"/>
                        )}
                        <span>Login</span>
                      </button>
                    </div>

                    {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                    )}
                    <CheckButton
                        style={{display: "none"}}
                        ref={c => {
                          this.checkBtn = c;
                        }}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
    );
  }
}