import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from  './Search.module.scss';
import { noop } from '../../Utils/helpers';
import { SearchResult } from './SearchResult/SearchResult'

export class Search extends Component {
    static propTypes = {
        placeholder: propTypes.string,
        isMobile: propTypes.bool,
        results: propTypes.arrayOf(propTypes.string),
        onChange: propTypes.func,
    };

    static defaultProps = {
        placeholder: 'Поиск',
        isMobile: false,
        results: [],
        onChange: noop,
    };

    render() {
        const { placeholder, isMobile, results, onChange } = this.props;

        const isResultsEmpty = results.length === 0;

        return (
            <div className={styles.root}>
                <input type="text"
                       placeholder={placeholder}
                       onChange={onChange}
                       className={classNames({
                           [styles.input]: true,
                       })}
                />
                <div className={classNames({
                    [styles.results]: true,
                    [styles.results_empty]: isResultsEmpty,
                })}>
                    { results.map(res => <SearchResult {...res} query="iPh"/>) }
                </div>
            </div>
        )
    }
}