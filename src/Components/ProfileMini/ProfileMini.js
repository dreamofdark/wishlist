import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './ProfileMini.module.scss';
import { noop } from '../../Utils/helpers';
import {Avatar} from "../Avatar/Avatar.js";
import { Redirect } from 'react-router-dom';


export class ProfileMini extends Component {
    static propTypes = {
        user: propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        }),
        size: propTypes.oneOf(['small', 'middle']),
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

    state = {
        redirect: false
    };

    onClick = () => {
        this.setState({
            redirect: true
        })
    };

    render() {
        const { user: {name, avatar} } = this.props;
        const { onClick } = this;

        if(this.state.redirect) {
            return <Redirect to={'/me'}/>
        }

        return (
            <div className={styles.root} onClick={onClick}>
                <Avatar src={avatar}/>
                <span className={styles.link}>{name}</span>
            </div>
        )
    }
}