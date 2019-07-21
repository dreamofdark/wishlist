import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';
import './ButtonStyle.scss';
import { noop } from '../../Utils/helpers';


export class Button extends Component {
    static propTypes = {
        btnText: propTypes.string.isRequired,
        size: propTypes.oneOf('small', 'medium'),
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
                    [styles.root]: true,
                    [styles[style]]: true,
                    [styles[size]]: !!size,
                })}
                onClick={onClick}
            >
                {btnText}
            </button>
        );
    }
}