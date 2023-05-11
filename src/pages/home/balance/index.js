import React, { Component } from 'react';
import { connect } from "react-redux";
import Css from '../../../assets/css/home/balance/index.module.css';
import SubHeaderComponent from '../../../components/header/subheader';

class BalanceIndex extends Component {
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
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                        <div className={Css['goods-list']}>
                            <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1484288656.jpg" alt="" /></div>
                            <div className={Css['goods-param']}>
                                <div className={Css['title']}>老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                <div className={Css['attr']}><span>颜色：蓝色</span><span>尺码：36</span></div>
                                <div className={Css['amount']}>x 1</div>
                                <div className={Css['price']}>￥255</div>
                            </div>
                        </div>
                    </div>
                    <ul className={Css['total-wrap']}>
                        <li>商品总额</li>
                        <li>￥2550</li>
                    </ul>
                    <ul className={Css['total-wrap']}>
                        <li>运费</li>
                        <li>￥20</li>
                    </ul>
                </div>
                <div className={Css['balance-wrap']}>
                    <div className={Css['price-wrap']}>
                        <span>实际金额：</span><span>￥25555</span>
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