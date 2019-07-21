import React, { Component } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import { Gallery } from '../../Components/Gallery/Gallery';

export class MainPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <Search />
                <Gallery />
            </>
        )
    }
}
