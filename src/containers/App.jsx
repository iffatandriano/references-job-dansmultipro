import React from 'react';

import RootLayout from './RootLayout';
import Navbar from '../components/navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <RootLayout />
    </React.Fragment>
  );
};

export default App;