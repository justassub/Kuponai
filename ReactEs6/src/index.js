import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NavigationComponent} from './Navigation/NavigationComponent';
import { CouponListContainer } from './Trains/CouponListContainer';



ReactDOM.render((

      <BrowserRouter>
          <div className="container">
              <NavigationComponent />
              <Switch>
              <Route exact path="/" component={CouponListContainer} />
              <Route exact path="/coupons" component={CouponListContainer} />
             
              </Switch>
          </div>
      </BrowserRouter> ),
document.getElementById('root'));