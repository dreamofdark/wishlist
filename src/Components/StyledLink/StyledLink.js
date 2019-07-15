import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './StyledLink.css';
import { noop } from '../../Utils/helpers';

export class Search extends Component {
    static propTypes = {
        text: propTypes.string,
        to: propTypes.string,
        onClick: propTypes.func,
    };

    static defaultProps = {
        text: '',
        to: '',
        onClick: noop,
    };

    render() {
        const { text, to, onClick } = this.props;

        return <Link className="styled-link" to={to}>{text}</Link>;
    }
}