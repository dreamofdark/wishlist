import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Gallery.module.scss';
import { WishItem } from '../WishItem/WishItem';
import mac from '../../img/mac.png';
import phone from '../../img/iphone.png';
import banner from '../../img/banner.png'


export class Gallery extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    render() {
        const description = 'Ноутбук Apple MacBook Pro 13.3 Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)';

        return (
            <div className={styles.wrap}>
                <div className={styles.root}>
                    <div className={styles.item}>
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={mac}
                        />
                    </div>
                    <div className="gallery-item">
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={mac}
                        />
                    </div>
                    <div className="gallery-item" id="item3">
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={mac}
                        />
                    </div>
                    <div className="gallery-item">
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={banner}
                        />
                    </div>
                    <div className="gallery-item">
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={phone}
                        />
                    </div>
                    <div className="gallery-item">
                        <WishItem
                            name = "MacBook Pro 2018 256GB"
                            description={description}
                            price="120 000"
                            picture={mac}
                        />
                    </div>
                    {/*<div className="gallery-item">*/}
                    {/*    <WishItem*/}
                    {/*        name = "MacBook Pro 2018 256GB"*/}
                    {/*        description={description}*/}
                    {/*        price="120 000"*/}
                    {/*        picture={mac}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="gallery-item">*/}
                    {/*    <WishItem*/}
                    {/*        name = "MacBook Pro 2018 256GB"*/}
                    {/*        description={description}*/}
                    {/*        price="120 000"*/}
                    {/*        picture={banner}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="gallery-item">*/}
                    {/*    <WishItem*/}
                    {/*        name = "MacBook Pro 2018 256GB"*/}
                    {/*        description={description}*/}
                    {/*        price="120 000"*/}
                    {/*        picture={mac}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="gallery-item">*/}
                    {/*    <WishItem*/}
                    {/*        name = "MacBook Pro 2018 256GB"*/}
                    {/*        description={description}*/}
                    {/*        price="120 000"*/}
                    {/*        picture={banner}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}