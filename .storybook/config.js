import { configure, addDecorator, addParameters} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

addDecorator(withInfo);
addDecorator(withKnobs);
addParameters({
    options: {
        theme: create({
            base: 'light',
            colorSecondary: '#ff00ff',
            brandTitle: 'Wishlist',
        }),
    },
});

function loadStories() {
    require('../stories/index.js');
    require('../src/Components/Button/Button.stories');
    require('../src/Components/Search/Search.stories');
    require('../src/Components/Search/SearchResult/SearchResult.stories');
    require('../src/Components/Avatar/Avatar.stories');
    require('../src/Components/Friends/Friends.stories.js');
    require('../src/Components/ProfileMini/ProfileMini.stories.js');
    require('../src/Components/Profile/Profile.stories.js');
    require('../src/Components/StyledLink/StyledLink.stories.js');
    require('../src/Components/ToolTip/ToolTip.stories.js');
    require('../src/Components/Button/Button.stories');
    require('../src/Components/WishItem/WishItem.stories');
    require('../src/Components/WishlistToggler/WishlistToggler.stories');
    require('../src/Components/Spinner/Spinner.stories');
    require('../src/Components/RoundButton/RoundButton.stories');
    require('../src/index');

    // You can require as many stories as you need.
}

configure(loadStories, module);