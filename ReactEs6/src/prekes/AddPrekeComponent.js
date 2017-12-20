import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export var AddPrekeComponent =(props)=>{

    return(
        <form >
            <div>
                <p>Kiek prekiu?</p>
                <div>
                <input type="text" className="form-control" id="kiekis" placeholder="Kiekis" value={props.kiekis}
                           onChange={props.onChange}/>
                </div>
            </div>
            

            <div>
                <p>Matavimo vnt</p>
                <div>
                <input type="text" className="form-control" id="matavimoVnt" placeholder="MatavimoVnt" value={props.matavimoVnt}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Pavadinimas</p>
                <div>
                <input type="text" className="form-control" id="pavadinimas" placeholder="Pavadinimas" value={props.pavadinimas}
                         onChange={props.onChange}   />
                </div>
            </div>

            <div>
                <p>Vieneto kaina</p>
                <div>
                <input type="text" className="form-control" id="price" placeholder="Price" value={props.price}
                         onChange={props.onChange}   />
                </div>
            </div>



           

            <div >
                <div >
                  
                    <button type="submit"  onClick={props.onClick}>Save</button>
                    <button type="submit"  onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
</form>





    )
}
