import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Avatar.module.scss';
import classNames from 'classnames';
import { noop } from '../../Utils/helpers';

export class Avatar extends Component {
    static propTypes = {
        src: propTypes.string.isRequired,
        size: propTypes.oneOf(['small', 'medium', 'large']),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        size: 'small',
        isMobile: true,
        onClick: noop,
    };

    render() {
        const { size, src } = this.props;
        const background = { 'background-image': `url(${src})`};

        return (
            <div className={classNames({
                [styles.avatar]: true,
                [styles[size]]: true,
            })} style={background}/>
        )
    }
}