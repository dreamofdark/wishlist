import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { SearchResult } from './SearchResult';


storiesOf('SearchResult', module)
    .add('default', () => (
        <SearchResult
                text={text('text', 'iPhone XS MAX 256Gb Gold')}
                query={text('query', 'iPh')}
                isMobile={boolean('Mobile', false)}
        />
    ));