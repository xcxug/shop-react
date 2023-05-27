import React, { Component } from 'react';
import { connect } from "react-redux";
import config from '../../../assets/js/conf/config.js';
import { safeAuth } from '../../../assets/js/utils/util.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/home/address/index.module.css';

class AddressIndex extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    pushPage(url) {
        this.props.history.push(config.path + url)
    }

    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="选择收货地址"></SubHeaderComponent>
                <div className={Css['main']}>
                    <div className={Css['address-nav']}>
                        <div className={Css['address-nav-name-1']}>配送地址</div>
                        <div className={Css['address-nav-name-2']} onClick={this.pushPage.bind(this, 'address/add')}>+添加收货地址</div>
                    </div>
                    <div className={Css['address-list']}>
                        <div className={Css['address-info-wrap']}>
                            <div className={Css['check-mark']}></div>
                            <div className={Css['address-info'] + " " + Css['default']}>
                                <div className={Css['persion']}><span>张三</span><span>13717263515</span></div>
                                <div className={Css['address']}>
                                    <span className={Css['default']}>默认</span><span className={Css['text']}>北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳</span>
                                </div>
                            </div>
                        </div>
                        <div className={Css['handle-wrap']}>
                            <div className={Css['edit']}></div>
                            <div className={Css['del']}></div>
                        </div>
                    </div>
                    <div className={Css['address-list']}>
                        <div className={Css['address-info-wrap']}>
                            <div className={Css['address-info']}>
                                <div className={Css['persion']}><span>张三</span><span>13717263515</span></div>
                                <div className={Css['address']}>
                                    <span className={Css['text']}>北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳北京朝阳</span>
                                </div>
                            </div>
                        </div>
                        <div className={Css['handle-wrap']}>
                            <div className={Css['edit']}></div>
                            <div className={Css['del']}></div>
                        </div>
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
})(AddressIndex);