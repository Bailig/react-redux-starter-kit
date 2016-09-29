import React from 'react';
import './_Footer.scss';

export default class Footer extends React.Component{
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Bailig Abhanar | Algonquin College</p>
                        </div>
                        <div className="col-sm-9">
                           <nav className="navbar navbar-inverse navbar-right" role="navigation">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a className="navbar-link" href="#" target="_blank">The Museum Story Map</a>
                                    </li>
                                    <li>
                                        <a className="navbar-link" href="#">Project Overview</a>
                                    </li>
                                    <li>
                                        <a className="navbar-link" href="#">Documentation for Sponsors</a>
                                    </li>
                                    <li>
                                        <a className="navbar-link" href="#">Documentation for Technician</a>
                                    </li>
                                </ul>
                            </nav>
                       </div>
                    </div>
                </div>
            </footer>
        );
    }
}