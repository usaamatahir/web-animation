import React from 'react';
import { Loader, Header, Vision, FullStack, MobileApp, Footer} from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Vision />
      <FullStack />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
