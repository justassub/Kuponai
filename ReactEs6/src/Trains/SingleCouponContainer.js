import React from 'react';
import axios from '../../node_modules/axios';
import {SingleCouponList} from './SingleCouponList'
import { SingleCouponComponent } from './SingleCouponComponent';

export class SingleCouponContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coupons: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/coupons/'+this.props.match.params.id)
            .then((response) => {
                if (response.data.lenght<2){
                    alert("Please Add more prekes")
                }else{
                this.setState({ coupons: response.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return             
        <SingleCouponList coupons={this.state.coupons}  />
    }
}