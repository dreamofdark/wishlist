import React from 'react';
import './App.css';
import { MainPage } from './Pages/Main/MainPage';
import { FriendsPage } from './Pages/Friends/FriendsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MePage } from './Pages/Me/MePage';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route path={'/friends'} component={FriendsPage}/>
                  <Route path={'/me'} component={MePage}/>
                  <Route component={MainPage}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
