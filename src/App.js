import React from "react";
import './App.css';
import Header from './components/Header';
import HomeBanner from "./components/HomeBanner";
import Tabs from './components/Tabs';
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import MenuData from "./data";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="bg-white max-w-[1440px] container mx-auto relative">
      <Header setShowModal={setShowModal} />
      <HomeBanner />
      <Tabs color="red" data={MenuData} />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
