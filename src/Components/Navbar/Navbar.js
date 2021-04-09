import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Navbar.module.scss';
import { ProfileMini } from '../ProfileMini/ProfileMini';
import { Friends } from '../Friends/Friends';
import { Route, Switch } from 'react-router-dom';
import { StyledLink } from '../StyledLink/StyledLink';

export class Navbar extends Component {
    render() {
        const user = {
            name: "Петр Иванов",
        };
        return (
            <div className={styles.root}>
                <Switch>
                    <Route path={'/me'} render={() => (
                        <>
                            <StyledLink text={'Вернуться к поиску'} to={'/'} />
                            <Friends/>
                        </>
                    )}/>
                    <Route path={'/friends'} render={() => (
                        <>
                            <ProfileMini user={user}/>
                            <StyledLink text={'Вернуться к поиску'} to={'/'} />
                        </>
                    )}/>
                    <Route path={'/friend/:id'} render={() => (
                        <>
                            <ProfileMini user={user}/>
                            <StyledLink text={'Вернуться к поиску'} to={'/'} />
                            <Friends/>
                        </>
                    )}/>
                    <Route render={() => (
                        <>
                            <ProfileMini user={user}/>
                            <Route render={() => <Friends/>} />
                        </>
                    )}/>
                </Switch>
            </div>
        );
    }
}