import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import config from '../../../assets/js/conf/config.js';
import { localParam, setScrollTop } from '../../../assets/js/utils/util.js';
import Swiper from '../../../assets/js/libs/swiper.min.js';
import TweenMax from '../../../assets/js/libs/TweenMax.js';
import { Toast } from 'antd-mobile';
import "../../../assets/css/common/swiper.min.css";
import Css from '../../../assets/css/home/goods/details_item.module.css';

class DetailsItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bMask: false,
            sCartPanel: Css['down'],
            gid: props.location.search !== '' ? localParam(props.location.search).search.gid : '',
            aAttr: [
                {
                    "attrid": "1006",
                    "title": "颜色",
                    "values": [
                        {
                            "vid": "854",
                            "value": "红色",
                            "checked": false
                        }, {
                            "vid": "855",
                            "value": "白色",
                            "checked": false
                        },
                        {
                            "vid": "856",
                            "value": "黑色",
                            "checked": false
                        }
                    ]
                },
                {
                    "attrid": "1007",
                    "title": "尺寸",
                    "values": [
                        {
                            "vid": "857",
                            "value": "36",
                            "checked": false
                        }, {
                            "vid": "858",
                            "value": "72",
                            "checked": false
                        },
                        {
                            "vid": "859",
                            "value": "82",
                            "checked": false
                        }
                    ]
                }
            ],
            iAmount: 1
        }
        this.bMove = false;
    }

    componentDidMount() {
        setScrollTop()
        this.getSwpier();
    }

    getSwpier() {
        new Swiper(this.refs['swpier-wrap'], {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false
        })
    }

    // 显示购物控制面板
    showCartPanel() {
        this.refs['mask'].addEventListener("touchmove", function (e) { e.preventDefault(); });
        this.setState({ sCartPanel: Css['up'], bMask: true });
    }

    // 隐藏购物控制面板
    hideCartPanel() {
        if (!this.bMove) {
            this.setState({ sCartPanel: Css['down'], bMask: false });
        }
    }

    // 加入收藏
    addFav() {
        Toast.show({
            content: '收藏成功！',
            afterClose: () => {
                console.log('after');
            },
        })
    }

    replacePage(url) {
        this.props.history.replace(config.path + url);
    }

    // 选择属性值
    selectAttrVal(attrIndex, valIndex) {
        let aAttr = this.state.aAttr;
        if (aAttr.length > 0) {
            for (let key in aAttr[attrIndex].values) {
                aAttr[attrIndex].values[key].checked = false;
            }
        }
        aAttr[attrIndex].values[valIndex].checked = true;
        this.setState({ aAttr: aAttr });
    }

    // 增加数量
    incAmount() {
        let iAmount = this.state.iAmount;
        this.setState({ iAmount: ++iAmount });
    }

    // 减少数量
    decAmount() {
        let iAmount = this.state.iAmount;
        if (iAmount > 1) {
            this.setState({ iAmount: --iAmount });
        }
    }

    // 加入购物车
    addCart() {
        this.checkAttrVal(() => {
            if (!this.bMove) {
                this.bMove = true;
                let oGoodsImg = this.refs['goods-img'], oGoodsInfo = this.refs['goods-info'], oCartPanel = this.refs['cart-panel'];
                let oCartIcon = ReactDOM.findDOMNode(document.getElementById("cart-icon"));
                let oCloneImg = oGoodsImg.cloneNode(true);
                oGoodsInfo.appendChild(oCloneImg);
                oCloneImg.style.cssText = "width:0.4rem;height:0.4rem;position:absolute;z-index:1;left:0.2rem;top:0.2rem;";
                let srcImgX = oGoodsImg.offsetLeft;
                let cloneY = parseInt(window.innerHeight - oCartPanel.offsetHeight + oGoodsImg.offsetTop - oCartIcon.offsetTop);
                TweenMax.to(oCloneImg, 2, {
                    bezier: [{ x: srcImgX, y: -100 }, { x: srcImgX + 30, y: -130 }, { x: oCartIcon.offsetLeft, y: -cloneY }], onComplete: () => {
                        oCloneImg.remove();
                        this.bMove = false;
                    }
                });
                TweenMax.to(oCloneImg, 0.2, { rotation: 360, repeat: -1 });
            }
        });
    }

    // 检测是否选择属性值
    checkAttrVal(callback) {
        let aAttr = this.state.aAttr, bSelect = false, attrName = '';
        if (aAttr.length > 0) {
            for (let key in aAttr) {
                bSelect = false;
                for (let key2 in aAttr[key].values) {
                    if (aAttr[key].values[key2].checked) {
                        bSelect = true;
                        break;
                    }
                }
                if (!bSelect) {
                    attrName = aAttr[key].title;
                    break;
                }
            }
            if (!bSelect) {
                Toast.show({
                    content: `请选择${attrName}`,
                    afterClose: () => {
                        console.log('after');
                    },
                })
            }
            if (bSelect) {
                callback()
            }
        }
    }

    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
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
                    <div className={Css['reviews-more']} onClick={this.replacePage.bind(this, 'goods/details/reviews?gid=' + this.state.gid)}>查看更多评价</div>
                </div>
                <div className={Css['bottom-btn-wrap']}>
                    <div className={Css['btn'] + " " + Css['fav']} onClick={this.addFav.bind(this)}>收藏</div>
                    <div className={Css['btn'] + " " + Css['cart']} onClick={this.showCartPanel.bind(this)}>加入购物车</div>
                </div>
                <div ref="mask" className={this.state.bMask ? Css['mask'] : Css['mask'] + " hide"}></div>
                <div ref="cart-panel" className={Css['cart-panel'] + " " + this.state.sCartPanel}>
                    <div ref="goods-info" className={Css['goods-info']}>
                        <div className={Css['close-panel-wrap']}>
                            <div className={Css['spot']}></div>
                            <div className={Css["line"]}></div>
                            <div className={Css['close']} onClick={this.hideCartPanel.bind(this)}></div>
                        </div>
                        <div ref="goods-img" className={Css['goods-img']}>
                            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                        </div>
                        <div className={Css['goods-wrap']}>
                            <div className={Css['goods-title']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['price']}>¥128</div>
                            <div className={Css['goods-code']}>商品编码:143208071</div>
                        </div>
                    </div>
                    <div className={Css['attr-wrap']}>
                        {
                            this.state.aAttr.length > 0 ?
                                this.state.aAttr.map((item, index) => {
                                    return (
                                        <div className={Css['attr-list']} key={index}>
                                            <div className={Css['attr-name']}>{item.title}</div>
                                            <div className={Css['val-wrap']}>
                                                {
                                                    item.values.length > 0 ?
                                                        item.values.map((item2, index2) => {
                                                            return (
                                                                <span key={index2} className={item2.checked ? Css['val'] + " " + Css['active'] : Css['val']} onClick={this.selectAttrVal.bind(this, index, index2)}>{item2.value}</span>
                                                            )
                                                        })
                                                        : ''
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                : ''
                        }
                    </div>
                    <div className={Css['amount-wrap']}>
                        <div className={Css['amount-name']}>购买数量</div>
                        <div className={Css["amount-input-wrap"]}>
                            <div className={this.state.iAmount <= 1 ? Css['btn'] + " " + Css['dec'] + " " + Css["active"] : Css['btn'] + " " + Css['dec']} onClick={this.decAmount.bind(this)}>-</div>
                            <div className={Css['amount-input']}><input type="tel" value={this.state.iAmount} onChange={(e) => { this.setState({ iAmount: e.target.value.replace(/[a-zA-Z]|[\u4e00-\u9fa5]|[#|*|,|+|;|.]/g, '') }) }} /></div>
                            <div className={Css['btn'] + " " + Css['inc']} onClick={this.incAmount.bind(this)}>+</div>
                        </div>
                    </div>
                    <div className={Css['sure-btn']} onClick={this.addCart.bind(this)}>确定</div>
                </div>
            </div>
        );
    }
}

export default DetailsItem;