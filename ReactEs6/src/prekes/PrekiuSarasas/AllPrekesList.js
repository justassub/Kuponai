import React from 'react';
import { AllPrekesComponent } from './AllPrekesComponent';



export var AllPrekesList = (props) => {
    const prekes = props.prekes.map((preke,index) => {
        
         var prekesComponentas=   <AllPrekesComponent     
                key={index}   
                pavadinimas={preke.pavadinimas}  
                matatavimoVnt={preke.matatavimoVnt}   
                kiekis={preke.kiekis}   
                 id={preke.id}  
                 price={preke.price}    
                         
                
                
                history={props.history}

            />;
            return (prekesComponentas
            );
            
        
    });
    return (
        <div>
            {prekes}
        </div>
    );
};