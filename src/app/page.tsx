import React from 'react';
import NavigationPanel from './components/NavigationPanel';
import Template from './components/Template';
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';

const MainPage = () => {
  return (
    <Template>
      <NavigationPanel />
      <FirstBlock />
      <SecondBlock />
    </Template>
  );
};

export default MainPage;
