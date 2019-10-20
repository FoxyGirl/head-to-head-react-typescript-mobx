import * as React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import HeadToHeadDetails from './components/HeadToHeadDetails';
import All from './components/All';
import Admin from './components/admin/Admin';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* NavBar - do I need to include the ending tag? :) */}
        <NavBar />

        <div className="container-fluid">
          <div className="row">
            <div className="container main-content">
              <div className="row">
                {/* Main content - start */}
                <div className={`col-sm-12`}>
                  <Home />
                  <Login />
                  <HeadToHeadDetails />
                  <All />
                  <Admin />
                </div>
                {/* Main content - end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
