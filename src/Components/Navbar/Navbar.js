import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { ProfileMini } from '../ProfileMini/ProfileMini';
import { Friends } from '../Friends/Friends';

export class Navbar extends Component {
    render() {
        const user = {
            name: "Петр Иванов",
        };
        return (
            <div className={styles.root}>
                <ProfileMini user={user}/>
                <Friends />
            </div>
        );
    }
}