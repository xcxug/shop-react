import React, { Component } from 'react';
import { connect } from "react-redux";
import { safeAuth } from '../../../assets/js/utils/util.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/user/myorder/detail.module.css';

class OrderDetail extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="订单详情"></SubHeaderComponent>
                <div className={Css['main']}>
                    <div className={Css['ordernum']}>订单编号：123456</div>
                    <div className={Css['address-wrap']}>
                        <div className={Css['skew-wrap']}>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                        </div>
                        <div className={Css['address-info']}>
                            <div className={Css['name']}><img src={require("../../../assets/images/common/my2.png")} alt="" />张三</div>
                            <div className={Css['cellphone']}><img src={require("../../../assets/images/common/cellphone.png")} alt="" />13717628483</div>
                            <div className={Css['address']}>北京朝阳区北京朝阳区</div>
                        </div>
                        <div className={Css['skew-wrap']}>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                            <div className={Css['skew']}></div>
                        </div>
                    </div>
                    <div className={Css['buy-title']}>购买的宝贝</div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                        <div className={Css['goods-info']}>
                            <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                            <div className={Css['attr']}>
                                <span className={Css['amount']}>x 1</span>
                                <span>颜色：黑色</span><span>尺码：37</span>
                            </div>
                        </div>
                        <div className={Css['price']}>¥255</div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                        <div className={Css['goods-info']}>
                            <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                            <div className={Css['attr']}>
                                <span className={Css['amount']}>x 1</span>
                                <span>颜色：黑色</span><span>尺码：37</span>
                            </div>
                        </div>
                        <div className={Css['price']}>¥255</div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                        <div className={Css['goods-info']}>
                            <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                            <div className={Css['attr']}>
                                <span className={Css['amount']}>x 1</span>
                                <span>颜色：黑色</span><span>尺码：37</span>
                            </div>
                        </div>
                        <div className={Css['price']}>¥255</div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                        <div className={Css['goods-info']}>
                            <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                            <div className={Css['attr']}>
                                <span className={Css['amount']}>x 1</span>
                                <span>颜色：黑色</span><span>尺码：37</span>
                            </div>
                        </div>
                        <div className={Css['price']}>¥255</div>
                    </div>
                    <ul className={Css['order-status']}>
                        <li>支付状态</li>
                        <li>待付款</li>
                    </ul>
                    <div className={Css['total-wrap']}>
                        <ul className={Css['total']}>
                            <li>商品总额</li>
                            <li>¥27361</li>
                        </ul>
                        <ul className={Css['total']}>
                            <li>+运费</li>
                            <li>¥20</li>
                        </ul>
                    </div>
                    <div className={Css['true-total']}>
                        <div className={Css['total']}>实付金额：<span>¥276253</span></div>
                        <div className={Css['order-time']}>下单时间：2019-04-03 08:51:58</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(OrderDetail);