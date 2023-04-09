import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import asyncComponents from '../../../components/async/AsyncComponent';
import config from '../../../assets/js/conf/config.js';
import Css from '../../../assets/css/home/goods/details.module.css';
const DetailsItem = asyncComponents(() => import('./details_item'));
const DetailsContent = asyncComponents(() => import('./details_content'));
const DetailsReviews = asyncComponents(() => import('./details_reviews'));

class GoodsDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <div className={Css['details-header']}>
                    <div className={Css['back']} onClick={this.goBack.bind(this)}></div>
                    <div className={Css['tab-wrap']}>
                        <div className={Css['tab-name'] + " " + Css['active']}>商品</div>
                        <div className={Css['tab-name']}>详情</div>
                        <div className={Css['tab-name']}>评价</div>
                    </div>
                    <div className={Css['cart-icon']}>
                        <div className={Css['spot']}></div>
                    </div>
                </div>
                <div className={Css['sub-page']}>
                    <Switch>
                        <Route path={config.path + "goods/details/item"} component={DetailsItem}></Route>
                        <Route path={config.path + "goods/details/content"} component={DetailsContent}></Route>
                        <Route path={config.path + "goods/details/reviews"} component={DetailsReviews}></Route>
                        <Redirect to={config.path + "goods/details/item"}></Redirect>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default GoodsDetails;