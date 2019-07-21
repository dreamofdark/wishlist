import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { StyledLink } from './StyledLink';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('StyledLink', module)
    .add('default', () => (
        <BrowserRouter>
            <Route path={'/'}
                   render = {() =>
                       <StyledLink text={text('Text', 'Ссылочка')}
                                   to={text('To', '#')}
                        />
                   }
            />
        </BrowserRouter>
    ));