import React from 'react';
// import {Button} from 'components/common';
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';

const GlobalStyle = createGlobalStyle`
    body{
      background: white;
      min-height: 100vh;
      margin: 0;
      color: black;
      font-family: 'Kaushan Script';
    }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <h1>App</h1>
      <Button>Primary</Button>
      <Button secondary >Secondary</Button>
      <Button disabled>disabled</Button>
      <Button large>large</Button> */}
      <BrowserRouter>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
