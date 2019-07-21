import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { ToolTip } from './ToolTip';
import { StyledLink } from '../StyledLink/StyledLink';
import { BrowserRouter, Route } from 'react-router-dom';


storiesOf('ToolTip', module)
    .add('default', () => (
        <ToolTip>Привет</ToolTip>
    ))
    .add('with jsx', () => (
        <BrowserRouter>
            <Route path={''} render={() => (
                <ToolTip>
                    <div>
                        <div>
                            Это подарок для пользователя
                        </div>
                        <StyledLink text={"Аркадий Паровозов"} fontSize={'9px'}/>
                    </div>
                </ToolTip>
            )} />
        </BrowserRouter>
    ));