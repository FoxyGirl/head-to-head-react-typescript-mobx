import * as React from 'react';

class Login extends React.Component<any, any> {
  render() {
    return (
      <div id="login-form" className="card info">
        <div className="card-header">
          <div className="card-title">Sign In</div>
        </div>

        <div className="card-body">
          <form id="loginform" className="form" role="form">
            <div className="col-sm-12">
              <div className="row form-group">
                <div id="login-alert" className="alert alert-danger">
                  Invalid username/password
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <label className="col-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-group">
                <label className="col-form-label" htmlFor="pw">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="pw"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="form-control">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
