import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './WishItem.module.scss';
import { Button } from '../Button/Button';

export class WishItem extends Component {
    static propTypes = {
        name: propTypes.string,
        description: propTypes.string,
        price: propTypes.string,
        picture: propTypes.string,
    };

    static defaultProps = {
    };

    render() {
        const { description, price, name, picture } = this.props;
        return (
            <div className={styles.root}>
                <img src={picture} alt={name} className={styles.picture}/>
                <div className={styles.infoBlock}>
                    <div className={styles.itemName}>{name}</div>
                    <div className={styles.price}>{price}{' ₽'}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <Button btnText="Добавить в избранное"/>
            </div>
        );
    }
}