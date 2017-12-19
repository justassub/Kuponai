import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {styles} from '../styles';

const colorStyle={
    color:styles.color
};
   


export class CouponComponent extends React.Component  {    
    removeProduct=()=> {
        axios.delete('http://localhost:8081/justas-app/delete'+this.props.id)                
    }
    
   
render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">       
                    <div className="thumbnail">                                   
                    <h2>{this.props.id}</h2>
                    <h3>{this.props.date}</h3>  
                    <h2>{this.props.buyer}</h2>                                       
                    <p>{this.props.seller} </p>   
                    
                   
                       
                    <NavLink to={"/coupon/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getTrain}  >
                    Coupon INFO</button></NavLink>
                    <NavLink to={"/coupon/edit/"+this.props.id}>  
                    <button  className="btn btn-default" onClick={this.getTrain}  >
                   EDIT coupon</button></NavLink>  
                   <NavLink to ={"/prekes/add/"+this.props.id}>
                   <button> PRIDETI PREKE</button> </NavLink>             
                   <button style={colorStyle} className="btn btn-default" onClick={this.remo}  >
                   REMOVE Coupon</button>
                </div>
            </div>
        );
    }

};