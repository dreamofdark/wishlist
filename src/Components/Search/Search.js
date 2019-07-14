import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './Search.css';
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
            <div className="search">
                <input type="text"
                       placeholder={placeholder}
                       onChange={onChange}
                       className={classNames({
                           "search__input": true,
                       })}
                />
                <div className={classNames({
                    "search-results": true,
                    "search-results_empty": isResultsEmpty,
                })}>
                    { results.map(res => <SearchResult {...res} query="iPh"/>) }
                </div>
            </div>
        )
    }
}