import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Spinner } from './Spinner';

storiesOf('Spinner', module)
    .add('default', () => (
        <Spinner/>
    ));
