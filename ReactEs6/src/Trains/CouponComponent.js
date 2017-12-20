import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {styles} from '../styles';

const colorStyle={
    color:styles.color
};
   


export class CouponComponent extends React.Component  {    
    removeCoupon=()=> {
        axios.delete('http://localhost:8082/etalonas-app/coupons/delete/'+this.props.id)                
    }
    
   
render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">       
                    <div className="thumbnail">                                   
                    <h2>{this.props.id}</h2>
                    <h3>{this.props.date}</h3>  
                    <h2>{this.props.buyer}</h2>                                       
                    <p>{this.props.seller} </p>   
                    
                   
                       
                    <NavLink to={"/coupons/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getTrain}  >
                    Coupon INFO</button></NavLink>
                    <NavLink to={"/coupons/edit/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getTrain}  >
                   EDIT coupon</button></NavLink>  
                   <NavLink to ={"/prekes/add/"+this.props.id}>
                   <button className="btn btn-default"> PRIDETI PREKE</button> </NavLink>             
                   <button style={colorStyle} className="btn btn-default" onClick={this.removeCoupon}  >
                   REMOVE Coupon</button>
                </div>
            </div>
        );
    }

};