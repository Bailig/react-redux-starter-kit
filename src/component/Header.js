import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse" role="navigation" data-spy="affix" data-offset-top="620">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                               <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span> 
                            </button>
                            <a className="navbar-brand" href="#home">Algonquin College</a>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#">Background</a></li>
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Benefits</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}