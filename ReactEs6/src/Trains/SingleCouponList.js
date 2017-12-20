import React from 'react';
import { SingleCouponComponent } from './SingleCouponComponent';
import axios from '../../node_modules/axios';


export var SingleCouponList = (props) => {

   
    const coupons = props.coupons.map((coupon,index) => {
        
        
         var couponComponent=   <SingleCouponComponent    
                key={index}   
                id={coupon.id} 
                buyer={coupon.buyer}  
                seller={coupon.seller}   
                date={coupon.date}                              
                history={props.history}

            />;
            return (couponComponent
            );
            
        
    });
    return (
        <div>            
            {coupons}
        </div>
    );
};