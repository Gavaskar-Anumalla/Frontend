import React from "react";
import { Link } from "react-router-dom";
import MasterService from "../Services/MasterService";
import './Search.css';
import { useState } from "react";

const Isin = () => {
const [isinNumber, setIsinNumber] = useState("");
const [securityMaster, setSecurityMaster] = useState({
    data:'[]',
    loading:true
})
   const searchByIsin=(e)=>{
        e.preventDefault();
        MasterService.getByIsin(isinNumber).then((Response)=>{
            setSecurityMaster({
                data:Response.data,
                loading:false
            }
            )
        })      
    }
    
    return (
        <><nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">FC</a>
                </div>
                <ul class="nav navbar-nav">
                    <li> <Link className="nav-item" to='/'>Home</Link></li>
                    <li>
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

            <h1></h1>

        </nav>
            {/* <div className="background"> */}
            <div class="container">

                <div class="row height d-flex justify-content-center align-items-center">

                    <div class="col-md-8">

                        <div class="search" align="center">
                            <br></br>
                            <input type="text" class="form-control " placeholder="&#128270; Search by ISIN" onChange={(e)=>setIsinNumber(e.target.value)} />
                            <button class="btn btn-primary anybutton" onClick={searchByIsin}>Search</button>
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
                                <th>Exchange</th>
                                <th>Country</th>
                                <th>Currency</th>
                                <th>ISIN Number</th>
                                <th>Symbol</th>
                                <th>CompanyName</th>
                                <th>Series</th>
                                <th>Sector</th>
                                <th>Industry</th>
                                <th>GICS</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                             securityMaster.loading?'':
                             securityMaster.data.map((obj)=>(
                                 //console.log(obj);
                                <tr key={obj.isinNumber}>
                                    <td>{obj.exchange}</td>
                                    <td>{obj.country}</td>
                                    <td>{obj.currency}</td>
                                    <td>{obj.isinNumber}</td>
                                    <td>{obj.symbol}</td>
                                    <td>{obj.nameOfCompany}</td>
                                    <td>{obj.series}</td>
                                    <td>{obj.sector}</td>
                                    <td>{obj.industry}</td>
                                    <td>{obj.gics}</td> 
                                </tr>)
                                )
                           }
                        </tbody>

                    </table>
                </div>

            </div>
            {/* </div> */}

        </>
    )
}
export default Isin;