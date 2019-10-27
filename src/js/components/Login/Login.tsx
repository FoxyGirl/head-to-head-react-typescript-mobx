import * as React from 'react';
import ViewStore from '../../stores/ViewStore';
import { login } from '../../utils/firebase';

interface LoginProps {
  viewStore: ViewStore;
}

class Login extends React.Component<LoginProps, any> {
  email = React.createRef<HTMLInputElement>();
  pw = React.createRef<HTMLInputElement>();

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { viewStore } = this.props;
    login(this.email.current!.value, this.pw.current!.value)
      .then(response => {
        console.log('Submit response', response);
        viewStore.firebaseCheckAuth();
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { errorMessage } = this.props.viewStore;
    return (
      <div id="login-form" className="card info">
        <div className="card-header">
          <div className="card-title">Sign In</div>
        </div>

        <div className="card-body">
          <form
            id="loginform"
            className="form"
            role="form"
            onSubmit={this.handleSubmit}
          >
            {errorMessage !== '' && (
              <div className="col-sm-12">
                <div className="row form-group">
                  <div
                    id="login-alert"
                    className="alert alert-danger"
                  >
                    Invalid username/password
                  </div>
                </div>
              </div>
            )}

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
                  ref={this.email}
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
                  ref={this.pw}
                />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="mt-4">
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
