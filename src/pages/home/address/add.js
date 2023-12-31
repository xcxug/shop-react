import React, { Component } from 'react';
import { connect } from "react-redux";
import config from '../../../assets/js/conf/config.js';
import { request } from '../../../assets/js/libs/request.js';
import { safeAuth, setScrollTop } from '../../../assets/js/utils/util.js';
import { CascadePicker, Toast } from 'antd-mobile';
import { province } from '../../../assets/data/province.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/home/address/add.module.css';

class AddressAdd extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);

        this.state = {
            defaultProvince: "",
            sProvince: "",
            sCity: "",
            sArea: "",
            sName: "",
            sCellphone: '',
            sAddress: '',
            bChecked: false,
            visible: false
        }
        this.bSubmit = true;
    }

    pushPage(url) {
        this.props.history.push(config.path + url)
    }

    componentDidMount() {
        setScrollTop();
    }

    // 提交数据到后台
    submitData() {
        if (this.state.sName.match(/^\s*$/)) {
            Toast.show({
                content: '请输入收货人姓名',
                afterClose: () => {
                    console.log('after');
                },
            })
            return false;
        }
        if (this.state.sCellphone.match(/^\s*$/)) {
            Toast.show({
                content: '请输入联系人手机号',
                afterClose: () => {
                    console.log('after');
                },
            })
            return false;
        }
        if (!this.state.sCellphone.match(/^1[0-9][0-9]{9}/)) {
            Toast.show({
                content: '您输入的手机号格式不正确',
                afterClose: () => {
                    console.log('after');
                },
            })
            return false;
        }
        if (this.state.defaultProvince.match(/^\s*$/)) {
            Toast.show({
                content: '请选择所在地区',
                afterClose: () => {
                    console.log('after');
                },
            })
            return false;
        }
        if (this.state.sAddress.match(/^\s*$/)) {
            Toast.show({
                content: '请输入详细地址',
                afterClose: () => {
                    console.log('after');
                },
            })
            return false;
        }
        let url = config.baseUrl + "/api/user/address/add?token=" + config.token;
        let data = {
            uid: this.props.state.user.uid,
            name: this.state.sName,
            cellphone: this.state.sCellphone,
            province: this.state.sProvince,
            city: this.state.sCity,
            area: this.state.sArea,
            address: this.state.sAddress,
            isdefault: this.state.bChecked ? "1" : "0"
        };
        if (this.bSubmit) {
            this.bSubmit = false;
            request(url, "post", data).then((res) => {
                if (res.code === 200) {
                    if (this.state.bChecked) {
                        localStorage['addressId'] = res.data.aid;
                        sessionStorage.removeItem("addressId");
                    }
                    Toast.show({
                        content: '添加成功',
                        afterClose: () => {
                            console.log('after');
                            this.props.history.goBack();
                        },
                    })
                } else {
                    Toast.show({
                        content: res.data,
                        afterClose: () => {
                            console.log('after');
                        },
                    })
                }
            });
        }
    }

    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="添加收货地址"></SubHeaderComponent>
                <div className={Css['main']}>
                    <ul>
                        <li>收货人</li>
                        <li><input type="text" placeholder="收货人姓名" onChange={(e) => {
                            this.setState({ sName: e.target.value })
                        }} /></li>
                    </ul>
                    <ul>
                        <li>联系方式</li>
                        <li><input type="text" placeholder="联系人手机号" onChange={(e) => {
                            this.setState({ sCellphone: e.target.value })
                        }} /></li>
                    </ul>
                    <ul>
                        <li>所在地区</li>
                        <li>
                            <input type="text" placeholder="请选择收货地址" className={Css['area']} readOnly value={this.state.defaultProvince} onClick={() => {
                                this.setState({ visible: true })
                            }} />
                        </li>
                        <CascadePicker
                            title='级联选择'
                            options={province}
                            visible={this.state.visible}
                            onClose={() => {
                                this.setState({ visible: false })
                            }}
                            onConfirm={(val, extend) => {
                                console.log('onConfirm', val, extend.items)
                                console.log('val[2]', val[2])
                                this.setState({ defaultProvince: val.join(" "), sProvince: val[0], sCity: val[1], sArea: val[2] !== null ? val[2] : '' });
                            }}
                            onSelect={val => {
                                console.log('onSelect', val)
                            }}
                        >
                        </CascadePicker>
                    </ul>
                    <ul>
                        <li>详细地址</li>
                        <li><input type="text" placeholder="街道详细地址" onChange={(e) => {
                            this.setState({ sAddress: e.target.value })
                        }} /></li>
                    </ul>
                    <ul>
                        <li>设置为默认地址</li>
                        <li><input type="checkbox" checked={this.state.bChecked} onChange={(e) => {
                            this.setState({ bChecked: !this.state.bChecked })
                        }} /></li>
                    </ul>
                    <button type="button" className={Css['submit-save']} onClick={this.submitData.bind(this)}>保存</button>
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