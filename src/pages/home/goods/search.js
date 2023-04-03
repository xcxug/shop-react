import React, { Component } from 'react';
import IScroll from '../../../assets/js/libs/iscroll.js';
import Css from '../../../assets/css/home/goods/search.module.css';

class GoodsSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenMove: "",
            bMask: false
        }
        this.myScroll = null;
    }

    componentDidMount() {
        this.myScroll = new IScroll('#screen', {
            scrollX: false,
            scrollY: true,
            preventDefault: false
        });
    }

    showScreen() {
        this.refs['mask'].addEventListener("touchmove", function (e) { e.preventDefault(); });
        this.refs['screen'].addEventListener("touchmove", function (e) { e.preventDefault(); });
        this.setState({ screenMove: Css['move'], bMask: true });
    }

    hideScreen() {
        this.setState({ screenMove: Css['unmove'], bMask: false });
    }

    componentWillUnmount() {
        this.refs['mask'].removeEventListener("touchmove", function (e) { e.preventDefault(); });
        this.refs['screen'].removeEventListener("touchmove", function (e) { e.preventDefault(); });
    }

    render() {
        return (
            <div className={Css['page']}>
                <div className={Css['search-top']}>
                    <div className={Css['search-header']}>
                        <div className={Css['back']}></div>
                        <div className={Css['search-wrap']}>
                            <div className={Css['search-icon']}></div>
                            <div className={Css['search-text']}>请输入您的宝贝名称</div>
                        </div>
                        <div className={Css['screen-btn']} onClick={this.showScreen.bind(this)}>筛选</div>
                    </div>
                    <div className={Css['order-main']}>
                        <div className={Css['order-item']}>
                            <div className={Css["order-text"]}>综合</div>
                            <div className={Css['order-icon']}></div>
                            <ul className={Css['order-menu'] + " hide"}>
                                <li className={Css['active']}>综合</li>
                                <li>价格从低到高</li>
                                <li>价格从高到低</li>
                            </ul>
                        </div>
                        <div className={Css['order-item']}>
                            <div className={Css["order-text"]}>销量</div>
                        </div>
                    </div>
                </div>
                <div className={Css['goods-main']}>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                    <div className={Css['goods-list']}>
                        <div className={Css['image']}><img src="//vueshop.glbuys.com/uploadfiles/1524554409.jpg" alt="" /></div>
                        <div className={Css['goods-content']}>
                            <div className={Css['goods-title']}>蕾丝半身裙女2018春夏新款韩版修身包臀a字纯色不规则裙 CM81004</div>
                            <div className={Css['price']}>¥118</div>
                            <div className={Css['sales']}>销量<span>100</span>件</div>
                        </div>
                    </div>
                </div>
                <div ref="mask" className={this.state.bMask ? Css['mask'] : Css['mask'] + " hide"} onClick={this.hideScreen.bind(this)}></div>
                <div ref="screen" id="screen" className={Css['screen'] + " " + this.state.screenMove}>
                    <div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>分类</div>
                                <div className={Css['attr-icon'] + " " + Css['up']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item'] + " " + Css['active']}>潮流女装</div>
                                <div className={Css['item']}>潮流女装</div>
                                <div className={Css['item']}>潮流女装</div>
                                <div className={Css['item']}>潮流女装</div>
                                <div className={Css['item']}>潮流女装</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>价格区间</div>
                                <div className={Css['price-wrap']}>
                                    <div className={Css['price-input']}><input type="tel" placeholder="最低价" /></div>
                                    <div className={Css['price-line']}></div>
                                    <div className={Css['price-input']}><input type="tel" placeholder="最高价" /></div>
                                </div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>1-50</div>
                                <div className={Css['item']}>51-99</div>
                                <div className={Css['item']}>100-300</div>
                                <div className={Css['item']}>301-1000</div>
                                <div className={Css['item']}>1001-4000</div>
                                <div className={Css['item']}>4001-9999</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "0.3rem", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>品牌</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>李宁</div>
                                <div className={Css['item']}>阿迪达斯</div>
                                <div className={Css['item']}>耐克</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>衣长</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>长款</div>
                                <div className={Css['item']}>中长款</div>
                                <div className={Css['item']}>短款</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>品牌</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>李宁</div>
                                <div className={Css['item']}>阿迪达斯</div>
                                <div className={Css['item']}>耐克</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>衣长</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>长款</div>
                                <div className={Css['item']}>中长款</div>
                                <div className={Css['item']}>短款</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>品牌</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>李宁</div>
                                <div className={Css['item']}>阿迪达斯</div>
                                <div className={Css['item']}>耐克</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>衣长</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>长款</div>
                                <div className={Css['item']}>中长款</div>
                                <div className={Css['item']}>短款</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>品牌</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>李宁</div>
                                <div className={Css['item']}>阿迪达斯</div>
                                <div className={Css['item']}>耐克</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>衣长</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>长款</div>
                                <div className={Css['item']}>中长款</div>
                                <div className={Css['item']}>短款</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>品牌</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>李宁</div>
                                <div className={Css['item']}>阿迪达斯</div>
                                <div className={Css['item']}>耐克</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div className={Css['attr-wrap']}>
                            <div className={Css['attr-title-wrap']}>
                                <div className={Css['attr-name']}>衣长</div>
                                <div className={Css['attr-icon']}></div>
                            </div>
                            <div className={Css['item-wrap']}>
                                <div className={Css['item']}>长款</div>
                                <div className={Css['item']}>中长款</div>
                                <div className={Css['item']}>短款</div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#EFEFEF" }}></div>
                        <div style={{ width: "100%", height: "1.2rem" }}></div>
                    </div>
                    <div className={Css['handel-wrap']}>
                        <div className={Css['item']}>共<span>16</span>件</div>
                        <div className={Css['item'] + " " + Css['reset']}>全部重置</div>
                        <div className={Css['item'] + " " + Css['sure']}>确定</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsSearch;