import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Button } from './Button';

const sizeOptions = {
    middle: 'middle',
    small: 'small',
    default: '',
};

const styleOptions = {
    dark: 'dark',
    light: 'light',
};

storiesOf('Button', module)
    .add('default', () => (
        <Button btnText={text('BtnText', 'Кнопка')}
                style={select('Style', styleOptions, styleOptions.dark)}
                size={select('Size', sizeOptions, sizeOptions.default)}
                isMobile={boolean('Mobile', false)}
        />
    ));
