import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { RoundButton } from './RoundButton';

const styleOptions = {
    gift: 'gift',
    like: 'like',
    share: 'share',
};

storiesOf('RoundButton', module)
    .add('default', () => (
        <RoundButton style={select('Style', styleOptions, styleOptions.gift)}
        />
    ));
