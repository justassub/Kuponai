import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios'; 


export class AllPrekesComponent extends React.Component  {    
    removePreke=()=> {
        axios.delete('http://localhost:8082/etalonas-app/prekes/delete/'+this.props.id)                
    }
    
   
render(){
    
    return (
       <div className="col-xs-12 col-sm-4 text-center">       
                    <div className="thumbnail">   
                    <h2>{this.props.id}Prekes id</h2>                           
                    <h2>{this.props.kiekis}</h2>
                    <h3>{this.props.matatavimoVnt}</h3>  
                    <h2>{this.props.price}kaina</h2>                                       
                    <button className="btn btn-default" onClick={this.removePreke}  >
                   REMOVE preke</button>
                    
                   
                       
                    
                </div>
            </div>
        );
    }

};