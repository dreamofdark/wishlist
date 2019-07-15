import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './SearchResult.css';
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
            <div className="search-result"
                 onClick={onClick}
            >
                <span className="search-result_matched">
                    { query }
                </span>
                { restOfText }
            </div>
        )
    }
}