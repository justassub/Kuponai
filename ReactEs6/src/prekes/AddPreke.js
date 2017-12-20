import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {AddPrekeComponent} from './AddPrekeComponent';


export class AddPreke extends React.Component{
    constructor(props) {
        super(props);
        this.state = {           
            kiekis: 0,
            price: 0, 
            pavadinimas:'',
            matavimoVnt:'',          
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
            const outputPreke = {
            kiekis: this.state.kiekis,
            pavadinimas:this.state.pavadinimas,
            price: this.state.price,
            matavimoVnt: this.state.matavimoVnt,  
                      
    };
    
    axios.post("http://localhost:8082/etalonas-app/prekes/add/"+this.props.match.params.id, outputPreke)
        .then((response) => {
            this.setState( {               
                kiekis: '',
                pavadinimas:'',
                kaina: '',  
                matavimoVnt:''   
                
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

render() {
    return (
        <div>
            <AddPrekeComponent
                kiekis={this.state.kiekis}
                kaina={this.state.kaina}
                matavimoVnt={this.state.matavimoVnt}  
                pavadinimas={this.state.pavadinimas}                           
                onChange={this.handleChange}
                onClick={this.handleClick}
                history={this.state.history}
            />
        </div>
    );
}
}