import React, {useState} from 'react';
import Top from './Components/Top/Top';
import Bottom from './Components/Bottom/Bottom';
import { AppContainer } from './style';

function App() {

  return (
    <AppContainer>
      <Top/>
      <Bottom/>
    </AppContainer>
  );
}

export default App;
