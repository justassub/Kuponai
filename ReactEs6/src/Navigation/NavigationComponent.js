import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from '../../node_modules/axios';

export var NavigationComponent=()=>{

    
    return(
        
        <nav className="navbar navbar-default">
        <div className="container">
        <ul>
        <li><NavLink to="/coupons">Home</NavLink></li>
        <li><NavLink to="/addcoupon">Add Coupon</NavLink></li>
        <li><NavLink to="/prekes">All PRekes</NavLink></li>
       
        </ul>
         
           
        
          
            </div>
        
            </nav>
    )
}