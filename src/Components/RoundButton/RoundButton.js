import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RoundButton.module.scss';
import { noop } from '../../Utils/helpers';


export class RoundButton extends Component {
    static propTypes = {
        style: propTypes.oneOf(['like', 'gift', 'share']),
        onClick: propTypes.func,
    };

    static defaultProps = {
        style: 'gift',
        onClick: noop,
    };

    render() {
        const { style, onClick } = this.props;
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