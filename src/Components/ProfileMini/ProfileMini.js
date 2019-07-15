import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './ProfileMini.css';
import { noop } from '../../Utils/helpers';
import {Avatar} from "../Avatar/Avatar.js";

export class ProfileMini extends Component {
    static propTypes = {
        user: propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        }),
        size: propTypes.oneOf('small', 'middle'),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        user: {
            name: '',
            avatar: '',
        },
        size: 'small',
        isMobile: true,
        onClick: noop,
    };

    render() {
        const { user: {name, avatar}, onClick } = this.props;

        return (
            <div className="profile-mini" onClick={onClick}>
                <Avatar src={avatar}/>
                <a href="" className="profile-mini__link">{name}</a>
            </div>
        )
    }
}