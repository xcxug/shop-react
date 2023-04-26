import React, { Component } from 'react';
import config from '../../../assets/js/conf/config.js';

class LoginIndex extends Component {
    pushPage(url) {
        this.props.history.push(config.path + url);
    }

    render() {
        return (
            <div>会员登录<br /><span onClick={this.pushPage.bind(this, 'reg/index')}>会员注册</span></div>
        )
    }
}

export default LoginIndex;