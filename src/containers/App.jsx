import React from 'react';

import RootLayout from './RootLayout';
import Navbar from '../components/navbar/Navbar';
import LoginModal from '../components/modals/LoginModal';

const App = () => {

  return (
    <React.Fragment>
      <Navbar />
      <LoginModal />
      <RootLayout />
    </React.Fragment>
  );
};

export default App;