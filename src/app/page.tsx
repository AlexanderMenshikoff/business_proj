import React from 'react';
import NavigationPanel from './components/NavigationPanel';
import Template from './components/Template';
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock';
import FourthBlock from './components/FourthBlock';
import CustomerBlock from './components/CustomerBlock';
import FAQBlock from './components/FAQBlock';
import AlmostEndBlock from './components/AlmostEndBlock';
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <Template>
      <NavigationPanel />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock/>
      <FourthBlock/>
      <CustomerBlock/>
      <FAQBlock/>
      <AlmostEndBlock/>
      <Footer/>
    </Template>
    
  );
};

export default MainPage;
