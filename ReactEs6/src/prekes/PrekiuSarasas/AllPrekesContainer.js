import React from 'react';
import axios from '../../../node_modules/axios';
import {AllPrekesList} from './AllPrekesList';


export class AllPrekesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { prekes: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8082/etalonas-app/prekes/')
            .then((response) => {
                if (response.data.lenght<2){
                    alert("Please Add more prekes")
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