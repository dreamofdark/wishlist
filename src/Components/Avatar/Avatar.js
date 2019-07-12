import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './Avatar.css';
import { noop } from '../../Utils/helpers';

export class Avatar extends Component {
    static propTypes = {
        src: propTypes.string.isRequired,
        size: propTypes.oneOf('small', 'middle'),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        size: 'small',
        isMobile: true,
        onClick: noop,
    };

    render() {
        const background = { 'background-image': `url(${this.props.src})`};

        return (
            <div className="avatar" style={background}/>
        )
    }
}