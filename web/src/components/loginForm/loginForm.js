import React, {useRef, useState} from "react";
import Form from "react-validation/build/form";
import './loginForm.css'
import AuthService from "services/auth.service";
import {navigate} from "@reach/router";
import PageLayout from "layouts/page"
import {Button, TextField} from "@material-ui/core";
import {useFormState} from "react-use-form-state";


const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};

const LoginForm = () => {
  const [formState, {text, password}] = useFormState()
  const [isLoading, setLoading] = useState(false)
  const BtnRef = useRef(null)

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true)

    AuthService.login(formState.values.username, formState.values.password)
        .then(
            () => {
              navigate("/").then(() => window.location.reload());
            },
            error => {
              if (error.data) {
                Object.keys(formState.values).forEach((key) =>
                    formState.setFieldError(key, error.data[key])
                );
              } else {
                console.error(error);
              }
            }
        )
    setLoading(false)

}

return (
    <PageLayout>
      <div className="wrapper">
        <div id="formContent">
          <div className="card card-login-form card-block">
            <div className="card-body card-body-form form-login form">
              <h4>Login</h4>
              <Form
                  onSubmit={handleLogin}
              >
                <div className="form-group">
                  <TextField
                      placeholder="Username"
                      {...text("username")}
                      error={formState.errors.username}
                      required/>
                </div>
                <div className="form-group">
                  <TextField
                      type="password"
                      placeholder="Password"
                      error={formState.errors.password}
                      {...password("password")}
                      required
                  />
                </div>
                <Button
                    className="btn mt-4 btn-info btn-block"
                    disabled={isLoading}
                    onClick={handleLogin}
                >
                  {isLoading && (
                      <span className="spinner-border spinner-border-sm"/>
                  )}
                  <span>Login</span>
                </Button>
                {/*{message && (*/}
                {/*    <div className="form-group">*/}
                {/*      <div className="alert alert-danger" role="alert">*/}
                {/*        {this.state.message}*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                {/*<CheckButton*/}
                {/*    style={{display: "none"}}*/}
                {/*    ref={c => {*/}
                {/*      this.checkBtn = c;*/}
                {/*    }}*/}
                {/*/>*/}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
)
}

export default LoginForm