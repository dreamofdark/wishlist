import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Gallery.module.scss';
import { WishItem } from '../WishItem/WishItem';
import ReactGallery from "react-masonry-component";
import mac from '../../img/mac.png';
import phone from '../../img/iphone.png';
import banner from '../../img/banner.png'


export class Gallery extends Component {
    static propTypes = {
    };

    renderItem = (photo) => {
        const description = 'Ноутбук Apple MacBook Pro 13.3 Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)';
        return (
            <div className={styles.galleryItem}>
                <WishItem
                    name = "MacBook Pro 2018 256GB"
                    description={description}
                    price="120 000"
                    picture={photo}
                />
            </div>

        );
    };


    static defaultProps = {
    };
    render() {
        const elem = [mac, phone, banner, banner, mac, mac, banner];
        const masonryOptions = {
            transitionDuration: 0
        };

        return (
            <div className={styles.wrap}>
                <div className={styles.root}>
                    <ReactGallery
                        column={3}
                        className={styles.gallery}
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    >
                        {elem.map(i => this.renderItem(i))}
                    </ReactGallery>

                </div>
            </div>
        );
    }
}