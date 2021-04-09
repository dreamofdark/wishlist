import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Profile.module.scss';
import { noop } from '../../Utils/helpers';
import { Avatar } from "../Avatar/Avatar.js";
import { Button } from "../Button/Button.js";

export class Profile extends Component {
    static propTypes = {
        user: propTypes.shape({
            name: propTypes.string,
            avatar: propTypes.string,
        }),
        size: propTypes.oneOf(['medium', 'large']),
        isMobile: propTypes.bool,
        onClick: propTypes.func,
        btnText: propTypes.string,
    };

    static defaultProps = {
        user: {
            name: '',
            avatar: '',
        },
        size: 'large',
        isMobile: true,
        onClick: noop,
        btnText: 'Поделиться'
    };

    render() {
        const { user: {name, avatar}, onClick, btnText, size } = this.props;

        return (
            <div className={classNames({
                [styles.root]: true,
                [styles[size]]: !!size,
            })}>
                <Avatar size={size} src={avatar}/>
                <div className={styles.column}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <Button size={size} btnText={btnText} onClick={onClick}/>
                </div>
            </div>
        )
    }
}