import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Friends.module.scss';
import { noop } from '../../Utils/helpers';
import { Avatar } from "../Avatar/Avatar.js";
import { Redirect } from 'react-router-dom';


export class Friends extends Component {
    static propTypes = {
        friends: propTypes.arrayOf(propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        })),
        size: propTypes.oneOf(['small', 'middle']),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        friends: [],
        size: 'small',
        isMobile: true,
        onClick: noop,
    };

    state = {
        redirect: false,
    };

    onClick = () => {
        this.setState({
            redirect: true,
        })
    };

    render() {
        const { friends } = this.props;
        const { onClick } = this;

        if (this.state.redirect) {
            return <Redirect to={'/friends'}/>
        }

        return (
            <div className={styles.root} onClick={onClick}>
                <span className={styles.link}>Мои друзья</span>
                <div className={styles.list}>
                    {friends.slice(0,3).map( ({avatar}) => <Avatar src={avatar}/> )}
                </div>
            </div>
        )
    }
}