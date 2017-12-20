import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {CouponAddComponent} from './CouponAddComponent';

export class CouponAddContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            buyer: '',
            seller: '',           
            history: props.history
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        
        this.setState({
                [name]: value
                
            }
        );
};
  

        handleClick = (event) => {
            const outputCoupon = {
            date: this.state.date,           
            buyer: this.state.buyer,
            seller: this.state.seller,            
    };
    
    axios.post("http://localhost:8082/etalonas-app/coupons/create", outputCoupon)
        .then((response) => {
            this.setState( {
                
                date: '',               
                buyer: '',
                seller: '',     
                
            });
        })
        .catch((error) => {
            console.log(error);
        });
};


    
render() {
    return (
        <div>
            <CouponAddComponent
                date={this.state.date}                
                buyer={this.state.buyer}
                seller={this.state.seller}                             
                onChange={this.handleChange}
                onClick={this.handleClick}
                history={this.state.history}
            />
        </div>
    );
}
}