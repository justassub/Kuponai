import React from 'react';
import {CouponListComponent} from './CouponListComponent'
import axios from '../../node_modules/axios';


export class CouponListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coupons: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/coupons')
            .then((response) => {
                if (response.data.length<2){
                    alert("Please Add more coupons")
                }else{
                this.setState({ coupons: response.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <CouponListComponent coupons={this.state.coupons}  />
    }
}