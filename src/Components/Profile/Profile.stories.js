import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Profile } from './Profile.js';
import photo from '../../../public/img/test.png';

storiesOf('Profile', module)
    .add('default', () => (
        <Profile user={ {name: text('Имя', 'Андрей Кэмбербетч'), avatar: text('Аватар', photo)} } />
    ))
    .add('friend', () => (
        <Profile user={ {name: text('Имя', 'Андрей Кэмбербетч'), avatar: text('Аватар', photo)} }
                 btnText={'Узнать что подарить'}
                 size={'medium'}/>
    ));