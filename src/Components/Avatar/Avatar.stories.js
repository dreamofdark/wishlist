import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Avatar } from './Avatar.js';
import photo from '../../../public/img/test.png';

storiesOf('Avatar', module)
    .add('small (default)', () => (
        <Avatar src={ text('Src', photo) }/>
    ))
    .add('large', () => (
        <Avatar size={'large'} src={ text('Src', photo) }/>
    ));