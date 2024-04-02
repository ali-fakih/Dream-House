// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//! --------------------!Website Pages -------------------------------------
import Login from "./Pages/Login.js";
import NotFound from "./Pages/NotFound.js";
import SignUp from "./Pages/SignUp.js";
import ResetPassword from "./Pages/ResetPassword.js";
import ProtectedRoute from "./data/ProtectRoute.js";
import HomePage from "./Pages/homepage.js";
import BuyPage from "./Pages/buy.js";
import SellPage from "./Pages/sell.js";
import AgentPage from "./Pages/agent.js";
import AboutPage from "./Pages/about.js";
import ContactPage from "./Pages/contact.js";
import PropertyPage from "./Pages/homeproperty.js";
import AuthPage from "./Components/auth/authPage";
import ChatsPage from "./Components/chat/chatsPage";
import Layout from "./Components/layout/layout";
import HomeProperty from "./Pages/realestateproperty.js";
import AgentProperty from "./Pages/agentproperty.js";
//! --------------------!dashboard Admin -------------------------------------
import DashoboardAdmin from "./Pages/Dashboard/DashoboardAdmin.js";
import MainBody from "./Pages/Dashboard/MainBody.js";
import UserBody from "./Pages/Dashboard/UserBody.js";
import HousesBody from "./Pages/Dashboard/HousesBody.js";
import HouseProperty from "./Pages/Dashboard/HouseProperty.js";
import RealEstate from "./Pages/Dashboard/RealEstate.js";
import RealEstateProperty from "./Pages/Dashboard/RealEstateProperty.js";
import ProfilePage from "./Pages/Dashboard/ProfilePage.js";

//! --------------------!dashboard Agent -------------------------------------
import DashoboardAgnet from "./Pages/Agent_DashBoard/DashoboardAdmin.js";
import MainBodyAgent from "./Pages/Agent_DashBoard/MainBody.js";
import HousesBodyAgent from "./Pages/Agent_DashBoard/HousesBody.js";
import HousePropertyAgent from "./Pages/Agent_DashBoard/HouseProperty.js";
import RealEstateAgent from "./Pages/Agent_DashBoard/RealEstate.js";
import RealEstatePropertyAgent from "./Pages/Agent_DashBoard/RealEstateProperty.js";
import ProfilePageAgent from "./Pages/Agent_DashBoard/ProfilePage.js";

function App() {
  const [user, setUser] = useState(undefined);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {" ------------------ website  pages  -------------------------"}
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/reset-password/:userId/:token"
            element={<ResetPassword />}/>
          <Route path="*" element={<NotFound />} />

          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/agent" element={<AgentPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />
          {/* property page for home properties */}
          <Route path="/properties/:propertyId" element={<PropertyPage />} />

          {/* property page for real estates properties */}
          <Route path="/realestateproperty/:id" element={<HomeProperty />} />

          {/* property page for agents properties */}
          <Route path="/agents/:agentId" element={<AgentProperty />} />
          {/* routes for the auth and hatengine */}
          <Route
            path="/auth"
            element={
              user ? (
                <ChatsPage user={user} />
              ) : (
                <AuthPage onAuth={(user) => setUser(user)} />
              )
            }
          />
          {" ------------------ website  pages ends -------------------------"}

          {" ------------------ Admin DashBoard -------------------------"}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashoboardAdmin />
              </ProtectedRoute>
            }
          >
            <Route path="profilePage" element={<ProfilePage />} />
            <Route path="mainBody" element={<MainBody />} />
            <Route path="userBody" element={<UserBody />} />
            <Route path="housesBody" element={<HousesBody />} />{" "}
            <Route path="house/:id" element={<HouseProperty />} />
            <Route path="realEstate" element={<RealEstate />} />
            <Route path="realEstate/:id" element={<RealEstateProperty />} />
          </Route>
          {" ------------------ Admin DashBoard ends -------------------------"}

          {" ------------------ Agent DashBoard -------------------------"}
          <Route
            path="/dashboardAgent"
            element={
              <ProtectedRoute>
                <DashoboardAgnet />
              </ProtectedRoute>
            }
          >
            <Route path="ProfilePageAgent" element={<ProfilePageAgent />} />
            <Route path="MainBodyAgent" element={<MainBodyAgent />} />
            <Route path="HousesBodyAgent" element={<HousesBodyAgent />} />{" "}
            <Route
              path="HousePropertyAgent/:id"
              element={<HousePropertyAgent />}
            />
            <Route path="RealEstateAgent" element={<RealEstateAgent />} />
            <Route
              path="RealEstatePropertyAgent/:id"
              element={<RealEstatePropertyAgent />}
            />
          </Route>
          {" ------------------ Agent DashBoard ends -------------------------"}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
