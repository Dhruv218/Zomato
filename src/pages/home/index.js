import React, { useState } from 'react';
import Header from '../../components/common/header';
import Taboptions from '../../components/common/taboptions';
import Footer from '../../components/common/footer';
import Dineout from '../../components/dineout';
import Nightlife from '../../components/nightlife'
import Delivery from '../../components/delivery';
import TabOptions from '../../components/common/taboptions';


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
      <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
      </div>
    );
  };
  
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
  
      case "Dining Out":
        return <Dineout />;
  
      case "Nightlife":
        return <Nightlife />;
  
      default:
        return <Delivery />;
    }
  };
  export default HomePage;

 