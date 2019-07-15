import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';
import { noop } from '../../Utils/helpers';


export class Button extends Component {
    static propTypes = {
        btnText: propTypes.string.isRequired,
        size: propTypes.oneOf('small', 'middle'),
        style: propTypes.oneOf('light', 'dark'),
        isMobile: propTypes.bool,
        withIcon: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        style: 'dark',
        isMobile: false,
        withIcon: false,
        onClick: noop,
    };

    render() {
        const { btnText, size, style, onClick } = this.props;
        return (
            <button
                className={classNames({
                    'button': true,
                    [`button_${style}`]: true,
                    [`button_${size}`]: !!size,
                })}
                onClick={onClick}
            >
                {btnText}
            </button>
        );
    }
}