import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './SearchResult.module.scss';
import { noop } from '../../../Utils/helpers';

export class SearchResult extends Component {
    static propTypes = {
        text: propTypes.string,
        query: propTypes.string,
        isMobile: propTypes.bool,
        onClick: propTypes.func,
    };

    static defaultProps = {
        text: 'Неизвестно',
        query: '',
        isMobile: false,
        onClick: noop,
    };

    render() {
        const { text, query, isMobile, onClick } = this.props;

        const restOfText = text.slice(query.length);

        return (
            <div className={styles.result}
                 onClick={onClick}
            >
                <span className={styles.result_matched}>
                    { query }
                </span>
                { restOfText }
            </div>
        )
    }
}