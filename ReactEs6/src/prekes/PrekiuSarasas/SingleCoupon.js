import React from 'react';
import axios from '../../../node_modules/axios';
import {AllPrekesList} from './AllPrekesList';


export class SingleCoupon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { prekes: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/prekes/'+this.props.match.params.id)
            .then((response) => {
                if (response.data.length<0){
                    alert("Please Add more Products")
                }else{
                this.setState({ prekes: response.data });
                }
            
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <AllPrekesList prekes={this.state.prekes}  />
    }
}