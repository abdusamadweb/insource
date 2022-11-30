import './App.scss';

// global styles
import './assets/styles/normalize.css'
import './assets/styles/flex-box.css'
import './assets/styles/global.css'

import React, {useLayoutEffect, useRef} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Functional from "./pages/Functional";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Company from "./pages/Company";
import CompanyPartners from "./pages/CompanyPartners";
import CompanyContacts from "./pages/CompanyContacts";
import Support from "./pages/Support";
import {ServicesCRM, ServicesPO, ServicesSEO, ServicesTech, ServicesWEB} from "./pages/services";
import About from "./pages/About";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {

  const tawkMessengerRef = useRef()
  const onLoad = () => {
    tawkMessengerRef.current.minimize()
    console.log('onLoad works!');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Header />
          <TawkMessengerReact
              propertyId="637ca134b0d6371309d06911"
              widgetId="1gifdbd96"
              ref={tawkMessengerRef}
              onLoad={onLoad}
          />
          <Routes history={BrowserRouter}>
            <Route path='/' element={<Home />} />
            <Route path='/functional' element={<Functional />} />
            <Route path='/company' element={<Company />} />
            <Route path='/company/partners' element={<CompanyPartners />} />
            <Route path='/company/contacts' element={<CompanyContacts />} />
            <Route path='/support' element={<Support />} />
            <Route path='/services/crm' element={<ServicesCRM />} />
            <Route path='/services/po' element={<ServicesPO />} />
            <Route path='/services/seo' element={<ServicesSEO />} />
            <Route path='/services/web-sites' element={<ServicesWEB />} />
            <Route path='/services/tech-tasks' element={<ServicesTech />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
