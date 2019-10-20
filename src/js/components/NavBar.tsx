import * as React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="" className="navbar-brand">Head To Head</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="#">Admin</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                    
            </div>
        </nav>
    )
}

export default NavBar;