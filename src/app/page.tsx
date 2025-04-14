import React from 'react';
import NavigationPanel from './components/NavigationPanel';
import Template from './components/Template';
import ActionableInsightsSection from './components/ActionableInsightsSection';
import DataInsightsOverview from './components/DataInsightsOverview';
import RealTimeInsightsDashboard from './components/RealTimeInsightsDashboard';
import DataVisualizationInsights from './components/DataVisualizationInsights';
import CustomersBlock from './components/CustomersBlock';
import FAQBlock from './components/FAQBlock';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';


const MainPage = () => {
  return (
    <Template>
      <NavigationPanel />
      <DataInsightsOverview/>
      <ActionableInsightsSection/>
      <RealTimeInsightsDashboard/>
      <DataVisualizationInsights/>
      <CustomersBlock/>
      <FAQBlock/>
      <CallToActionSection/>
      <Footer/>
    </Template>
    
  );
};

export default MainPage;
