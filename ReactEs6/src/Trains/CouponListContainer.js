import React from 'react';
import {CouponListComponent} from './CouponListComponent'
import axios from '../../node_modules/axios';


export class CouponListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coupons: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8081/justas-app/coupons')
            .then((response) => {
                this.setState({ coupons: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <CouponListComponent coupons={this.state.coupons}  />
    }
}