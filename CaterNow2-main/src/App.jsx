// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Login from "./Pages/login.jsx";
import Signup from "./Pages/Signup.jsx";
import WeddingCatering from "./Pages/WeddingCatering.jsx";
import CorporateCatering from "./Pages/CorporateEvents.jsx";
import PrivateParties from "./Pages/PrivateParties.jsx";
import BirthdayCatering from "./Pages/BirthdayParties.jsx";
import HomeCatering from "./Pages/HomeCatering.jsx";
import BBQCatering from "./Pages/BBQCatering.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Header from "./components/Header.jsx";  // Global Header
import Footer from "./components/Footer.jsx";  // Global Footer
import { AuthProvider } from "./components/AuthContext";  // Auth Provider
import BBQCateringPackages from "./Pages/BBQCateringPackages.jsx";
import WeddingCateringPackages from "./Pages/WeddingCateringPackages";
import CorporateCateringPackages from "./Pages/CorporateCateringPackages";
import HomeCateringPackages from "./Pages/HomeCateringPackages";
import PrivateCateringPackages from "./Pages/PrivateCateringPackages";
import BirthdayCateringPackages from "./Pages/BirthdayCateringPackages";
import PackageCustomization from "./components/PackageCustomization.jsx";
import BillingInformation from "./components/BillingInformation";
import BookingConfirmed from "./Pages/BookingConfirmed.jsx";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wedding-catering" element={<WeddingCatering />} />
          <Route path="/corporate-events" element={<CorporateCatering />} />
          <Route path="/private-parties" element={<PrivateParties />} />
          <Route path="/birthday-parties" element={<BirthdayCatering />} />
          <Route path="/home-catering" element={<HomeCatering />} />
          <Route path="/bbq-catering" element={<BBQCatering />} />
          <Route path="/catering/:id" element={<BBQCateringPackages />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/wedding-catering/:id" element={<WeddingCateringPackages />} />
          <Route path="/corporate-catering/:id" element={<CorporateCateringPackages />} />
          <Route path="/home-catering/:id" element={<HomeCateringPackages />} />
          <Route path="/private-catering/:id" element={<PrivateCateringPackages />} />
          <Route path="/birthday-catering/:id" element={<BirthdayCateringPackages />} />
          <Route path="/customize" element={<PackageCustomization />} />
          <Route path="/billing-information" element={<BillingInformation />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
