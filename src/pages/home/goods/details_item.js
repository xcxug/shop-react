import React, { Component } from 'react';
import Swiper from '../../../assets/js/libs/swiper.min.js';
import "../../../assets/css/common/swiper.min.css";
import Css from '../../../assets/css/home/goods/details_item.module.css';

class DetailsItem extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.refs['mask'].addEventListener("touchmove", function (e) { e.preventDefault(); });
        this.getSwpier();
    }

    getSwpier() {
        new Swiper(this.refs['swpier-wrap'], {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false
        })
    }

    componentWillUnmount() {
        this.refs['mask'].removeEventListener("touchmove", function (e) { e.preventDefault(); });
    }

    render() {
        return (
            <div>
                <div ref="swpier-wrap" className={Css['swpier-wrap']}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" /></div>
                        <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1524556419.jpg" alt="" /></div>
                        <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={Css['goods-ele-main']}>
                    <div className={Css['goods-title']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                    <div className={Css['price']}>¥128</div>
                    <ul className={Css['sales-wrap']}>
                        <li>快递：20元</li>
                        <li>月销量10件</li>
                    </ul>
                </div>
                <div className={Css['reviews-main']}>
                    <div className={Css["reviews-title"]}>商品评价（22）</div>
                    <div className={Css['reviews-wrap']}>
                        <div className={Css['reviews-list']}>
                            <div className={Css['uinfo']}>
                                <div className={Css['head']}><img src="//vueshop.glbuys.com/userfiles/head/492811357.jpg" alt="" /></div>
                                <div className={Css['nickname']}>神秘人</div>
                            </div>
                            <div className={Css['reviews-content']}>评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容</div>
                            <div className={Css['reviews-date']}>2018-10-15 14:29:29</div>
                        </div>
                        <div className={Css['reviews-list']}>
                            <div className={Css['uinfo']}>
                                <div className={Css['head']}><img src="//vueshop.glbuys.com/userfiles/head/492811357.jpg" alt="" /></div>
                                <div className={Css['nickname']}>神秘人</div>
                            </div>
                            <div className={Css['reviews-content']}>评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容</div>
                            <div className={Css['reviews-date']}>2018-10-15 14:29:29</div>
                        </div>
                        <div className={Css['reviews-list']}>
                            <div className={Css['uinfo']}>
                                <div className={Css['head']}><img src="//vueshop.glbuys.com/userfiles/head/492811357.jpg" alt="" /></div>
                                <div className={Css['nickname']}>神秘人</div>
                            </div>
                            <div className={Css['reviews-content']}>评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容</div>
                            <div className={Css['reviews-date']}>2018-10-15 14:29:29</div>
                        </div>
                        <div className={Css['reviews-list']}>
                            <div className={Css['uinfo']}>
                                <div className={Css['head']}><img src="//vueshop.glbuys.com/userfiles/head/492811357.jpg" alt="" /></div>
                                <div className={Css['nickname']}>神秘人</div>
                            </div>
                            <div className={Css['reviews-content']}>评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容评价内容</div>
                            <div className={Css['reviews-date']}>2018-10-15 14:29:29</div>
                        </div>
                    </div>
                    <div className={Css['reviews-more']}>查看更多评价</div>
                </div>
                <div className={Css['bottom-btn-wrap']}>
                    <div className={Css['btn'] + " " + Css['fav']}>收藏</div>
                    <div className={Css['btn'] + " " + Css['cart']}>加入购物车</div>
                </div>
                <div ref="mask" className={Css['mask']}></div>
                <div ref="cart-panel" className={Css['cart-panel']}>
                    <div className={Css['goods-info']}>
                        <div className={Css['close-panel-wrap']}>
                            <div className={Css['spot']}></div>
                            <div className={Css["line"]}></div>
                            <div className={Css['close']}></div>
                        </div>
                        <div className={Css['goods-img']}>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                        </div>
                        <div className={Css['goods-wrap']}>
                            <div className={Css['goods-title']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['price']}>¥128</div>
                            <div className={Css['goods-code']}>商品编码:143208071</div>
                        </div>
                    </div>
                    <div className={Css['attr-wrap']}>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>颜色</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val'] + " " + Css['active']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                            </div>
                        </div>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>尺码</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val']}>35</span>
                                <span className={Css['val']}>36</span>
                                <span className={Css['val']}>37</span>
                            </div>
                        </div>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>颜色</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val'] + " " + Css['active']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                            </div>
                        </div>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>尺码</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val']}>35</span>
                                <span className={Css['val']}>36</span>
                                <span className={Css['val']}>37</span>
                            </div>
                        </div>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>颜色</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val'] + " " + Css['active']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                                <span className={Css['val']}>灰色</span>
                            </div>
                        </div>
                        <div className={Css['attr-list']}>
                            <div className={Css['attr-name']}>尺码</div>
                            <div className={Css['val-wrap']}>
                                <span className={Css['val']}>35</span>
                                <span className={Css['val']}>36</span>
                                <span className={Css['val']}>37</span>
                            </div>
                        </div>
                    </div>
                    <div className={Css['amount-wrap']}>
                        <div className={Css['amount-name']}>购买数量</div>
                        <div className={Css["amount-input-wrap"]}>
                            <div className={Css['btn'] + " " + Css['dec'] + " " + Css["active"]}>-</div>
                            <div className={Css['amount-input']}><input type="tel" defaultValue="1" /></div>
                            <div className={Css['btn'] + " " + Css['inc']}>+</div>
                        </div>
                    </div>
                    <div className={Css['sure-btn']}>确定</div>
                </div>
            </div>
        );
    }
}

export default DetailsItem;