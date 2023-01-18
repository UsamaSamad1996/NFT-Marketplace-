import React from "react";
import NavigationBar from "./Components/NavigationBar";
import HeroSection from "./Components/HeroSection";
import TrendingCollection from "./Components/TrendingCollection";
import TopCreators from "./Components/TopCreators";
import BrowseCategories from "./Components/BrowseCategories";
import DiscoverMore from "./Components/DiscoverMore";
import NFThighlights from "./Components/NFThighlights";
import HowItWorks from "./Components/HowItWorks";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverMore />
      <NFThighlights />
      <HowItWorks />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
