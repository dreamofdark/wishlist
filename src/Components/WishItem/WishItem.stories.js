import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number} from '@storybook/addon-knobs';
import { WishItem } from './WishItem';
import mac from '../../img/mac.png';

const description = 'Ноутбук Apple MacBook Pro 13.3 Core i5 2,4 ГГц, 8 ГБ, 256 ГБ SSD, Iris Plus 655, Touch Bar (серый космос)';

storiesOf('WishItem', module)
    .add('default', () => (
        <WishItem name={text('Name', 'MacBook Pro 2018 256GB')}
                  description={text('Description', description)}
                  picture={text('Img url', mac)}
                  price={text('Price', '120 000')}
        />
    ));
