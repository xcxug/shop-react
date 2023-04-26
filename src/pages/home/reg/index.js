import React, { Component } from 'react';
import SubHeaderComponent from '../../../components/header/subheader';
import { Switch } from 'antd-mobile';
import Css from '../../../assets/css/home/reg/index.module.css';

class RegIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="会员注册"></SubHeaderComponent>
                <div className={Css['main']}>
                    <div className={Css['cellphone-wrap']}>
                        <div className={Css['cellphone']}><input type="tel" placeholder="请输入手机号" /></div>
                        <div className={Css['code-btn'] + " " + Css['success']}>获取短信验证码</div>
                    </div>
                    <div className={Css['code-wrap']}><input type="text" placeholder="请输入短信验证码" /></div>
                    <div className={Css['password-wrap']}>
                        <div className={Css['password']}><input type="password" placeholder="请输入密码" /></div>
                        <div className={Css['switch-wrap']}>
                            <Switch checked={this.state.checked} onChange={() => {
                                this.setState({ checked: !this.state.checked })
                            }}></Switch>
                        </div>
                    </div>
                    <div className={Css['sure-btn']}>注册</div>
                </div>
            </div>
        )
    }
}

export default RegIndex;