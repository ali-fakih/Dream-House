import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIN from "./Pages/SignIN";
import SignUP from "./Pages/SignUP";
import ResetPassword from "./Pages/ResetPassword";
import VerifPage from "./Pages/VerifPage";
import HomePage from "./Pages/homepage.js";
import BuyPage from "./Pages/buy.js";
import SellPage from "./Pages/sell.js";
import AgentPage from "./Pages/agent.js";
import AboutPage from "./Pages/about.js";
import ContactPage from "./Pages/contact.js";
import PropertyPage from "./Pages/property.js";
import ChatPage from "./Pages/chat.js";


import Layout from "./Components/layout/layout";




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Route for home page */}
          <Route path="/" element={<HomePage />} />


          {/* Route for SignIN component */}
          <Route path="/signin" element={<SignIN />} />
          {/* Route for SignIN component */}
          <Route
            path="/reset-password/:userId/:token"
            element={<ResetPassword />}
          />

          {/* Route for SignIN component */}
          <Route path="/emailVerify" element={<VerifPage />} />
          {/* Route for SignUP component */}
          <Route path="/signup" element={<SignUP />} />





          {/* Route for buying page */}
          <Route path="/buy" element={<BuyPage />} />
          {/* Route for selling page */}
          <Route path="/sell" element={<SellPage />} />
          {/* Route for agent page */}
          <Route path="/agent" element={<AgentPage />} />
          {/* Route for about page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Route for contact page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Route for property estates */}
          <Route path="/properties" element={<PropertyPage />} />

          {/* Route for contact page */}
          <Route path="/chat" element={<ChatPage />} />






        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
