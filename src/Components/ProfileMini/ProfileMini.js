import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './ProfileMini.module.scss';
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
        isMobile: false,
        onClick: noop,
    };

    render() {
        const { user: {name, avatar}, onClick } = this.props;

        return (
            <div className={styles.root} onClick={onClick}>
                <Avatar src={avatar}/>
                <a href="" className={styles.link}>{name}</a>
            </div>
        )
    }
}