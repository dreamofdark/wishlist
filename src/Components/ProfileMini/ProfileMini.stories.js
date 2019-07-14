import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { ProfileMini } from './ProfileMini.js';
import photo from '../../../public/img/test.png';

storiesOf('ProfileMini', module)
    .add('default', () => (
        <ProfileMini user={ {name: text('Имя', 'Андрей'), avatar: text('Аватар', photo)} } />
    ));