import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';




export class SingleCouponComponent extends React.Component  {    
    

    
   
render(){
    
    return (
        
       <div className="col-xs-12 col-sm-4 text-center">           
         
                    <div className="thumbnail">  
                                  
                    <h2>id:{this.props.id}</h2>
                    <h3>buyer:{this.props.buyer}</h3>  
                    <h2>seller:{this.props.seller}</h2>                                       
                    <p>date:{this.props.date}  </p>     
                    <NavLink to ={"/prekes/"+this.props.id}>                 
                    <button className="btn btn-default"> See All amazing products this coupon has </button>
                    </NavLink>   
                    <NavLink to ={"/prekes/sum/"+this.props.id}>                 
                    <button className="btn btn-default">{this.props.worth} Coupon Worth </button>
                    </NavLink>                  
                </div>
                
            </div>
            
        );
    }

};