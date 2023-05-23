/*
  HashRouter：有#号
  BrowserRouter：没有#号
  Switch：只要匹配到一个地址不往下匹配，相当于for循环里面的break
  Link：跳转页面，相当于vue里面的router-link
  exact：完全匹配路由
*/
import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from './routes/private';
import asyncComponents from './components/async/AsyncComponent';
import config from './assets/js/conf/config.js';
const HomeComponent = asyncComponents(() => import('./pages/home/home/index'));
const GoodsClassify = asyncComponents(() => import('./pages/home/goods/classify'));
const GoodsSearch = asyncComponents(() => import('./pages/home/goods/search'));
const GoodsDetails = asyncComponents(() => import('./pages/home/goods/details'));
const LoginIndex = asyncComponents(() => import('./pages/home/login/index'));
const RegIndex = asyncComponents(() => import('./pages/home/reg/index'));
const BalanceIndex = asyncComponents(() => import('./pages/home/balance/index'));
const AddressIndex = asyncComponents(() => import('./pages/home/address/index'));
const AddressAdd = asyncComponents(() => import('./pages/home/address/add'));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Switch>
              <Route path={config.path + "home"} component={HomeComponent} ></Route>
              <Route path={config.path + "goods/classify"} component={GoodsClassify} ></Route>
              <Route path={config.path + "goods/search"} component={GoodsSearch} ></Route>
              <Route path={config.path + "goods/details"} component={GoodsDetails} ></Route>
              <Route path={config.path + "login/index"} component={LoginIndex} ></Route>
              <Route path={config.path + "reg/index"} component={RegIndex} ></Route>
              <AuthRoute path={config.path + "balance/index"} component={BalanceIndex} ></AuthRoute>
              <AuthRoute path={config.path + "address/index"} component={AddressIndex} ></AuthRoute>
              <AuthRoute path={config.path + "address/add"} component={AddressAdd} ></AuthRoute>
              <Redirect to={config.path + "home/index"}></Redirect>
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
