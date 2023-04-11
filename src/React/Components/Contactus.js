import React from "react";
import { Link } from "react-router-dom";
import './Contactus.css';
const Contactus = () => {
    return (
        <><nav class="navbar navbar-inverse" >
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">FC</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
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
                    {/* <li><a href="#">Page 3</a></li> */}
                </ul>
            </div>

        </nav>
        <div>
                <div class="contact3 py-5">
                    <div class="row no-gutters">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card-shadow">
                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-lg-6 border">
                                    <div class="contact-box ml-3">
                                        <h1 class="font-weight-light mt-2">Quick Contact</h1>
                                        <form class="mt-4">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group mt-2">
                                                        <input class="form-control" type="text" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group mt-2">
                                                        <input class="form-control" type="email" placeholder="E-mail address" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group mt-2">
                                                        <input class="form-control" type="text" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group mt-2">
                                                        <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="card mt-4 border-0 mb-4">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <div class="card-body d-flex align-items-center c-detail pl-0">
                                                    <div class="mr-3 align-self-center">
                                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                                                    </div>
                                                    <div class="">
                                                        <h6 class="font-weight-medium">Address</h6>
                                                        <p class="">601 Sherwood Ave.
                                                            <br /> Hexaware, Sipcot</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <div class="card-body d-flex align-items-center c-detail">
                                                    <div class="mr-3 align-self-center">
                                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                                                    </div>
                                                    <div class="">
                                                        <h6 class="font-weight-medium">Phone</h6>
                                                        <p class="">251 546 9442
                                                            <br /> 630 446 8851</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <div class="card-body d-flex align-items-center c-detail">
                                                    <div class="mr-3 align-self-center">
                                                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                                                    </div>
                                                    <div class="">
                                                        <h6 class="font-weight-medium">Email</h6>
                                                        <p class="">
                                                            info@wrappixel.com
                                                            <br /> financialcharms@gmail.com
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
export default Contactus;