import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { WishlistToggler } from './WishlistToggler';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('WishlistToggler', module)
    .add('default', () => (
        <BrowserRouter>
            <Route path={''} render={() => (
                <WishlistToggler isMyProfile={boolean('Мой профиль?', true)}
                                 isWishPage={boolean('Страница желаемого?', false)}
                />
            )} />
        </BrowserRouter>
    ));