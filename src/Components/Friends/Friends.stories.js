import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Friends } from './Friends.js';
import photo from '../../../public/img/test.png';

storiesOf('Friends', module)
    .add('default', () => (
        <Friends />
    ))
    .add('2 friends', () => (
        <Friends friends={[
            {name: 'Игорь', avatar: photo},
            {name: 'Игорь', avatar: photo},
        ]}/>
    ))
    .add('4 friends', () => (
        <Friends friends={[
            {name: 'Игорь', avatar: photo},
            {name: 'Игорь', avatar: photo},
            {name: 'Игорь', avatar: photo},
            {name: 'Игорь', avatar: photo},
        ]}/>    ));