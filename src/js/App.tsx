import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login/Login';
import All from './components/All';
import Admin from './components/admin/Admin';
import Loader from './components/Loader/Loader';
import ViewStore from './stores/ViewStore';

interface AppProps {
  viewStore: ViewStore;
}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    const { viewStore } = this.props;
    const { isLoading } = viewStore;

    return (
      <div className={`${isLoading ? 'is-loading' : ''}`}>
        {/* NavBar - do I need to include the ending tag? :) */}
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <NavBar />

            <div className="container-fluid">
              <div className="row">
                <div className="container main-content">
                  <div className="row">
                    {/* Main content - start */}
                    <div className={`col-sm-12`}>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/all" component={All} />
                        {/* <Route path="/login" component={Login} /> */}
                        <Route
                          path="/login"
                          render={routeProps => (
                            <Login
                              {...routeProps}
                              viewStore={viewStore}
                            />
                          )}
                        />

                        <Route path="/admin" component={Admin} />
                      </Switch>
                    </div>
                    {/* Main content - end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
