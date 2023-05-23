import React from 'react';
import { connect } from "react-redux";
import config from '../../../assets/js/conf/config.js';
import { safeAuth } from '../../../assets/js/utils/util.js';
import SubHeaderComponent from '../../../components/header/subheader';

class AddressIndex extends React.Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    pushPage(url) {
        this.props.history.push(config.path + url)
    }

    render() {
        return (
            <div>
                <SubHeaderComponent title="选择收货地址"></SubHeaderComponent>
                <button type="button" style={{ marginTop: "1rem" }} onClick={this.pushPage.bind(this, 'address/add')}>添加收货地址</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(AddressIndex);