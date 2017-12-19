import React from 'react';
import {CouponComponent} from './CouponComponent';


export var CouponListComponent = (props) => {
    const coupons = props.coupons.map((coupon,index) => {
        
         var couponComponentas=   <CouponComponent     
                key={index}   
                date={coupon.date}  
                buyer={coupon.buyer}   
                seller={coupon.seller}   
                 id={coupon.id}                
                
                
                history={props.history}

            />;
            return (couponComponentas
            );
            
        
    });
    return (
        <div>
            {coupons}
        </div>
    );
};