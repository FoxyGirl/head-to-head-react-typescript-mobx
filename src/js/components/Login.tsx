import * as React from 'react';

class Login extends React.Component<any, any> {
    render() {
        return (
            <div id="login-form" className="panel panel-info" >
                <div className="panel-heading">
                    <div className="panel-title">Sign In</div>
                </div>     

                <div className="panel-body" >

                    <form id="loginform" className="form" role="form">

                        <div className="col-sm-12">
                            <div className="row form-group">
                                <div id="login-alert" className="alert alert-danger">Invalid username/password</div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" placeholder="Email"/>
                            </div>
                        </div>
                            
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label htmlFor="pw">Password</label>
                                <input type="password" className="form-control" name="pw" placeholder="Password"  />
                            </div>
                        </div>
                                
                        <div className="col-sm-12">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </div>

                    </form>     

                </div>
            </div> 
        );
    }
}

export default Login;