import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './Friends.css';
import { noop } from '../../Utils/helpers';
import {Avatar} from "../Avatar/Avatar.js";

export class Friends extends Component {
    static propTypes = {
        friends: propTypes.arrayOf(propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        })),
        size: propTypes.oneOf('small', 'middle'),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        friends: [],
        size: 'small',
        isMobile: true,
        onClick: noop,
    };

    render() {
        const { friends, onClick } = this.props;

        return (
            <div className="friends" onClick={onClick}>
                <a href="" className="friends__link">Мои друзья</a>
                <div className="friends__list">
                    {friends.slice(0,3).map( ({avatar}) => <Avatar src={avatar}/> )}
                </div>
            </div>
        )
    }
}