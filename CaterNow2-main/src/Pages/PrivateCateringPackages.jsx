// src/Pages/PrivateCateringPackages.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CateringDetails from "../components/CateringDetails";
import PrivateCaterers from "../data/PrivateCatering.json?import";

const PrivateCateringPackages = () => {
    const { id } = useParams();
    const caterer = PrivateCaterers.find((c) => String(c.id) === String(id));

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return <CateringDetails caterer={caterer} />;
};

export default PrivateCateringPackages;
