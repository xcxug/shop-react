import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Css from './subheader.module.css';

class SubHeader extends Component {
    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className={Css['sub-header']}>
                <div className={Css['back']} onClick={this.goBack.bind(this)}></div>
                <div className={Css['title']}>{this.props.title}</div>
                <div className={this.props['right-text'] !== '' ? Css['right-btn'] : Css['right-btn'] + " hide"}>{this.props['right-text']}</div>
            </div>
        );
    }
}

export default withRouter(SubHeader);