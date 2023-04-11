import React, { Component } from 'react';
import Css from '../../../assets/css/home/goods/details_content.module.css';

class DetailsContent extends Component {
    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                商品详情
            </div>
        );
    }
}

export default DetailsContent;