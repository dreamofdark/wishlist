import React, { Component } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import { FriendsList } from '../../Components/FriendsList/FriendsList';

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

export class FriendsPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header text={'Мои друзья'}/>
                <Search />
                <FriendsList friends={mock}/>
            </>
        )
    }
}
