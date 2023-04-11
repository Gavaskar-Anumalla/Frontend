import React from "react";
import { Link } from "react-router-dom";
import './Search.css';
const Symbol = () => {
    return (
        <><nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">FC</a>
                </div>
                <ul class="nav navbar-nav">
                    <li> <Link className="nav-item" to='/'>Home</Link></li>
                    <li >
                        <a class="dropdown-toggle" type="button" data-toggle="dropdown">Explore
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/isin">ISIN</a></li>
                            <li><a href="/sector">Sector</a></li>
                            <li><a href="/symbol">Symbol</a></li>
                        </ul>
                    </li>

                    <li>
                        <Link className="nav-item" to='/contactus'>Contact us </Link>
                    </li>

                </ul>
            </div>
        </nav>
            {/* <div className="background"> */}
                <div class="container">

                    <div class="row height d-flex justify-content-center align-items-center">

                        <div class="col-md-8">

                            <div class="search" align="center">
                                <br></br>
                                <input type="text" class="form-control " placeholder="&#128270; Search by Symbol" />
                                <button class="btn btn-primary anybutton">Search</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <div class="container">

                        <br></br>
                        <br></br>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ISIN</th>
                                    <th>Company Name</th>
                                    <th>Sector</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                             
                            </tbody>
                        </table>
                    </div>

                </div>
            {/* </div> */}
        </>
    )
}
export default Symbol;