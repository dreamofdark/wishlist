import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './FriendsList.module.scss';
import { Profile } from '../Profile/Profile';

export class FriendsList extends Component {
    static propTypes = {
        friends: propTypes.arrayOf(propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        })),
    };

    static defaultProps = {
        friends: [],
    };

    render() {
        const { friends } = this.props;
        return (
            <div className={styles.wrap}>
                <div className={styles.root}>
                    { friends.map(friend => <Profile key={friend} user={friend} size={'medium'}/>) }
                </div>
            </div>
        );
    }
}