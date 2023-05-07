import React, { Component } from 'react';
import { connect } from "react-redux";
import config from '../../../assets/js/conf/config.js';
import action from '../../../actions';
import { request } from '../../../assets/js/libs/request.js';
import { safeAuth } from '../../../assets/js/utils/util.js';

class IndexComponent extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    outLogin() {
        let sUrl = config.baseUrl + "/api/home/user/safeout?token=" + config.token;
        request(sUrl, "post", { uid: this.props.state.user.uid }).then(res => {
            if (res.code === 200) {
                this.props.dispatch(action.user.outLogin());
                this.props.history.replace(config.path + 'login/index');
            }
        });
    }

    render() {
        return (
            <div>
                昵称：{this.props.state.user.nickname}<br />
                <button type="button" onClick={this.outLogin.bind(this)}>安全退出</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(IndexComponent);