import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Css from '../../../assets/css/home/balance/index.module.css';
import SubHeaderComponent from '../../../components/header/subheader';
import { safeAuth } from '../../../assets/js/utils/util.js';

class BalanceIndex extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="确认订单"></SubHeaderComponent>
                <div className={Css['main']}>
                    <div className={Css['address-wrap']}>
                        <div className={Css['persion-info']}>
                            <span>收货人：王五</span><span>13717628483</span>
                        </div>
                        <div className={Css['address']}>
                            <img src={require("../../../assets/images/home/cart/map.png")} alt="收货地址" /><span>天津和平区和平西里</span>
                        </div>
                        <div className={Css['arrow']}></div>
                        <div className={Css['address-border-wrap']}>
                            <div className={Css['trapezoid'] + " " + Css['style1']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style2']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style1']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style2']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style1']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style2']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style1']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style2']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style1']}></div>
                            <div className={Css['trapezoid'] + " " + Css['style2']}></div>
                        </div>
                    </div>
                    <div className={Css['goods-wrap']}>
                        {
                            this.props.state.cart.aCartData.length > 0 ?
                                this.props.state.cart.aCartData.map((item, index) => {
                                    return (
                                        item.checked ?
                                            <div className={Css['goods-list']} key={index}>
                                                <div className={Css['image']}><img src={item.img} alt={item.title} /></div>
                                                <div className={Css['goods-param']}>
                                                    <div className={Css['title']}>{item.title}</div>
                                                    <div className={Css['attr']}>
                                                        {
                                                            item.attrs.length > 0 ?
                                                                item.attrs.map((item2, index2) => {
                                                                    return (
                                                                        <span key={index2}>{item2.title}：
                                                                            {
                                                                                item2.param.length > 0 ?
                                                                                    item2.param.map((item3, index3) => {
                                                                                        return (
                                                                                            <Fragment key={index3}>{item3.title}</Fragment>
                                                                                        )
                                                                                    })
                                                                                    : ''
                                                                            }
                                                                        </span>
                                                                    )
                                                                })
                                                                : ''
                                                        }
                                                    </div>
                                                    <div className={Css['amount']}>x {item.amount}</div>
                                                    <div className={Css['price']}>￥{item.price}</div>
                                                </div>
                                            </div>
                                            : ""
                                    )
                                })
                                : ""
                        }
                    </div>
                    <ul className={Css['total-wrap']}>
                        <li>商品总额</li>
                        <li>￥{this.props.state.cart.total}</li>
                    </ul>
                    <ul className={Css['total-wrap']}>
                        <li>运费</li>
                        <li>￥{this.props.state.cart.freight}</li>
                    </ul>
                </div>
                <div className={Css['balance-wrap']}>
                    <div className={Css['price-wrap']}>
                        <span>实际金额：</span><span>￥{parseFloat(Math.round(this.props.state.cart.total + this.props.state.cart.freight).toFixed(2))}</span>
                    </div>
                    <div className={Css['balance-btn']}>提交订单</div>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(BalanceIndex);