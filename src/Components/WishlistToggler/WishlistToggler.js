import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './WishlistToggler.module.scss';
import { noop } from '../../Utils/helpers';

export class WishlistToggler extends Component {
    static propTypes = {
        isMyProfile: propTypes.bool,
        isWishPage: propTypes.bool,
        onToggle: propTypes.func,
    };

    static defaultProps = {
        isMyProfile: false,
        isWishPage: false,
        onToggle: noop,
    };

    constructor(props) {
        super(props);
        const { isWishPage } = props;
        this.state = { isWishPage };
    }

    setWish = () => {
        this.props.onToggle(true);
        this.setState({
            isWishPage: true,
        })
    };

    setGift = () => {
        this.props.onToggle(false);
        this.setState({
            isWishPage: false,
        });
    };

    render() {
        const { isMyProfile } = this.props;
        const linkText = `Хоч${ isMyProfile ? 'у' : 'ет'} получить`;
        const { setWish, setGift } = this;
        const { isWishPage } = this.state;

        return (
            <div className={styles.root}>
                <a onClick={setWish}
                   className={classNames({
                       [styles.link]: true,
                       [styles.active]: isWishPage,
                })}>
                    { linkText }
                </a>
                <a onClick={setGift}
                   className={classNames({
                       [styles.link]: true,
                       [styles.active]: !isWishPage,
                })}>
                    Хочу подарить
                </a>
            </div>
        );
    }
}