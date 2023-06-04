import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal } from 'antd-mobile';
import config from '../../../assets/js/conf/config.js';
import action from '../../../actions';
import { request } from '../../../assets/js/libs/request.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/user/my/index.module.css';

class IndexComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sHead: require("../../../assets/images/user/my/default-head.png"),
            sNickname: "昵称",
            iPoints: 0
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        if (this.props.state.user.isLogin === true) {
            let sUrl = config.baseUrl + "/api/user/myinfo/userinfo/uid/" + this.props.state.user.uid + "?token=" + config.token;
            request(sUrl).then(res => {
                if (res.code === 200) {
                    this.setState({ sHead: res.data.head, sNickname: res.data.nickname, iPoints: res.data.points });
                }
            });
        }
    }

    outLogin() {
        if (this.props.state.user.isLogin === true) {
            Modal.confirm({
                content: '确认要退出吗？',
                confirmText: '确认',
                onConfirm: () => {
                    let sUrl = config.baseUrl + "/api/home/user/safeout?token=" + config.token;
                    request(sUrl, "post", { uid: this.props.state.user.uid }).then(res => {
                        if (res.code === 200) {
                            this.props.dispatch(action.user.outLogin());
                            this.props.dispatch(action.cart.clearCart());
                            this.props.history.push(config.path + 'login/index');
                        }
                    });
                },
                cancelText: '取消',
                onCancel: () => { },
            })
        } else {
            this.props.history.push(config.path + 'login/index');
        }
    }

    pushPage(url) {
        this.props.history.push(config.path + url);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div>
                <SubHeaderComponent title="会员中心"></SubHeaderComponent>
                <div className={Css['user-info-wrap']}>
                    <div className={Css['head']}>
                        <img src={this.state.sHead} alt={this.state.sNickname} />
                    </div>
                    <div className={Css['nickname']}>{this.state.sNickname}</div>
                    <div className={Css['points']}>我的积分：{this.state.iPoints}</div>
                </div>
                <div className={Css['order-name-wrap']}>
                    <div className={Css['order-name']}>全部订单</div>
                    <div className={Css['show-order']}>查看全部订单 &gt;</div>
                </div>
                <div className={Css['order-status-wrap']}>
                    <div className={Css['item']}>
                        <div className={Css['icon'] + " " + Css['wait']}></div>
                        <div className={Css['text']}>待支付</div>
                    </div>
                    <div className={Css['item']}>
                        <div className={Css['icon'] + " " + Css['take']}></div>
                        <div className={Css['text']}>待收货</div>
                    </div>
                    <div className={Css['item']}>
                        <div className={Css['icon'] + " " + Css['comment']}></div>
                        <div className={Css['text']}>待评价</div>
                    </div>
                </div>
                <div className={Css["menu-list-wrap"]}>
                    <ul onClick={this.pushPage.bind(this, 'profile/index')}>
                        <li>个人资料</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>收货地址</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>绑定手机</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>修改密码</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>我的收藏</li>
                        <li></li>
                    </ul>
                    <div className={Css['btn']} onClick={this.outLogin.bind(this)}>{this.props.state.user.isLogin === true ? "安全退出" : "登录/注册"}</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(IndexComponent);