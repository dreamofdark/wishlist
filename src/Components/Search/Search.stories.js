import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Search } from './Search';


storiesOf('Search', module)
    .add('default', () => (
        <Search placeholder={text('Placeholder', 'Начни вводить название товара')}
                isMobile={boolean('Mobile', false)}
        />
    ))
    .add('with results', () => (
        <Search placeholder={text('Placeholder', 'Начни вводить название товара')}
                isMobile={boolean('Mobile', false)}
                results={[{ text: 'iPhone 128Gb'}, { text: 'iPhone 256Gb'}, { text: 'iPhone 64Gb'}]}
        />
    ));