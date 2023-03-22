import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponents from '../../../components/async/AsyncComponent';
import config from '../../../assets/js/conf/config.js';
import IScroll from '../../../assets/js/libs/iscroll.js';
import Css from '../../../assets/css/home/goods/classify.module.css';
import { request } from "../../../assets/js/libs/request";
import { localParam } from "../../../assets/js/utils/util";
const GoodsItems = asyncComponents(() => import('./items'));

class GoodsClassify extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aClassify: []
        };
        this.myScroll = null;
        this.aTempClassify = [];
        this.cid = props.location.search ? localParam(props.location.search).search.cid : '';
    }

    componentDidMount() {
        this.getClassifyData();
    }

    replacePage(pUrl) {
        this.props.history.replace(config.path + pUrl);
    }

    goBack() {
        this.props.history.goBack();
    }

    eventScroll() {
        let oScrollClassify = document.getElementById("scroll-classify");
        oScrollClassify.addEventListener('touchmove', function (e) { e.preventDefault(); });
        this.myScroll = new IScroll('#scroll-classify', {
            scrollX: false,
            scrollY: true,
            preventDefault: false
        });
    }

    getClassifyData() {
        request(config.baseUrl + "/api/home/category/menu?token=" + config.token).then(res => {
            if (res.code === 200) {
                this.aTempClassify = res.data;
                for (let i = 0; i < this.aTempClassify.length; i++) {
                    this.aTempClassify[i].bActive = false;
                }
                this.setState({ aClassify: this.aTempClassify }, () => {
                    this.eventScroll();
                    this.defaultClassifyStyle();
                })
            }
        });
    }

    changeStyle(pUrl, pIndex) {
        if (this.aTempClassify.length > 0) {
            for (let i = 0; i < this.aTempClassify.length; i++) {
                this.aTempClassify[i].bActive = false;
            }
        }
        this.aTempClassify[pIndex].bActive = true;
        this.handleScroll(pIndex);
        this.replacePage(pUrl);
    }

    handleScroll(pIndex) {
        let oScrollClassify = document.getElementById("scroll-classify");
        let iTopHeight = Math.round(parseInt(this.refs['item-' + pIndex].offsetHeight) * pIndex);
        let iHalfHeight = Math.round(oScrollClassify.offsetHeight / 3);
        let iBottomHeight = oScrollClassify.scrollHeight - iTopHeight;
        if (iTopHeight > iHalfHeight && iBottomHeight > oScrollClassify.offsetHeight) {
            this.myScroll.scrollTo(0, -iTopHeight, 300, IScroll.utils.ease.elastic);
        }
    }

    defaultClassifyStyle() {
        if (this.aTempClassify.length > 0 && this.cid) {
            for (let i = 0; i < this.aTempClassify.length; i++) {
                if (this.aTempClassify[i].cid === this.cid) {
                    this.aTempClassify[i].bActive = true;
                    break;
                }
            }
        } else {
            this.aTempClassify[0].bActive = true;
        }
        this.setState({ aClassify: this.aTempClassify });
    }

    componentWillUnmount() {
        let oScrollClassify = document.getElementById("scroll-classify");
        oScrollClassify.removeEventListener('touchmove', function (e) { e.preventDefault(); });
    }

    render() {
        return (
            <div>
                <div className={Css['search-header']}>
                    <div className={Css['back']} onClick={this.goBack.bind(this)}></div>
                    <div className={Css['search']}>请输入宝贝名称</div>
                </div>
                <div className={Css['goods-main']}>
                    <div id="scroll-classify" className={Css['classify-wrap']}>
                        <div>
                            {
                                this.state.aClassify != null ?
                                    this.state.aClassify.map((item, index) => {
                                        return (
                                            <div ref={"item-" + index} className={item.bActive ? Css['classify-item'] + " " + Css['active'] : Css['classify-item']} key={index} onClick={this.changeStyle.bind(this, 'goods/classify/items?cid=' + item.cid, index)}>{item.title}</div>
                                        )
                                    })
                                    : ""
                            }
                        </div>
                    </div>
                    <div className={Css['goods-content']}>
                        <Switch>
                            <Route path={config.path + "goods/classify/items"} component={GoodsItems}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsClassify;