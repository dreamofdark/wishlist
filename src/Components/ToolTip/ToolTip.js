import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './ToolTip.module.scss';
import { noop } from '../../Utils/helpers';

export class ToolTip extends Component {
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

        return (
          <div className={styles.root}>
              {this.props.children}
          </div>
        );
    }
}