import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './StyledLink.module.scss';
import { noop } from '../../Utils/helpers';

export class StyledLink extends Component {
    static propTypes = {
        text: propTypes.string,
        to: propTypes.string,
        onClick: propTypes.func,
        fontSize: propTypes.string
    };

    static defaultProps = {
        text: '',
        to: '',
        onClick: noop,
        fontSize: '14px'
    };

    render() {
        const { text, to, fontSize, onClick } = this.props;

        return (
            <Link className={styles.root}
                  to={to}
                  style={{ fontSize }}>
                {text}
            </Link>
        );
    }
}