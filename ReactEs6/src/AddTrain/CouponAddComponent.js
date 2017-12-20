import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export var CouponAddComponent =(props)=>{

    return(
        <form >
            <div>
                <p>Coupon Date?</p>
                <div>
                <input type="text" className="form-control" id="date" placeholder="Date" value={props.date}
                           onChange={props.onChange}/>
                </div>
            </div>
            

            <div>
                <p>Buyer</p>
                <div>
                <input type="text" className="form-control" id="buyer" placeholder="Buyer" value={props.buyer}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Seller</p>
                <div>
                <input type="text" className="form-control" id="seller" placeholder="Seller" value={props.seller}
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
