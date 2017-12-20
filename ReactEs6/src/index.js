import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from './Navigation/NavigationComponent';
import { CouponListContainer } from './Trains/CouponListContainer';
import { SingleCouponContainer } from './Trains/SingleCouponContainer';
import { CouponAddContainer } from './AddTrain/CouponAddContainer';
import { EditCoupon } from './AddTrain/EditCoupon';
import {AddPreke} from './prekes/AddPreke';
import {AllPrekesContainer} from './prekes/PrekiuSarasas/AllPrekesContainer';
import { SingleCoupon } from './prekes/PrekiuSarasas/SingleCoupon';



ReactDOM.render((

      <BrowserRouter>
          <div className="container">
              <NavigationComponent />
              <Switch>
              <Route exact path="/" component={CouponListContainer} />
              <Route exact path="/coupons" component={CouponListContainer} />
              <Route exact path="/coupons/:id" component={SingleCouponContainer} />
              <Route exact path="/addcoupon" component={CouponAddContainer} />
              <Route exact path="/coupons/edit/:id" component={EditCoupon} />
              <Route exact path="/prekes/add/:id" component={AddPreke} />
              <Route exact path="/prekes" component={AllPrekesContainer} />
              <Route exact path="/prekes/:id" component={SingleCoupon} />
              </Switch>
          </div>
      </BrowserRouter> ),
document.getElementById('root'));