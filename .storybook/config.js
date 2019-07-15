import { configure, addDecorator, addParameters} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

addDecorator(withInfo);
addDecorator(withKnobs);
addParameters({
    options: {
        theme: create({
            base: 'dark',
            colorSecondary: '#ff00ff',
            brandTitle: 'Wishlist',
        }),
    },
});

function loadStories() {
    require('../stories/index.js');
    require('../src/Components/Button/Button.stories');
    require('../src/Components/WishItem/WishItem.stories');
    require('../src/Components/Spinner/Spinner.stories');
    require('../src/index');

    // You can require as many stories as you need.
}

configure(loadStories, module);