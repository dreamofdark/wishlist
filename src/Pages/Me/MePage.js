import React, { Component } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Profile } from '../../Components/Profile/Profile';
import { Gallery } from '../../Components/Gallery/Gallery';
import { WishlistToggler } from '../../Components/WishlistToggler/WishlistToggler';


const user = {
    name: 'Андрей Кэмбербетч',
    avatar: '',
};

const mock = [
    {
        name: 'Андрей Морозов',
        avatar: '',
    },
    {
        name: 'Антон Денисов',
        avatar: '',
    },
    {
        name: 'Андрей Морозов',
        avatar: '',
    },
    {
        name: 'Антон Денисов',
        avatar: '',
    },
    {
        name: 'Андрей Морозов',
        avatar: '',
    },
    {
        name: 'Антон Денисов',
        avatar: '',
    },
];

export class MePage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Profile user={user}/>
                <WishlistToggler isMyProfile={true}/>
                <Gallery />
            </>
        )
    }
}
