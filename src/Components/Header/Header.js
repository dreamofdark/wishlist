import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.module.scss';

export const Header = (props) => <div className={styles.root}>{props.text}</div>;

Header.propTypes = {
    text: propTypes.string,
};

Header.defaultProps = {
    text: 'Wishlist'
};
