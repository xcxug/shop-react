import React, { Component } from 'react';
import { connect } from "react-redux";
import config from '../../../assets/js/conf/config.js';
import { safeAuth } from '../../../assets/js/utils/util.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/home/address/add.module.css';

class AddressAdd extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    pushPage(url) {
        this.props.history.push(config.path + url)
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="添加收货地址"></SubHeaderComponent>
                <div className={Css['main']}>
                    <ul>
                        <li>收货人</li>
                        <li><input type="text" placeholder="收货人姓名" /></li>
                    </ul>
                    <ul>
                        <li>联系方式</li>
                        <li><input type="text" placeholder="联系人手机号" /></li>
                    </ul>
                    <ul>
                        <li>所在地区</li>
                        <li><input type="text" placeholder="请选择收货地址" className={Css['area']} readOnly /></li>
                    </ul>
                    <ul>
                        <li>详细地址</li>
                        <li><input type="text" placeholder="街道详细地址" /></li>
                    </ul>
                    <ul>
                        <li>设置为默认地址</li>
                        <li><input type="checkbox" /></li>
                    </ul>
                    <button type="button" className={Css['submit-save']}>保存</button>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(AddressAdd);