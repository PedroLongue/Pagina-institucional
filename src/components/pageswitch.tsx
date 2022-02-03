import React from "react";

import { Route, Routes } from "react-router-dom";

import { About } from "../pages/about";
import { Payments } from "../pages/payments";
import { Delivery } from "../pages/delivery";
import { Refund } from "../pages/refund";
import { Safety } from "../pages/safety";
import { Contact } from "../pages/contact";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export { Pages };
