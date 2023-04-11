import React, { Component } from 'react';
import Css from '../../../assets/css/home/goods/details_reviews.module.css';

class DetailsReviews extends Component {
    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                商品评价
            </div>
        );
    }
}

export default DetailsReviews;