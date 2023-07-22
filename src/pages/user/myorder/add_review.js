import React, { Component } from 'react';
import { connect } from "react-redux";
import { safeAuth } from '../../../assets/js/utils/util.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/user/myorder/add_review.module.css';

class AddReview extends Component {
    constructor(props) {
        super(props);

        safeAuth(props);
    }

    componentWillUnmount() {
        this.setState = (_state, _callback) => {
            return;
        }
    }

    render() {
        return (
            <div className={Css['page']}>
                <SubHeaderComponent title="评价"></SubHeaderComponent>
                <div className={Css['main']}>
                    <ul className={Css['service']}>
                        <li>整体</li>
                        <li>
                            <div className={Css['stars'] + " " + Css['active']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                        </li>
                    </ul>
                    <ul className={Css['service']}>
                        <li>服务</li>
                        <li>
                            <div className={Css['stars'] + " " + Css['active']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                            <div className={Css['stars']}></div>
                        </li>
                    </ul>
                    <div className={Css['content-wrap']}>
                        <textarea placeholder="来分享你的消费感受吧!"></textarea>
                    </div>
                    <button className={Css['submit']} type="button">提交</button>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state: state
    }
})(AddReview);