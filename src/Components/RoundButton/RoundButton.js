import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RoundButton.module.scss';
import { noop } from '../../Utils/helpers';


export class Button extends Component {
    static propTypes = {
        style: propTypes.oneOf('light', 'dark'),
        onClick: propTypes.func,
    };

    static defaultProps = {
        style: 'dark',
        onClick: noop,
    };

    render() {
        const { btnText, size, style, onClick } = this.props;
        return (
            <div
                className={classNames({
                    [styles.root]: true,
                    [styles[style]]: true,
                })}
                onClick={onClick}
            >
            </div>
        );
    }
}